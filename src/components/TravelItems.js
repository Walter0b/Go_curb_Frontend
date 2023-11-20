import {Button, Checkbox, FormControl, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {FaRegCircleXmark} from "react-icons/fa6";

export default function TravelItems(props) {

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
                        {props.travelItems.map((travelItem) => (
                            <Tr key={travelItem.id}>
                                <Td>{travelItem.ticketNumber}</Td>
                                <Td>{travelItem.travelerName}</Td>
                                <Td>{travelItem.itinerary}</Td>
                                <Td>{travelItem.totalPrice}</Td>
                                <Td>
                                    <Button colorScheme='red' size='sm' onClick={() => props.updateSelectedTravelItems(travelItem.id)}>
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