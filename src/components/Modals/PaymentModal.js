import {
    Box, Button, Center,
    Flex,
    FormControl, FormLabel, Input, InputGroup, InputLeftElement, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select, Text, useDisclosure
} from "@chakra-ui/react";
import TravelItems from "../TravelItems";
import TravelItemsDrawer from "./TravelItemsDrawer";
import {useRef} from "react";
import RelatedInvoices from "../RelatedInvoices";

export default function PaymentModal(props) {

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => props.onClose()
    })

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size='full'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Payment Received</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Text fontSize='20px' color='green' mb={1}>
                            0 XAF
                        </Text>
                        <Text fontSize='15px' color='black.300' mb={5}>
                            Over Payment
                        </Text>
                        <Flex alignItems='horizontal' gap='5' minWidth='max-content'>
                            <Box w='100%' p={4}>
                                <FormControl>
                                    <FormLabel>Deposit To</FormLabel>
                                    <Select placeholder='Select option'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Payment Mode</FormLabel>
                                    <Select placeholder='Select option'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Amount</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            color='gray.300'
                                            fontSize='1em'
                                            children='XAF'
                                        />
                                        <Input placeholder='Enter amount'/>
                                    </InputGroup>
                                </FormControl>
                            </Box>
                            <Box w='100%' bgColor='gray.50' p={4} borderRadius={8}>
                                <Flex alignItems='vertical' gap='3'>
                                    <FormControl>
                                        <FormLabel>Customer Account</FormLabel>
                                        <Select placeholder='Select option'>
                                            <option value='option1'>Option 1</option>
                                            <option value='option2'>Option 2</option>
                                            <option value='option3'>Option 3</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Customer Name</FormLabel>
                                        <Input placeholder='Customer Name' />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Customer Email</FormLabel>
                                        <Input placeholder='Customer Email' />
                                    </FormControl>
                                </Flex>
                            </Box>
                        </Flex>
                        <RelatedInvoices/>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}