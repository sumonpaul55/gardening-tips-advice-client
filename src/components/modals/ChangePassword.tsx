/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import GFrom from "../forms/GFrom";
import GInput from "../forms/GInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePassValidation } from "@/validationSchema/validationSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [changePassword] = useChangePasswordMutation()
    const handleChangePassword: SubmitHandler<FieldValues> = async (data) => {
        if (!data.oldPassword || !data?.newPassword) {
            toast.error("Pleas provide your correct old or new password")
        } else {
            const res = await changePassword(data) as any;
            if (res?.data?.success) {
                toast.success(res?.data?.message)
            } else {
                toast.error(res?.error?.data?.message || "somethin went wrong")
            }
        }
    }
    return (
        <>
            <Button onPress={onOpen}>Change Password</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Change Old Password?</ModalHeader>
                            <ModalBody>
                                <GFrom onSubmit={handleChangePassword} className="space-y-5" resolver={zodResolver(changePassValidation)}>
                                    <div className="relative">
                                        <GInput type={showPassword ? "password" : "text"} label="Password" name="oldPassword" />
                                        {
                                            showPassword ?
                                                <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer" onClick={() => setShowPassword(false)} /> :

                                                <FaEye className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer" onClick={() => setShowPassword(true)} />
                                        }
                                    </div>
                                    <GInput type="password" label="Password" name="newPassword" />

                                    <Button type="submit">Submit</Button>
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
        </>
    );
}