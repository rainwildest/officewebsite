import React from 'react'
import Head from 'next/head'
import { withTheme } from 'emotion-theming'
import {
  Text,
  Box,
  Image,
  Stack,
  Button,
  Icon,
  useColorMode,
  Flex,
  IconButton,
  Heading,
  Link
} from '@chakra-ui/core'

import '../scss/index.scss'
import HomeBar from '../components/home-bar.js'
import HomeImage from '../components/home-image'
import HomeAboutUs from '../components/home-about-us'
import HomeProjects from '../components/home-projects'
import HomeAndMore from '../components/home-and-more'
import HomePartner from '../components/home-partners'

// const fontSize = () => {
//   var docEl = document.documentElement
//   var dpr = window.devicePixelRatio || 1

//   // adjust body font size
//   function setBodyFontSize () {
//     if (document.body) {
//       document.body.style.fontSize = (7 * dpr) + 'px'
//     } else {
//       document.addEventListener('DOMContentLoaded', setBodyFontSize)
//     }
//   }
//   setBodyFontSize()

//   // set 1rem = viewWidth / 10
//   function setRemUnit () {
//     var rem = docEl.clientWidth / 10
//     docEl.style.fontSize = rem + 'px'
//   }

//   setRemUnit()

//   // reset rem unit on page resize
//   window.addEventListener('resize', setRemUnit)
//   window.addEventListener('pageshow', function (e) {
//     if (e.persisted) {
//       setRemUnit()
//     }
//   })
// }
const Container = props => {
  return (<Box width='full' mx='auto' px={6} {...props} />)
}

const Header = props => {
  // const { colorMode, toggleColorMode } = useColorMode()
  // const bg = { light: 'white', dark: 'gray.800' }
  return (
    <Box
      pos='fixed'
      as='header'
      top='0'
      zIndex='4'
      // bg={bg[colorMode]}
      left='0'
      right='0'
      borderBottomWidth='1px'
      width='full'
      height='4rem'
      bg='white'

      {...props}
    >
      <Container h='100%'>
        <Flex
          size='100%'
          // px={}
          align='center'
          justify='space-between'
        >
          <Box
            as='a'
            d='block'
            href='/'
            fontWeight='bold'
            fontSize='20px'
            aria-label='Chakra UI, Back to homepage'
          >
            地域電腦有限公司
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

const Home = () => (
  <div>
    <Head>
      <title>地域電腦有限公司</title>
    </Head>

    <Box mb={20}>
      <Header />
      <Box as='section' pt={40} pb={24}>
        <Container>
          <Box mx='auto' textAlign='center'>

            <Box as='h1' fontSize={(40 / 16) + 'rem'} fontWeight='semibold'>
              關於我們
            </Box>

            <Text opacity='0.7' mt='6'>
              電子互動產品、軟件及系統開發
            </Text>

            <Text opacity='0.7' mt='6'>
              我們是一間資訊科技公司，致力研發新穎的電子互動裝置與物聯網相關設備，專注開發各項軟件、系統和產品，曾與不同的學校、公司及政府部門合作，因此具有豐富的經驗，歡迎有意合作者與我們洽談。
            </Text>
          </Box>
        </Container>
      </Box>

      <Box>
        {/* <Box p={6} background={{ base: 'red', sm: 'blue', md: 'black' }} /> */}

        <HomeProjects />
      </Box>
    </Box>

    {/* <HomeImage />
    <HomeAboutUs />
    <HomeProjects />
    <HomeAndMore />
    <HomePartner /> */}
  </div>
)

export default withTheme(Home)
