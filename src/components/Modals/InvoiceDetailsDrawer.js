import {
    Box,
    Button, Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement, Menu,
    MenuButton, MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import RelatedInvoices from "../RelatedInvoices";
import {useEffect, useRef, useState} from "react";
import {ChevronDownIcon, HamburgerIcon} from "@chakra-ui/icons";
import {customers, travelItems} from "../../mock/data";
import TravelItems from "../TravelItems";
import TravelItemsDrawer from "./TravelItemsDrawer";

export default function InvoiceDetailsDrawer(props) {

    const [size, setSize] = useState('lg')
    const [invoiceDetails, setInvoiceDetails] = useState({});

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => props.onClose()
    })


    const currentDate = new Date();
    const initialDueDate = currentDate.setDate(currentDate.getDate() + 1)

    const [customersData, setCustomersData] = useState(customers);
    const [selectedAccount, setSelectedAccount] = useState({});

    const [date, setDate] = useState(new Date(initialDueDate).toLocaleDateString('en-GB').split('/').reverse().join('-'));
    const [cusName, setCusName] = useState('');

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const onAccountSelection = (value) => {
        setSelectedAccount(customersData.find(cust => cust.id === +value));
        setCusName(customersData.find(cust => cust.id === +value).customerName)
    }

    return (
        <>
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        {props.editMode ? 'Edit Invoice' : 'Invoice Details'}
                        {!props.editMode && <Box mt={5}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    aria-label='More'
                                    rightIcon={<ChevronDownIcon/>}>
                                    More
                                </MenuButton>
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>Send Reminder</MenuItem>
                                        <MenuItem onClick={() => props.onOpenCreditModal()}>Use Credits</MenuItem>
                                        <MenuItem>Attach File</MenuItem>
                                    </MenuGroup>
                                    <MenuDivider/>
                                    <MenuGroup>
                                        <MenuItem>Email Customer</MenuItem>
                                    </MenuGroup>
                                    <MenuDivider/>
                                    <MenuGroup>
                                        <MenuItem>Export TMC File</MenuItem>
                                    </MenuGroup>
                                    <MenuDivider/>
                                    <MenuGroup>
                                        <MenuItem>Write Off</MenuItem>
                                        <MenuItem>Void</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                    </MenuGroup>
                                    <MenuGroup>
                                        <MenuItem>Transaction Logs</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </Menu>
                        </Box>}
                    </DrawerHeader>
                    <DrawerBody>
                        {props.editMode ? (<form>
                            <FormControl isRequired>
                                <FormLabel>Customer Account</FormLabel>
                                <Select placeholder='Select an account'
                                        value={props.invoice.customerName?.accountNumber}
                                        onChange={(e) => onAccountSelection(e.target.value)}>
                                    {customersData.map((customer) => (
                                        <option key={customer.id}
                                                value={customer.id}>{customer.accountNumber}</option>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Due Date</FormLabel>
                                <Input type='date' placeholder='Due Date' value={date}
                                       onChange={(e) => setDate(e.target.value)}/>
                            </FormControl>
                            {/*<Center>*/}
                            {/*    <Box mt={8} w='80%' border='1px' borderColor='gray.200' borderRadius={8}>*/}
                            {/*        <TravelItems*/}
                            {/*            travelItems={selectedTravelItems}*/}
                            {/*            updateSelectedTravelItems={(id) => removeTravelItemFromList(id)}*/}
                            {/*            onSetDrawerState={() => setIsTravelItemDrawerOpen(!isTravelItemDrawerOpen)}/>*/}
                            {/*    </Box>*/}
                            {/*    <TravelItemsDrawer isDrawerOpen={isTravelItemDrawerOpen}*/}
                            {/*                       travelItems={selectedTravelItems}*/}
                            {/*                       onAddTravelItems={handleAddTravelItems}*/}
                            {/*                       onSetDrawerState={() => setIsTravelItemDrawerOpen(!isTravelItemDrawerOpen)}/>*/}
                            {/*</Center>*/}
                        </form>) :
                            (<Center>
                                <Box></Box>
                            </Center>)}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}