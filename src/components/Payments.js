import {
    Box,
    Button,
    Center,
    Heading, IconButton, Menu,
    MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Spinner, Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {HamburgerIcon, RepeatIcon} from "@chakra-ui/icons";
import PaymentModal from "./Modals/PaymentModal";
import {useEffect, useState} from "react";
import {FaPenFancy, FaRegCircleXmark} from "react-icons/fa6";
import DeletionModal from "./Modals/DeletionModal";
import PaymentDetailsDrawer from "./Modals/PaymentDetailsDrawer";

import {payments, paymentMode} from "../mock/data";

import {getPayments} from "../services/api";
import {reformatDate} from "../utils/utilsMethods";

export default function Payments() {

    const [isPaymentModalopened, setIsPaymentModalopened] = useState(false);
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);
    const [isDeletionModalOpened, setIsDeletionModalOpened] = useState(false);

    const [paymentData, setPaymentData] = useState(payments);
    const [singlePayment, setSinglePayment] = useState({});

    useEffect(() => {
        getPayments().then((response) => {
            setPaymentData(response.data.map((payment) => {
                return {
                    ...payment,
                    Date: reformatDate(payment.Date)
                }
            }))
        })
    }, [!isPaymentModalopened]);


    return (
        <>
            <Center>
                <Box border='1px' mt='50px' borderRadius='8' borderColor='gray.200' w='90%'>
                    {paymentData.length ? (<TableContainer>
                        <Table variant='striped' colorScheme='facebook'>
                            <Thead>
                                <Tr>
                                    <Th>
                                        <Menu>
                                            <MenuButton
                                                as={IconButton}
                                                aria-label='Options'
                                                icon={<HamburgerIcon/>}
                                                variant='outline'
                                            />
                                            <MenuList>
                                                <MenuGroup title='WITHDRAWALS'>
                                                    <MenuItem>Refund Receipt</MenuItem>
                                                    <MenuItem>Supplier Payment</MenuItem>
                                                    <MenuItem>Transfert to Account</MenuItem>
                                                </MenuGroup>
                                                <MenuDivider/>
                                                <MenuGroup title='DEPOSITS'>
                                                    <MenuItem>Sales Receipt</MenuItem>
                                                    <MenuItem
                                                        onClick={() => setIsPaymentModalopened(!isPaymentModalopened)}>Customer
                                                        Payment</MenuItem>
                                                    <MenuItem>transfer from Account</MenuItem>
                                                </MenuGroup>
                                            </MenuList>
                                        </Menu> Payments
                                    </Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                </Tr>
                                <Tr>
                                    <Th>Date</Th>
                                    <Th>Payment#</Th>
                                    <Th>Name</Th>
                                    <Th>Status</Th>
                                    <Th>Mode</Th>
                                    <Th>Amount</Th>
                                    <Th>Balance</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {paymentData.map((payment) => (<Tr key={payment.ID}>
                                    <Td>{payment.Date}</Td>
                                    <Td>{payment.Number}</Td>
                                    <Td>payment.customer.customerName</Td>
                                    <Td>{payment.Status}</Td>
                                    <Td>{payment.Fop}</Td>
                                    <Td>{payment.Amount}</Td>
                                    <Td>{payment.Balance}</Td>
                                    <Td>
                                        <Stack direction='row' spacing={6}>
                                            <Button colorScheme='blue' size='sm'>
                                                <FaPenFancy/>
                                            </Button>
                                        </Stack>
                                    </Td>
                                </Tr>))}
                            </Tbody>
                        </Table>
                    </TableContainer>) : (<Center><Spinner size='xl' /></Center>)}
                </Box>
                <PaymentModal isOpen={isPaymentModalopened} onClose={() => setIsPaymentModalopened(!isPaymentModalopened)}/>
                <DeletionModal itemName='payment' isOpen={isDeletionModalOpened}
                               onClose={() => setIsDeletionModalOpened(!isDeletionModalOpened)}/>
                <PaymentDetailsDrawer isOpen={isDetailsOpened}
                                      payment={singlePayment}
                                      onClose={() => setIsDetailsOpened(!isDetailsOpened)}/>
            </Center>
        </>
    )
}