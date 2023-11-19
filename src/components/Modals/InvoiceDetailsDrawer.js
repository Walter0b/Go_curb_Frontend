import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement, Menu,
    MenuButton, MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import RelatedInvoices from "../RelatedInvoices";
import {useRef, useState} from "react";
import {ChevronDownIcon, HamburgerIcon} from "@chakra-ui/icons";

export default function InvoiceDetailsDrawer(props) {

    const [size, setSize] = useState('lg')

    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen: props.isOpen,
        onOpen: () =>  void 0,
        onClose: () => props.onClose()
    })

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <>
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        {props.editMode ? 'Edit Invoice' : 'Invoice Details'}
                        {!props.editMode && <Box mt={5}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    aria-label='More'
                                    rightIcon={<ChevronDownIcon/>}>
                                    More
                                </MenuButton>
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>Send Reminder</MenuItem>
                                        <MenuItem onClick={() => props.onOpenCreditModal()}>Use Credits</MenuItem>
                                        <MenuItem>Attach File</MenuItem>
                                    </MenuGroup>
                                    <MenuDivider/>
                                    <MenuGroup>
                                        <MenuItem>Email Customer</MenuItem>
                                    </MenuGroup>
                                    <MenuDivider/>
                                    <MenuGroup>
                                        <MenuItem>Export TMC File</MenuItem>
                                    </MenuGroup>
                                    <MenuDivider/>
                                    <MenuGroup>
                                        <MenuItem>Write Off</MenuItem>
                                        <MenuItem>Void</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                    </MenuGroup>
                                    <MenuGroup>
                                        <MenuItem>Transaction Logs</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </Menu>
                        </Box>}
                    </DrawerHeader>
                    <DrawerBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Consequat nisl vel pretium lectus quam id. Semper quis lectus
                            nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                            quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                            magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                            Lectus vestibulum mattis ullamcorper velit.
                        </p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}