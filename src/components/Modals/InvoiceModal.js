import {
    Box,
    Button, Center, Divider, Flex, FormControl, FormLabel, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select,
    Text,
    useDisclosure
} from "@chakra-ui/react";

import {useRef, useState} from "react";
import TravelItems from "../TravelItems";
import TravelItemsDrawer from "./TravelItemsDrawer";

export default function InvoiceModal(props) {

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => props.onClose()
    })

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const [input, setInput] = useState('');
    const [isTravelItemDrawerOpen, setIsTravelItemDrawerOpen] = useState(false);

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
                    <ModalHeader>
                        New Invoice
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={4}>
                        <Text fontSize='20px' color='tomato' mb={1}>
                            0 XAF
                        </Text>
                        <Text fontSize='15px' color='black.300' mb={5}>
                            Balance due
                        </Text>
                        <Flex alignItems='horizontal' p={4} gap='5' minWidth='max-content' border='1px' borderColor='gray.200' borderRadius={5}>
                            <Box w='100%'>
                                <FormControl isRequired>
                                    <FormLabel>Customer Account</FormLabel>
                                    <Select placeholder='Select option'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Due Date</FormLabel>
                                    <Input type='date' placeholder='Due Date' />
                                </FormControl>
                            </Box>
                            <Box w='100%'>
                                <FormControl>
                                    <FormLabel>Account Name</FormLabel>
                                    <Input ref={initialRef} placeholder='Account name' />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Customer Email</FormLabel>
                                    <Input type='email' ref={initialRef} placeholder='Email' />
                                </FormControl>
                            </Box>
                        </Flex>
                        <Center>
                            <Box mt={8} w='80%' border='1px' borderColor='gray.200' borderRadius={8}>
                                <TravelItems
                                    onSetDrawerState={() => setIsTravelItemDrawerOpen(!isTravelItemDrawerOpen)}/>
                            </Box>
                            <TravelItemsDrawer isDrawerOpen={isTravelItemDrawerOpen}
                                               onSetDrawerState={() => setIsTravelItemDrawerOpen(!isTravelItemDrawerOpen)}/>
                        </Center>
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