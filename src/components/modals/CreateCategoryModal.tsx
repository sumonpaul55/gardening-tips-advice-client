/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useCreateCategoryMutation } from "@/redux/features/category/category.api";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import { toast } from "sonner";
export default function CreateCategory() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [categroy, setCategory] = useState<string>()
    const [createCategory] = useCreateCategoryMutation()
    const [file, setFile] = useState<any>()


    const handleCreateCategory = async () => {
        if (categroy) {
            if (file) {
                const image = await uploadImageToCloudinary(file)
                console.log(image)
                const datas = { category: categroy, image }
                const res = await createCategory(datas) as any
                console.log(res)
                if (res?.data?.success) {
                    toast.success(res?.data?.message)
                } else if (res?.error) {
                    toast.error(res?.error?.data?.message || "something went wrong")
                }
            } else {
                const datas = { category: categroy }
                const res = await createCategory(datas) as any
                console.log(res)
                if (res?.data?.success) {
                    toast.success(res?.data?.message)
                } else if (res?.error) {
                    toast.error(res?.error?.data?.message || "something went wrong")
                }
            }
        } else {
            toast.error("Category name missing")
        }
    }
    return (
        <div className="flex-1">
            <Button onPress={onOpen} className="min-fit px-4 py-6 bg-secondary text-white">Create a new Category?</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add a Categroy</ModalHeader>
                            <ModalBody>
                                <Input errorMessage={!categroy} label="Category Name" onChange={(e) => setCategory(e.target.value)} />
                                <label htmlFor="categoryimage" className="mt-3 rounded-lg block border p-3 cursor-pointer">image suggested(400*250) px</label>
                                <Input isInvalid={!file} type="file" id="categoryimage" className="hidden" onChange={(e: any) => setFile(e.target.files[0])} />
                                <Button color="primary" onPress={onClose} onClick={handleCreateCategory} className="mt-5">
                                    Create
                                </Button>
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