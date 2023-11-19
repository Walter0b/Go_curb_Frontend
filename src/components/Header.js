import orangeIcon from '../assets/icons/orange1.svg'

import {Button, Stack, Wrap, Image, Box, Flex, ButtonGroup, Heading, Spacer, Center} from "@chakra-ui/react";
import {AddIcon, SmallAddIcon} from "@chakra-ui/icons";
import {FaMoneyBillTransfer, FaCircleUser} from "react-icons/fa6";
import {Link, Route} from "react-router-dom";
import Invoices from "./Invoices";
import Customers from "./Customers";
import Payments from "./Payments";

export default function Header() {
    return (
        <>
            <Center>
                <Box w='90%' h='60px' m='4' p='2' border='1px' borderColor='gray.200' rounded='md' bg='white' boxShadow='xl' bg='white'>
                    <Flex minWidth='max-content' alignItems='center' gap='2'>
                        <Box p='2'>
                            <Heading size='md'>
                                OrangeBooks!
                            </Heading>
                        </Box>
                        <Spacer />
                        <ButtonGroup gap='2'>
                            <Link to='/Customers'>
                                <Button colorScheme='teal'>
                                    Customers
                                </Button>
                            </Link>
                            <Link to='/Invoices'>
                                <Button colorScheme='teal'>
                                    Invoices
                                </Button>
                            </Link>
                            <Link to='/Payments'>
                                <Button colorScheme='teal'>
                                    Payments
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </Flex>
                </Box>
            </Center>
        </>
    )
}

