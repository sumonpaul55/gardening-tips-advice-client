import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function SuccessPayment() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit iure totam, doloribus animi molestias ut, ipsum consequatur provident perspiciatis, distinctio dolor enim aliquid! Suscipit veritatis culpa voluptate dignissimos porro consequatur inventore officiis, at quidem, tenetur deserunt, amet qui illum aperiam nulla ducimus voluptatem facilis placeat quisquam beatae sequi soluta officia.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}