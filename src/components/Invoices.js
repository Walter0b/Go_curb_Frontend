import {
    Box, Button,
    Center,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";

import {useState, useRef, useEffect} from "react";
import InvoiceModal from "./Modals/InvoiceModal";
import InvoiceDetailsDrawer from "./Modals/InvoiceDetailsDrawer";
import CreditsModal from "./Modals/CreditsModal";
import {FaPenFancy, FaRegCircleXmark} from "react-icons/fa6";
import DeletionModal from "./Modals/DeletionModal";

import { invoices } from "../mock/data";

import {getInvoices} from "../services/api";

export default function Invoices() {

    const [openModal, setOpenModal] = useState(false);
    const [singleInvoice, setSingleInvoice] = useState({});
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);
    const [isCreditOpened, setIsCreditOpened] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isDeletionModalOpened, setIsDeletionModalOpened] = useState(false);
    const [invoicesData, setInvoicesData] = useState([]);

    useEffect( () => {
        getInvoices().then((response) => {
            setInvoicesData(response.data.map((inv) => {
                return {
                    ...inv,
                    CreationDate: new Date(inv.CreationDate).toLocaleDateString().split('-').reverse().join('-'),
                    DueDate: new Date(inv.DueDate).toLocaleDateString().split('-').reverse().join('-'),
                }
            }))
        })
    }, []);


    const openDetailDrawer = (invoice, isOpen, isInEditMode) => {
        setIsEditMode(isInEditMode)
        setSingleInvoice({...invoice})
        setIsDetailsOpened(isOpen)
    }

    const deleteInvoice = (invoice) => {
        setSingleInvoice(invoice)
        setIsDeletionModalOpened(!isDeletionModalOpened)
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
                                {invoicesData.map((invoice) =>
                                    (<Tr key={invoice.ID}>
                                        <Td>{invoice.CreationDate}</Td>
                                        <Td onClick={() => openDetailDrawer(invoice,true, false)}>
                                            {invoice.InvoiceNumber}
                                        </Td>
                                        <Td>invoice.customer.customerName</Td>
                                        <Td>{invoice.Status}</Td>
                                        <Td>{invoice.DueDate}</Td>
                                        <Td>
                                            <Stack direction='row' spacing={6}>
                                                <Button colorScheme='blue' size='sm' onClick={() => openDetailDrawer(invoice,true, true)}>
                                                    <FaPenFancy/>
                                                </Button>
                                                <Button colorScheme='red' size='sm' onClick={() => deleteInvoice(invoice)}
                                                        onClose={() => setIsDeletionModalOpened(!isDeletionModalOpened)}>
                                                    <FaRegCircleXmark/>
                                                </Button>
                                            </Stack>
                                        </Td>
                                    </Tr>)
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                <InvoiceModal isOpen={openModal} onClose={() => setOpenModal(!openModal)}/>
                <InvoiceDetailsDrawer isOpen={isDetailsOpened}
                                      editMode={isEditMode}
                                      invoice={singleInvoice}
                                      onClose={() => setIsDetailsOpened(!isDetailsOpened)}
                                      onOpenCreditModal={() => setIsCreditOpened(!isCreditOpened)}/>
                <CreditsModal isOpen={isCreditOpened} onClose={() => setIsCreditOpened(!isCreditOpened)}/>
                <DeletionModal itemName='invoice' itemId={singleInvoice.id}
                               isOpen={isDeletionModalOpened}
                               onClose={() => setIsDeletionModalOpened(!isDeletionModalOpened)}
                />
            </Center>
        </>
    )
}