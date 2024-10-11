/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

import { toast } from "sonner";
import { Modal, Button, useDisclosure, Card } from "@nextui-org/react";


export type TBookingInfo = {
    phone: string | undefined;
    email: string | undefined;
    room: { _id: string; date: string, slots: string[] | any }[];
    totalAmount: number;
    user: string;
}


const CheckoutForm = ({ userInfo }: { userInfo: { name: string; email: string } }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = async (event: React.FormEvent) => {
        const toastId = toast.loading("Data Proccessing...")
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement!
        });
        if (error) {
            toast.error(error.message, { id: toastId, duration: 4000 })
        } else {
            // send response to the server
            const response = await fetch("http://localhost:5000/api/confirm-payment", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ paymentId: paymentMethod.id, price: 40 })
            })
            const paymentResult = await response.json()

            if (paymentResult.success) {
                toast.success(paymentResult.message, { id: toastId })

                // data for back end stor after payment and make user verified
                const newUserInfopaymentInfo = {
                    ...userInfo, transactionId: paymentResult?.data?.id, paymentTime: paymentResult?.data?.created
                }
                console.log(newUserInfopaymentInfo)
                // const res: any = "api call "

                // if (res?.error) {
                //     toast.error(res?.error?.message || res?.error?.data?.message, { id: toastId, duration: 4000 })
                // } else {
                //     toast.success(res?.date?.message, { id: toastId, duration: 4000 });
                //     setIsSuccessModalOpen(true)
                // }

            } else if (!paymentResult.success) {
                toast.error(paymentResult?.message, { id: toastId, duration: 4000 })
            }
            else {
                toast.error(paymentResult?.error?.message, { id: toastId, duration: 4000 })
            }
        }
    }
    return (
        <>
            <Button onPress={onOpen}>Verifiy</Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <Card className="p-6 text-center bg-white rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <CardElement />
                        <Button
                            size="md"
                            type="submit"
                            disabled={!stripe}
                            className="w-full mt-4">Pay and Confirm</Button>
                    </form>

                </Card>
            </Modal>
            {/* <SuccessModal id={paymentId} total={bookingInfo?.totalAmount} isSuccessModalOpen={isSuccessModalOpen} setIsSuccessModalOpen={setIsSuccessModalOpen} totalRoom={bookingInfo?.room?.length} totalSlot={slotNumber} /> */}
        </>
    )
}

export default CheckoutForm