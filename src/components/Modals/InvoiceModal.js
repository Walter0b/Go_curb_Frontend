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

import {customers, invoices, travelItems} from "../../mock/data";

export default function InvoiceModal(props) {

    const currentDate = new Date();
    const initialDueDate = currentDate.setDate(currentDate.getDate() + 1)
    const defaultAccount = {Id: 0,customerName:'Pierre Lorel',state:'Centre',accountNumber:'004959-BE45', idCountry:237, alias: 'PL', tmcClientNumber:'550052', abKey:'ukey', slug:23535, isActive: true}

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => props.onClose()
    })

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const [isTravelItemDrawerOpen, setIsTravelItemDrawerOpen] = useState(false);
    const [customersData, setCustomersData] = useState(customers);
    const [selectedAccount, setSelectedAccount] = useState({});
    const [travelItemsData, setTravelItemsData] = useState(travelItems);
    const [selectedTravelItems, setSelectedTravelItems] = useState([]);

    const [date, setDate] = useState(new Date(initialDueDate).toLocaleDateString('en-GB').split('/').reverse().join('-'));
    const [cusName, setCusName] = useState('');

    const onAccountSelection = (value) => {
        setSelectedAccount(customersData.find(cust => cust.id === +value));
        setCusName(customersData.find(cust => cust.id === +value).customerName)
    }
    const handleAddTravelItems = (items) => {
        setSelectedTravelItems(travelItemsData.filter((item) => items.includes(item.id)))
    }

    const removeTravelItemFromList = (id) => {
        setSelectedTravelItems(selectedTravelItems.filter((item) => item.id !== id))
    }

    const saveInvoice = (invoice, travelItems) => {
        invoices.push({...invoice, creationDate: new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'), travelItems: travelItems, customer: defaultAccount})
    }

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
                            {`${selectedTravelItems.reduce((sum, item) => sum + parseInt(item.totalPrice), 0)} XAF`}
                        </Text>
                        <Text fontSize='15px' color='black.300' mb={5}>
                            Balance due
                        </Text>
                        <Flex alignItems='horizontal' p={4} gap='5' minWidth='max-content' border='1px' borderColor='gray.200' borderRadius={5}>
                            <Box w='100%'>
                                <FormControl isRequired>
                                    <FormLabel>Customer Account</FormLabel>
                                    <Select placeholder='Select an account' onChange={(e) => onAccountSelection(e.target.value)}>
                                        {customersData.map((customer) => (
                                            <option key={customer.id}
                                                    value={customer.id}>{customer.accountNumber}</option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Due Date</FormLabel>
                                    <Input type='date' placeholder='Due Date' value={date} onChange={(e) => setDate(e.target.value)}/>
                                </FormControl>
                            </Box>
                            <Box w='100%'>
                                <FormControl>
                                    <FormLabel>Account Name</FormLabel>
                                    <Input placeholder='Account name' value={cusName} onChange={(e) => setCusName(e.target.value)}/>
                                </FormControl>
                            </Box>
                        </Flex>
                        <Center>
                            <Box mt={8} w='80%' border='1px' borderColor='gray.200' borderRadius={8}>
                                <TravelItems
                                    travelItems={selectedTravelItems}
                                    updateSelectedTravelItems={(id) => removeTravelItemFromList(id)}
                                    onSetDrawerState={() => setIsTravelItemDrawerOpen(!isTravelItemDrawerOpen)}/>
                            </Box>
                            <TravelItemsDrawer isDrawerOpen={isTravelItemDrawerOpen}
                                               travelItems={selectedTravelItems}
                                               onAddTravelItems={handleAddTravelItems}
                                               onSetDrawerState={() => setIsTravelItemDrawerOpen(!isTravelItemDrawerOpen)}/>
                        </Center>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue'
                                mr={3}
                                onClick={() => saveInvoice({id: Math.floor(Math.random() * 100),
                                        invoice_number: `INV-${Math.floor(Math.random() * 100)}`,
                                    status: 'active',
                                        amount: selectedTravelItems.reduce((sum, item) => sum + parseInt(item.totalPrice), 0), dueDate: date},
                                    selectedTravelItems)} isDisabled={!selectedTravelItems.length}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}