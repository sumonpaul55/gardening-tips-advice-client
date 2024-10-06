/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import React, { } from "react";
// import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
// import { toast } from "sonner";




export default function UserProfile() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [file, setFile] = useState<any>()

    // const handleEditUser: SubmitHandler<FieldValues> = async (data) => {
    //     // const image = await uploadImageToCloudinary(file)
    //     // const res = await createCategory(datas) as any
    //     // console.log(res)
    //     // if (res?.data?.success) {
    //     //     toast.success(res?.data?.message)
    //     // } else if (res?.error) {
    //     //     toast.error(res?.error?.data?.message || "something went wrong")
    //     // }
    //     console.log(data)
    // }
    return (
        <div className="flex-1">
            <Button onPress={onOpen} className="absolute bg-secondary text-white right-0 top-4">View profile</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="min-w-[60%]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Edit Profile</ModalHeader>
                            <ModalBody>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}