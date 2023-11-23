import {
    Box, Button,
    Flex,
    FormControl, FormLabel, Input, InputGroup, InputLeftElement, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select, Text, useDisclosure
} from "@chakra-ui/react";

import {useEffect, useRef, useState} from "react";

import {getCustomers, postPayment} from "../../services/api";
import {paymentMode} from "../../mock/data";
import {putCurrenToOriginalState} from "../../utils/utilsMethods";

export default function PaymentModal(props) {

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => {
            setAmount(0)
            props.onClose()
        }
    })

    const [customersData, setCustomersData] = useState([]);
    const [paymentModes, setPaymentModes] = useState(paymentMode);
    const [amount, setAmount] = useState(0);

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const amountRef = useRef(null)
    const paymentModeRef = useRef(null)
    const customerIdRef = useRef(null);

    const handleChange = (e) => {
        e.target.name === 'Amount' && setAmount((e.target.value === '' ? 0 : e.target.value))
    }

    const save = (e) => {
        e.preventDefault();
        const paymentInfos = {
            IdCustomer: customerIdRef.current.value,
            Fop: paymentModeRef.current.value,
            Amount: amountRef.current.value
        }
        postPayment(paymentInfos).then((response) => {
            onClose()
        })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getCustomers().then((response) => {
            setCustomersData(response.data)
        })
    }, []);


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
                <form onSubmit={save}>
                    <ModalContent>
                        <ModalHeader>New Payment Received</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Text fontSize='20px' color='green' mb={1}>
                                {`${putCurrenToOriginalState(amount)} XAF`}
                            </Text>
                            <Text fontSize='15px' color='black.300' mb={5}>
                                Over Payment
                            </Text>
                            <Flex alignItems='horizontal' gap='5' minWidth='max-content'>
                                <Box w='100%' p={4}>
                                    <FormControl>
                                        <FormLabel>Payment Mode</FormLabel>
                                        <Select name='Fop'
                                                placeholder='Select a payment mode'
                                                ref={paymentModeRef} onChange={handleChange}>
                                            {paymentModes.map((pm) => <option value={pm}>{pm}</option>)}
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
                                            <Input placeholder='Enter an amount'
                                                   name='Amount'
                                                   ref={amountRef}
                                                   onChange={handleChange}/>
                                        </InputGroup>
                                    </FormControl>
                                </Box>
                                <Box w='100%' bgColor='gray.50' p={4} borderRadius={8}>
                                    <Flex alignItems='vertical' gap='3'>
                                        <FormControl>
                                            <FormLabel>Customer Account</FormLabel>
                                            <Select placeholder='Select a customer' name='IdCustomer'
                                                    ref={customerIdRef} onChange={handleChange}>
                                                {customersData.map((customer) => <option value={customer.ID} key={customer.ID}>{customer.Customer_name}</option>)}
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Payment Number</FormLabel>
                                            <Input placeholder='PMR-4' isDisabled={true}/>
                                        </FormControl>
                                    </Flex>
                                </Box>
                            </Flex>
                            {/*<RelatedInvoices/>*/}
                        </ModalBody>

                        <ModalFooter>
                            <Button type='submit'
                                    colorScheme='blue'
                                    mr={3} isDisabled={(amount <= 0) || !customerIdRef.current?.value || !paymentModeRef.current?.value}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}