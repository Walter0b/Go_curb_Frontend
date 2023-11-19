import {
    Box, Button,
    Center,
    Heading, HStack, IconButton, Stack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr, useDisclosure
} from "@chakra-ui/react";

import {useState} from "react";
import InvoiceModal from "./Modals/InvoiceModal";
import InvoiceDetailsDrawer from "./Modals/InvoiceDetailsDrawer";
import CreditsModal from "./Modals/CreditsModal";
import {FaPenFancy, FaRegCircleXmark} from "react-icons/fa6";
import DeletionModal from "./Modals/DeletionModal";

export default function Invoices() {

    const [openModal, setOpenModal] = useState(false);
    const [invoiceData, setInvoiceData] = useState({});
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);
    const [isCreditOpened, setIsCreditOpened] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isDeletionModalOpened, setIsDeletionModalOpened] = useState(false);

    const openDetailDrawer = (isOpen, isInEditMode) => {
        setIsDetailsOpened(isOpen)
        setIsEditMode(isInEditMode)
    }

    return (
        <>
            <Center>
                <Box border='1px' mt='50px' borderRadius='8' borderColor='gray.200' w='90%'>
                    <TableContainer>
                        <Table variant='striped' colorScheme='green'>
                            <Thead>
                                <Tr>
                                    <Th>
                                        <Button onClick={() => setOpenModal(true)} colorScheme='blue'>New</Button>
                                    </Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                </Tr>
                                <Tr>
                                    <Th>Date</Th>
                                    <Th>Invoice#</Th>
                                    <Th>Customer</Th>
                                    <Th>Status</Th>
                                    <Th>Due Date</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td></Td>
                                    <Td onClick={() => openDetailDrawer(true, false)}></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td>
                                        <Stack direction='row' spacing={6}>
                                            <Button colorScheme='blue' size='sm' onClick={() => openDetailDrawer(true, true)}>
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
                <InvoiceModal data={invoiceData} isOpen={openModal} onClose={() => setOpenModal(false)}/>
                <InvoiceDetailsDrawer isOpen={isDetailsOpened}
                                      editMode={isEditMode}
                                      onClose={() => setIsDetailsOpened(!isDetailsOpened)}
                                      onOpenCreditModal={() => setIsCreditOpened(!isCreditOpened)}/>
                <CreditsModal isOpen={isCreditOpened} onClose={() => setIsCreditOpened(!isCreditOpened)}/>
                <DeletionModal itemName='invoice' isOpen={isDeletionModalOpened}
                               onClose={() => setIsDeletionModalOpened(!isDeletionModalOpened)}
                />
            </Center>
        </>
    )
}