"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

import { toast } from "sonner";
import { Modal, Button, useDisclosure, Card, ModalContent, ModalFooter } from "@nextui-org/react";
import { Tpost } from "@/types";
import { useMakePaymentMutation } from "@/redux/features/auth/auth.api";

import { useLocalUser } from "@/context/user.Provider";
import Swal from "sweetalert2";




const CheckoutForm = ({ userInfo, post, btnClass }: { btnClass?: string; post?: Tpost[]; userInfo: { name: string | undefined; email: string | undefined } }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [makePayment] = useMakePaymentMutation()
    const { user } = useLocalUser()

    const isUpVotesTrue = post?.some((item: Tpost) => item.upVotes > item?.downVotes)
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
            const response = await fetch("http://localhost:5000/api/user/confirm-payment", {
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
                const paymentInfo = {
                    ...userInfo, transactionId: paymentResult?.data?.id, paymentTime: paymentResult?.data?.created, userId: user?._id
                }
                const res = makePayment(paymentInfo) as any;

                if (res?.error) {
                    toast.error(res?.error?.message || res?.error?.data?.message || "Something went wrong", { id: toastId, duration: 4000 })
                } else {
                    toast.success(res?.date?.data?.message, { id: toastId, duration: 4000 });
                    Swal.fire({
                        title: "Congratulations Your now verified memeber of NextLeaf",
                        icon: "success",
                        showCancelButton: true,
                        denyButtonText: `ok`
                    })
                }

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
            <Button onPress={onOpen} isDisabled={!isUpVotesTrue} className={btnClass && btnClass}>Verifiy</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <Card className="p-6 text-center bg-white rounded-lg shadow-lg">
                                <h2 className="text-center md:text-lg my-3 font-semibold font-roboto_slab">You have to pay $40</h2>
                                <form onSubmit={handleSubmit}>
                                    <CardElement />
                                    <Button
                                        size="md"
                                        type="submit"
                                        disabled={!stripe}
                                        onPress={onClose}
                                        className="w-full mt-4">Pay & Get Verified</Button>
                                </form>
                            </Card>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" size="sm" onPress={onClose}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </>)}
                </ModalContent>
            </Modal>

        </>
    )
}

export default CheckoutForm