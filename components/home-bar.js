import React from 'react'
import {
    Button,
    Icon,
    Box,

    Image,
    Badge,
    Link,
    Text
} from '@chakra-ui/core'

const homeBar = () => (
    <Box as="section"
        width="100%"
        pos="fixed"
        top="0px"
        left="0px"
        bg="#222"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        transition="300ms"
        transform="translate3d(0, -100%, 0)"

        className="home-bar"
    >
        <Box as="div"
            color="white"
            fontWeight="bold"

            className="title">地域電腦有限公司</Box>
        <Box as="div" className="bar-toggle" variantColor="green">
            {/* <Icon name="minus" size="24px" /> */}
        </Box>
    </Box>
);

export default homeBar;