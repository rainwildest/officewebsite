import React from 'react'

import {
  Box,
  Image
} from '@chakra-ui/core'

const homeImage = () => {
  const $desktopSize = 16

  return (
    <Box as='section'>
      {/* className="home-desktop" */}
      <Box
        as='div'
        width='100%'
        bgSize='cover'
        bgImage='url(/images/banner.png)'
        bgRepeat='no-repeat'
        height={((320 / $desktopSize) + 'rem')}
        className='home-desktop'
      />
    </Box>
  )
}

export default homeImage
