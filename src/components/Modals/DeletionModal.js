import {
    Text,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader, ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";

export default function DeletionModal(props) {

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => props.onClose()
    })

    const deleteItem = (itemName) => {
        onClose();
    }

    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='none'
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px'
                />
                <ModalContent>
                    <ModalHeader>{`Delete ${props.itemName === 'invoice' ? 'Invoice' : 'Payment'}`}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{`Are you sure you want to delete this ${props.itemName} ?`}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => deleteItem(props.itemName)} colorScheme='red' mr={3}>Yes</Button>
                        <Button onClick={onClose}>No</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}