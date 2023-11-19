import {
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {useRef, useState} from "react";

export default function PaymentDetailsDrawer(props) {

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
                        Payment Details
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