import {
    Box,
    Button,
    Center,
    FormControl, FormLabel, Input, InputGroup, InputLeftElement,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import InvoiceModal from "./Modals/InvoiceModal";

export default function RelatedInvoices() {
    return (
        <>
            <Center>
                <Box border='1px' mt='50px' borderRadius='8' borderColor='gray.200' w='90%'>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Date</Th>
                                    <Th>Invoice#</Th>
                                    <Th>Order#</Th>
                                    <Th>Amount</Th>
                                    <Th>Balance</Th>
                                    <Th>Applied Payment</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td>
                                        <FormControl>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents='none'
                                                    color='gray.300'
                                                    fontSize='1em'
                                                    children='XAF'
                                                />
                                                <Input placeholder=''/>
                                            </InputGroup>
                                        </FormControl>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Center>
        </>
    )
}