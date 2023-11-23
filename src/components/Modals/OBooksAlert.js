import {Alert, Box, ScaleFade, useDisclosure} from "@chakra-ui/react";
import {useEffect, useState} from "react";

export default function OBooksAlert(props) {

    const [isOpen, setIsOpen] = useState(props.displayAlert);

    useEffect(() => {
        setTimeout(() => setIsOpen(false), 5000)
    }, [props.displayAlert]);

    return (
        <>
            <Box position='absolute'>
                <ScaleFade initialScale={0.9} in={isOpen}>
                    <Alert status={props.status} borderRadius={8}>
                        {props.icon}
                        {props.message}
                    </Alert>
                </ScaleFade>
            </Box>
        </>
    )
}