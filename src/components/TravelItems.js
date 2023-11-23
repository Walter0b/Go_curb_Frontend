import {Button, Checkbox, FormControl, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useEffect, useRef, useState} from "react";
import {FaRegCircleXmark} from "react-icons/fa6";

export default function TravelItems(props) {

    const [travelItems, setTravelItems] = useState([]);

    const travelItemRef = useRef([]);

    useEffect(() => {
        setTravelItems(props.travelItems)
    }, [props.travelItems]);

    const updateSelectedTravelItemsList = (id) => {
        props.onUpdateSelectedTravelItems(id)
    }

    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>
                                <Button leftIcon={<AddIcon/>}
                                        variant='ghost'
                                        size='sm'
                                        colorScheme='green'
                                        onClick={() => props.onSetDrawerState()}>Add travel item</Button>
                            </Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                        <Tr>
                            <Th>Items#</Th>
                            <Th>Traveler</Th>
                            <Th>Trip</Th>
                            <Th>Fare</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {travelItems.map((travelItem) => (
                            <Tr key={travelItem.ID}>
                                <Td>{travelItem.TicketNumber}</Td>
                                <Td>{travelItem.TravelerName}</Td>
                                <Td>{travelItem.Itinerary}</Td>
                                <Td>{travelItem.TotalPrice}</Td>
                                <Td>
                                    <Button colorScheme='red' size='sm' onClick={() => updateSelectedTravelItemsList(travelItem.ID)}>
                                        <FaRegCircleXmark/>
                                    </Button>
                                </Td>
                            </Tr>))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}