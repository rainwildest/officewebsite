import React from 'react'

import {
  Icon,
  Box
} from '@chakra-ui/core'

const $moreList = ['貨單管理系統',
  '分散式氣象監察系統',
  '智能健身管理系統',
  '勇闖恐龍世界（VR遊戲）',
  'STEM學習平台',
  '智慧相冊',
  '...']

const andMore = () => {
  const $desktopSize = 16
  return (
    <Box as='section' className='and-more'>
      <Box
        as='div'
        bg='#4acaa8'
        p={(80 / $desktopSize) + 'rem'}
        fontSize={(40 / $desktopSize) + 'rem'}
        rounded={(5 / $desktopSize) + 'rem'}
        d='flex'
        justifyContent='center'
        alignItems='center'
        width={(400 / $desktopSize) + 'rem'}
        className='title'
      >

        <div>我們還有</div>
        <Icon name='arrow-forward' />
      </Box>
      <div className='project-and-more'>
        {$moreList.map((item, index) => {
          return (
            <p key={index}>
              <Icon name='triangle-up' />
              {item}
            </p>
          )
        })}
      </div>
    </Box>
  )
}

export default andMore
