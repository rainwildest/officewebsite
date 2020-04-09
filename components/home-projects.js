import React from 'react'
import {
  Image,
  Box
} from '@chakra-ui/core'

import projectItem from '../lib/data'

const projects = () => {
  const $desktopSize = 16

  return (
    <Box
      as='section'
      id='project-content'
      className='project-content'
    >
      <Box as='div' className='project-header' color='#888'>
        <Box
          color='#777'
          fontWeight='bold'
          fontSize={(24 / $desktopSize) + 'rem'}
          as='h3'
        >開發項目
        </Box>
        <Box
          as='p'
          mt={(15 / $desktopSize) + 'rem'}
          fontSize={(17 / $desktopSize) + 'rem'}
          mb={(20 / $desktopSize) + 'rem'}
        >我們的開發項目涵蓋多個範疇，能滿足不同客戶的需求，以下為我們的產品︰
        </Box>
      </Box>

      <Box
        as='div'
        className='project-items'
      >
        {
          projectItem().map((item, index) => {
            return (
              <Box
                as='article'
                key={index}
                d='flex'
                alignItems='center'
                className='project-item'
              >

                <Box
                  as='div' className='project-item-image' width=' 50%'
                  pr={(10 / $desktopSize) + 'rem'}
                >
                  <Image src={item.image} alt={item.title} />
                </Box>
                <Box
                  width='50%'
                  color='#777'
                  className='project-item-content'
                >
                  <Box
                    as='h4'
                    fontWeight='bold'
                    mb={(15 / $desktopSize) + 'rem'}
                    fontSize={(28 / $desktopSize) + 'rem'}
                  >{item.title}
                  </Box>
                  <Box fontSize={(18 / $desktopSize) + 'rem'}>
                    {item.details}
                  </Box>
                </Box>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default projects
