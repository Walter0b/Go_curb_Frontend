import {
    Box,
    Button,
    Center,
    Heading, IconButton, Menu,
    MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Stack,
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
import {useState} from "react";
import {FaPenFancy, FaRegCircleXmark} from "react-icons/fa6";
import DeletionModal from "./Modals/DeletionModal";
import PaymentDetailsDrawer from "./Modals/PaymentDetailsDrawer";

export default function Payments() {

    const [isPaymentModalopened, setIsPaymentModalopened] = useState(false);
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);
    const [isDeletionModalOpened, setIsDeletionModalOpened] = useState(false);

    return (
        <>
            <Center>
                <Box border='1px' mt='50px' borderRadius='8' borderColor='gray.200' w='90%'>
                    <TableContainer>
                        <Table variant='striped' colorScheme='facebook'>
                            <Thead>
                                <Tr>
                                    <Th>
                                        <Menu>
                                            <MenuButton
                                                as={IconButton}
                                                aria-label='Options'
                                                icon={<HamburgerIcon />}
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
                                                    <MenuItem onClick={() => setIsPaymentModalopened(!isPaymentModalopened)}>Customer Payment</MenuItem>
                                                    <MenuItem>transfer from Account</MenuItem>
                                                </MenuGroup>
                                            </MenuList>
                                        </Menu>
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
                                <Tr>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td>
                                        <Stack direction='row' spacing={6}>
                                            <Button colorScheme='blue' size='sm' onClick={() => setIsDetailsOpened(!isDetailsOpened)}>
                                                <FaPenFancy/>
                                            </Button>
                                            <Button colorScheme='red' size='sm' onClick={() => setIsDeletionModalOpened(!isDeletionModalOpened)}
                                                    onClose={() => setIsDeletionModalOpened(!isDeletionModalOpened)}>
                                                <FaRegCircleXmark/>
                                            </Button>
                                        </Stack>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                <PaymentModal isOpen={isPaymentModalopened} onClose={() => setIsPaymentModalopened(!isPaymentModalopened)}/>
                <DeletionModal itemName='payment' isOpen={isDeletionModalOpened}
                               onClose={() => setIsDeletionModalOpened(!isDeletionModalOpened)}/>
                <PaymentDetailsDrawer isOpen={isDetailsOpened}
                                      onClose={() => setIsDetailsOpened(!isDetailsOpened)}/>
            </Center>
        </>
    )
}