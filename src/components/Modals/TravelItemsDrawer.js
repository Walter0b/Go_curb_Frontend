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
import {AddIcon} from "@chakra-ui/icons";

export default function TravelItemsDrawer(props) {

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isDrawerOpen,
        onOpen: () => console.log('Opened'),
        onClose: () => props.onSetDrawerState()
    })
    const [placement, setPlacement] = useState('top')

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
                                                        colorScheme='green'>Add</Button>
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
                                        <Tr>
                                            <Td>
                                                <FormControl>
                                                    <Checkbox size='md' colorScheme='green'></Checkbox>
                                                </FormControl>
                                            </Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                        </Tr>
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