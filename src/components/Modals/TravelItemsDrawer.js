import {useEffect, useRef, useState} from "react";
import {
    AlertIcon,
    Box,
    Button, Center, Checkbox,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay, FormControl, Spinner, Stack, Table,
    TableContainer, Tbody, Td, Th, Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";

import {getTravelItems} from "../../services/api";
import OBooksAlert from "./OBooksAlert";

export default function TravelItemsDrawer(props) {

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isDrawerOpen,
        onOpen: void 0,
        onClose: () => props.onSetDrawerState()
    })

    const [travelItemData, setTravelItemData] = useState([]);

    const isLoading = useRef(true);
    const travelItemsRef = useRef([]);
    const selectedTravelItemRef = useRef([]);

    useEffect(() => {
        getTravelItems().then((response) => {
            travelItemsRef.current = [];
            response.data.forEach((item) => {
                if (!item.IDInvoice) travelItemsRef.current.push({...item, checked: false})
            })
            setTravelItemData(travelItemsRef.current)
            isLoading.current = false
        })
    }, []);

    const onSelectTravelItem = (isChecked, id) => {
        travelItemsRef.current = travelItemData.map((item) => item.ID === id ? {...item, checked: isChecked} : {...item})
        selectedTravelItemRef.current = travelItemsRef.current.filter((item) => item.checked === true)
        setTravelItemData(travelItemsRef.current)
    }

    const addTravelitems = () => {
        props.onAddTravelItems(selectedTravelItemRef.current)
        onClose()
    }

    return (
        <>
            <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Select Sales Items to Invoice for xxxxx</DrawerHeader>
                    <DrawerBody>
                        <Box border='1px' borderColor='gray.200' borderRadius={8}>
                            {(!isLoading.current && travelItemsRef.current.length) ? (<TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>
                                                <Stack direction='horizontal'>
                                                    <Button
                                                        size='xs'
                                                        colorScheme='green'
                                                        isDisabled={!selectedTravelItemRef.current.length}
                                                        onClick={addTravelitems}>Add</Button>
                                                    <Button size='xs' onClick={() => onClose()}>Cancel</Button>
                                                </Stack>
                                            </Th>
                                            <Th></Th>
                                            <Th></Th>
                                            <Th></Th>
                                            <Th></Th>
                                        </Tr>
                                        <Tr>
                                            <Th></Th>
                                            <Th>Items#</Th>
                                            <Th>Traveler</Th>
                                            <Th>Trip</Th>
                                            <Th>Fare</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {travelItemsRef.current.map((travelItem) => (
                                            <Tr key={travelItem.ID}>
                                                <Td>
                                                    <FormControl>
                                                        <Checkbox size='md'
                                                                  colorScheme='green'
                                                                  isChecked={travelItem.checked}
                                                                  onChange={(e) => onSelectTravelItem(e.target.checked, travelItem.ID)}></Checkbox>
                                                    </FormControl>
                                                </Td>
                                                <Td>{travelItem.TicketNumber}</Td>
                                                <Td>{travelItem.TravelerName}</Td>
                                                <Td>{travelItem.Itinerary}</Td>
                                                <Td>{travelItem.TotalPrice}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>) : (<OBooksAlert icon={<AlertIcon/>} status='error' message='No travel items found' displayAlert={true}/>)}
                            {isLoading.current && <Center><Spinner size='xl'/></Center>}
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}