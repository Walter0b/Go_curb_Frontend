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

import {useRef, useState, useEffect} from "react";
import TravelItems from "../TravelItems";
import TravelItemsDrawer from "./TravelItemsDrawer";

import {customers} from "../../mock/data";
import {getCustomers} from "../../services/api";

export default function InvoiceModal(props) {

    const currentDate = new Date();
    const initialDueDate = currentDate.setDate(currentDate.getDate() + 1)

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => {
            setSelectedTravelItems([])
            props.onClose()
        }
    })

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const [isTravelItemDrawerOpen, setIsTravelItemDrawerOpen] = useState(false);
    const [customersData, setCustomersData] = useState(customers);
    const [selectedAccount, setSelectedAccount] = useState({});
    const [selectedTravelItems, setSelectedTravelItems] = useState([]);

    const [date, setDate] = useState(new Date(initialDueDate).toLocaleDateString('en-GB').split('/').reverse().join('-'));
    const [cusName, setCusName] = useState('');

    useEffect(() => {
        getCustomers().then((response) => {
            setCustomersData(response.data)
        })
    }, []);


    const onAccountSelection = (value) => {
        setSelectedAccount(customersData.find(cust => cust.ID === +value));
        setCusName(customersData.find(cust => cust.ID === +value).Customer_name)
    }
    const handleAddTravelItems = (items) => {
        setSelectedTravelItems(items)
    }

    const removeTravelItemFromList = (id) => {
        console.log(id)
    }

    const saveInvoice = (invoice, travelItems) => {

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
                            {`${selectedTravelItems.reduce((sum, item) => sum + Number(item.TotalPrice.replace(/[^0-9.-]+/g,"")), 0)} XAF`}
                        </Text>
                        <Text fontSize='15px' color='black.300' mb={5}>
                            Balance due
                        </Text>
                        <Flex alignItems='horizontal' p={4} gap='5' minWidth='max-content' border='1px' borderColor='gray.200' borderRadius={5}>
                            <Box w='70%'>
                                <FormControl isRequired>
                                    <FormLabel>Customer Account</FormLabel>
                                    <Select placeholder='Select an account' onChange={(e) => onAccountSelection(e.target.value)}>
                                        {customersData.map((customer) => (
                                            <option key={customer.ID}
                                                    value={customer.ID}>{customer.Customer_name}</option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Due Date</FormLabel>
                                    <Input type='date' placeholder='Due Date' value={date} onChange={(e) => setDate(e.target.value)}/>
                                </FormControl>
                            </Box>
                        </Flex>
                        <Center>
                            <Box mt={8} w='80%' border='1px' borderColor='gray.200' borderRadius={8}>
                                <TravelItems
                                    travelItems={selectedTravelItems}
                                    onUpdateSelectedTravelItems={removeTravelItemFromList}
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