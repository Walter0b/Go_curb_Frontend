import {Button, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useState} from "react";

export default function TravelItems(props) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
                            <Th></Th>
                            <Th>Items#</Th>
                            <Th>Traveler</Th>
                            <Th>Trip</Th>
                            <Th>Fare</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}