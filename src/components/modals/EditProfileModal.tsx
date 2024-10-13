/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Divider, } from "@nextui-org/react";
import React, { useState } from "react";
// import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
// import { toast } from "sonner";
import GFrom from "../forms/GFrom";
import GInput from "../forms/GInput";
import { FaEdit } from "react-icons/fa";
import { FieldValues, SubmitHandler } from "react-hook-form";
import GTeaxtArea from "../forms/GTextArea";
import { useGetUserByidQuery, useUpdateUserMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import { useLocalUser } from "@/context/user.Provider";



export default function EditUser() {
    const [update,] = useUpdateUserMutation()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { user: localUser } = useLocalUser()
    const { data } = useGetUserByidQuery(`${localUser?._id}`)
    const dataUser = data?.data;
    const [file, setFile] = useState<any>()

    const socilaLinksValue = dataUser?.links?.map((item: { url: string }) => item)

    const handleEditUser: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Updating...");
        let profilePhoto;

        if (file) {
            profilePhoto = await uploadImageToCloudinary(file)
        }

        const updateData = {
            profilePhoto: profilePhoto || "",
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

        const updateInfo = { id: dataUser?._id, updateData }
        try {
            const res = await update(updateInfo) as any;

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
                                        <GInput name="name" label="Your Name" defaultValue={dataUser?.name} />
                                        <Input label="Email" defaultValue={dataUser?.email} isDisabled={true} />
                                        <Input label="Role" defaultValue={dataUser?.role} isDisabled={true} />
                                    </div>

                                    <div className="mt-3">
                                        <GTeaxtArea className="" name="address" label="Address" defaultValue={dataUser?.address ? dataUser?.address : ""} />
                                    </div>

                                    <div className="mt-4">
                                        <h4>Socila links</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
                                            <GInput label="Facebook" defaultValue={socilaLinksValue[0]?.url ? socilaLinksValue[0]?.url : "https://"} name="facebook" isRequired={false} />
                                            <GInput label="Youtube" defaultValue={socilaLinksValue[1]?.url ? socilaLinksValue[1]?.url : "https://"} name="youtube" isRequired={false} />
                                            <GInput label="Twitter" defaultValue={socilaLinksValue[2]?.url ? socilaLinksValue[2]?.url : "https://"} name="twitter" isRequired={false} />
                                            <GInput label="Instagram" defaultValue={socilaLinksValue[3]?.url ? socilaLinksValue[3]?.url : "https://"} name="instagram" isRequired={false} />
                                            <GInput label="Printerest" defaultValue={socilaLinksValue[4]?.url ? socilaLinksValue[4]?.url : "https://"} name="printerest" isRequired={false} />
                                            <GInput label="Linkedin" defaultValue={socilaLinksValue[5]?.url ? socilaLinksValue[5]?.url : "https://"} name="linkedin" isRequired={false} />
                                        </div>

                                        <Divider className="my-8" />

                                        <div className="flex flex-col md:flex-row gap-4 mt-3">
                                            <input onChange={(e) => onChangeFile(e.target.files)} type="file" className="w-full bg-gray-100 p-2 rounded-lg" />
                                            <GInput name="phoneNumber" label="Phone" defaultValue={dataUser?.phoneNumber ? dataUser?.phoneNumber : ""} />
                                        </div>
                                    </div>
                                    <Button type="submit" onPress={onClose} className="mt-4 md:w-[300px] mx-auto bg-secondary text-white">Update</Button>
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