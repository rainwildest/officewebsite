import React from "react";
import {
    Box,
    Image,
} from '@chakra-ui/core';

const aboutUs = () => {
    let $desktopSize = 16;
    return (
        <Box as="section"
            id="about-us"
            color="#888"
            className="about-us">

            <header>
                <Box as="h2"
                    color="#4acaa8"
                    mt={(50 / $desktopSize) + "rem"}
                    fontSize={(40 / $desktopSize) + "rem"}
                    fontWeight="bold">關於我們</Box>
                <Box as="p"
                    color="#777"
                    fontSize={(28 / $desktopSize) + "rem"}
                    my={(15 / $desktopSize) + "rem"}
                    fontWeight="bold">電子互動產品、軟件及系統開發</Box>
            </header>

            <p className="about-content"
                fontSize={(17 / $desktopSize) + "rem"}
                mb={(25 / $desktopSize) + "rem"}>
                我們是一間資訊科技公司，致力研發新穎的電子互動裝置與物聯網相關設備，專注開發各項軟件、系統和產品，曾與不同的學校、公司及政府部門合作，因此具有豐富的經驗，歡迎有意合作者與我們洽談。
            </p>
        </Box >
    )
}

export default aboutUs;