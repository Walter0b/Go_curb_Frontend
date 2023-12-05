import {
    Box,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Select,
    useDisclosure
} from "@chakra-ui/react";
import {useRef, useState} from "react";
import RelatedInvoices from "../RelatedInvoices";

import {paymentMode, payments, customers} from "../../mock/data";

export default function PaymentDetailsDrawer(props) {

    const [size, setSize] = useState('lg')

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => props.onClose()
    })

    const [customerData, setCustomerData] = useState(customers);
    const [paymentModeData, setPaymentModeData] = useState(paymentMode);
    const [paymentData, setPaymentData] = useState(payments);

    const [amount, setAmount] = useState(0);

    return (
        <>
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        Payment Details
                    </DrawerHeader>
                    <DrawerBody>
                        <Flex alignItems='horizontal' gap='5' minWidth='max-content'>
                            <Box w='100%' p={4}>
                                <FormControl>
                                    <FormLabel>Deposit To</FormLabel>
                                    <Select placeholder='Select account'>
                                        {customerData.map((customer) => <option key={customer.id} value={customer.id}>{customer.accountNumber}</option>)}
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Payment Mode</FormLabel>
                                    <Select placeholder='Select payment mode'>
                                        {paymentModeData.map((pm) => <option key={pm} value={pm}>{pm}</option>)}
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
                                        <Input placeholder='Enter amount' value={amount} onChanges={(e) => setAmount(e.target.value)}/>
                                    </InputGroup>
                                </FormControl>
                            </Box>
                        </Flex>
                        <RelatedInvoices/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}