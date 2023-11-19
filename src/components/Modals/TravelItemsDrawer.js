import { useState } from "react";
import {
    Box,
    Button, Checkbox,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay, FormControl, Table,
    TableContainer, Tbody, Td, Tfoot, Th, Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";

import { travelItems } from "../../mock/data";

export default function TravelItemsDrawer(props) {

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isDrawerOpen,
        onOpen: () => console.log('Opened'),
        onClose: () => props.onSetDrawerState()
    })
    const [placement, setPlacement] = useState('top')
    const [travelItemsData, setTravelItemsData] = useState(travelItems.map((item) => ({...item, checked: false})));
    const [selectedTravelItems, setSelectedTravelItems] = useState([]);

    const onSelectTravelItem = (isChecked, id) => {
        setTravelItemsData(travelItemsData.map((item) => item.id === id ? {...item, checked: isChecked} : {...item}))
        isChecked ? setSelectedTravelItems([...selectedTravelItems, id]) : setSelectedTravelItems(selectedTravelItems.filter((item) => item !== id))
    }

    const addTravelitems = () => {
        props.onAddTravelItems(selectedTravelItems)
        onClose()
    }

    return (
        <>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Select Sales Items to Invoice for xxxxx</DrawerHeader>
                    <DrawerBody>
                        <Box border='1px' borderColor='gray.200' borderRadius={8}>
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>
                                                <Button
                                                        size='xs'
                                                        colorScheme='green'
                                                        isDisabled={!selectedTravelItems.length}
                                                        onClick={() => addTravelitems()}>Add</Button>
                                            </Th>
                                            <Th></Th>
                                            <Th></Th>
                                            <Th></Th>
                                            <Th></Th>
                                        </Tr>
                                        <Tr>
                                            <Th>
                                                <FormControl>
                                                    <Checkbox size='md' colorScheme='green'></Checkbox>
                                                </FormControl>
                                            </Th>
                                            <Th>Items#</Th>
                                            <Th>Traveler</Th>
                                            <Th>Trip</Th>
                                            <Th>Fare</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {travelItemsData.map((travelItem) => (
                                            <Tr key={travelItem.id}>
                                                <Td>
                                                    <FormControl>
                                                        <Checkbox size='md'
                                                                  colorScheme='green'
                                                                  isChecked={travelItem.checked}
                                                                  onChange={(e) => onSelectTravelItem(e.target.checked, travelItem.id)}></Checkbox>
                                                    </FormControl>
                                                </Td>
                                                <Td>{travelItem.ticketNumber}</Td>
                                                <Td>{travelItem.travelerName}</Td>
                                                <Td>{travelItem.itinerary}</Td>
                                                <Td>{travelItem.totalPrice}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}