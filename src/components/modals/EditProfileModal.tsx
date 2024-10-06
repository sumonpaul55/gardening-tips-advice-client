/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Divider } from "@nextui-org/react";
import React, { useState } from "react";
// import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
// import { toast } from "sonner";
import GFrom from "../forms/GFrom";
import GInput from "../forms/GInput";
import { FaEdit } from "react-icons/fa";
import { FieldValues, SubmitHandler } from "react-hook-form";
import GTeaxtArea from "../forms/GTextArea";
import { useAppSelector } from "@/redux/hooks";
import { useUpdateUserMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";



export default function EditUser() {
    const [update,] = useUpdateUserMutation()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const localUser = useAppSelector(state => state.auth.user)
    const [file, setFile] = useState<any>()

    const handleEditUser: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Updating...")

        const formData = new FormData()
        const updateData = {
            links: [
                { socialName: "Facebook", url: data?.facebook },
                { socialName: "Youtube", url: data?.youtube },
                { socialName: "Twitter", url: data?.twitter },
                { socialName: "Instagram", url: data?.instagram },
                { socialName: "Pinterest", url: data?.printerest },
                { socialName: "Linkedin", url: data?.linkedin },
            ],
            ...data
        }
        formData.append("data", JSON.stringify(updateData))
        formData.append("file", file)
        const updateInfo = { id: localUser?._id, formData }
        try {
            const res = await update(updateInfo) as any
            console.log(res)
            if (res?.data?.success) {
                toast.success(res?.data?.message, { id: toastId })
            } else if (res?.error) {
                toast.error(res?.error?.data?.message || "something went wrong", { id: toastId })
            }
        } catch (error: any) {
            toast.error(error.message, { id: toastId })
        }
    }

    const onChangeFile = (file: any) => {
        setFile(file[0])
    }
    return (
        <div className="flex-1">
            <Button onPress={onOpen} className="absolute bg-secondary text-white right-0 top-4">Edit? <FaEdit size={15} /></Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="min-w-[60%]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Edit Profile</ModalHeader>
                            <ModalBody>
                                <GFrom onSubmit={handleEditUser}>
                                    <div className="flex items-center gap-3 md:flex-row flex-col">
                                        <GInput name="name" label="Your Name" />
                                        <Input label="Email" defaultValue={localUser?.email} isDisabled={true} />
                                        <Input label="Role" defaultValue={localUser?.role} isDisabled={true} />
                                    </div>
                                    <div className="mt-3">
                                        <GTeaxtArea name="address" label="Address" />
                                    </div>
                                    <div className="mt-4">
                                        <h4>Socila links</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
                                            <GInput label="Facebook" defaultValue="https://" name="https://facebook" isRequired={false} />
                                            <GInput label="Youtube" defaultValue="https://" name="https://" isRequired={false} />
                                            <GInput label="Twitter" defaultValue="https://" name="https://" isRequired={false} />
                                            <GInput label="Instagram" defaultValue="https://" name="https://" isRequired={false} />
                                            <GInput label="https//" defaultValue="https://" name="https://" isRequired={false} />
                                            <GInput label="Linkedin" defaultValue="https://" name="https://" isRequired={false} />
                                        </div>
                                        <Divider className="my-8" />
                                        <div className="flex flex-col md:flex-row gap-4 mt-3">
                                            <input onChange={(e) => onChangeFile(e.target.files)} type="file" className="w-full bg-gray-100 p-2 rounded-lg" />
                                            <GInput name="phoneNumber" label="Phone" />
                                        </div>
                                    </div>
                                    <Button type="submit" className="mt-4 md:w-[300px] mx-auto bg-secondary text-white">Update</Button>
                                </GFrom>
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