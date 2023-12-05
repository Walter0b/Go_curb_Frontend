import {
    Box,
    Button, Divider,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
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
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";
import {getImputations, getSingleCustomerInfo} from "../../services/api";
import {reformatDate} from "../../utils/utilsMethods";

export default function CreditsModal(props) {

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => props.onClose()
    })

    const [associatedPayments, setAssociatedPayments] = useState([]);

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    useEffect(() => {
        getImputations().then((response) => {
            //console.log(response.data)
        })
        getSingleCustomerInfo(props.invoice.CustomerID, 'Payments').then((response) => {
            console.log(response)
            setAssociatedPayments(response.Payments.Payments)
        }).catch(() => {})
    }, [props?.invoice]);


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
                    <ModalHeader>Apply credits to {props.invoice.InvoiceNumber}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Text fontSize='15px' color='black.300' mb={5}>
                            Invoice Balance: {props.invoice.Balance}
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
                                        {associatedPayments.map((payment) => (<Tr key={payment.ID}>
                                                <Td>Payment</Td>
                                                <Td>{payment.Number}</Td>
                                                <Td>{reformatDate(payment.Date)}</Td>
                                                <Td>{payment.amount}</Td>
                                                <Td>{payment.Balance}</Td>
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
                                            </Tr>))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Flex>
                            <span></span>
                            <Divider/>
                            <Box w='60%' mt={6}>
                                <FormControl>
                                    <FormLabel>Amount to Credit: {props.invoice.Balance}</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            color='gray.300'
                                            fontSize='1em'
                                            w='40%'
                                            children='Invoice Balance Due:'
                                        />
                                        <Input placeholder='' isDisabled={true}/>
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