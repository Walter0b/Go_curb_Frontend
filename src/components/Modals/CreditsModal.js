import {
    Box,
    Button, Divider,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton, MenuDivider,
    MenuGroup, MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Table,
    TableContainer, Tbody, Td,
    Text, Tfoot,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";
import RelatedInvoices from "../RelatedInvoices";
import {useRef} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";

export default function CreditsModal(props) {

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
                    <ModalHeader>Apply credits to xxxx</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Text fontSize='15px' color='black.300' mb={5}>
                            Invoice Balance xxx: xxxxxx
                        </Text>
                        <Box border='1px' mt={5} borderRadius='8' borderColor='gray.200' w='100%'>
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>From</Th>
                                            <Th>Transaction#</Th>
                                            <Th>Date</Th>
                                            <Th>Amount</Th>
                                            <Th>Balance</Th>
                                            <Th>To Apply</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td>
                                                <InputGroup>
                                                    <InputLeftElement
                                                        pointerEvents='none'
                                                        color='gray.300'
                                                        fontSize='1em'
                                                        children='XAF'
                                                    />
                                                    <Input placeholder=''/>
                                                </InputGroup>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Flex>
                            <span></span>
                            <Divider/>
                            <Box w='60%' mt={6}>
                                <FormControl>
                                    <FormLabel>Amount to Credit: 0 XAF</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            color='gray.300'
                                            fontSize='1em'
                                            w='40%'
                                            children='Invoice Balance Due:'
                                        />
                                        <Input placeholder='' disabled='true'/>
                                    </InputGroup>
                                </FormControl>
                            </Box>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3}>
                            Apply credits
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}