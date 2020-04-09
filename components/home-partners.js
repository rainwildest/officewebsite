import React from 'react'

import {
  Text,
  Box,
  Image,
  Stack,
  Button,
  Icon

} from '@chakra-ui/core'

const partners = [{
  title: '地球物理暨氣象局',
  image: '/images/partner01.png'
}, {
  title: '澳門科學館',
  image: '/images/partner02.png'
}, {
  title: '聖若瑟教區中學第一校',
  image: '/images/partner03.png'
}, {
  title: '聖若瑟教區中學第六校',
  image: '/images/partner03.png'
}, {
  title: '化地瑪聖母女子學校',
  image: '/images/partner04.png'
}, {
  title: '明記海產有限公司',
  image: '/images/partner05.png'
}, {
  title: '早雲設計整合制作公司',
  image: '/images/partner06.png'
}]

// 將數據解析成二維數組，每一個數組有兩個子類
const partnersHandle = (list) => {
  var _list = []
  var _list_item = []

  for (var _i = 0; _i < list.length; ++_i) {
    for (var _ii = 0; _ii < 2; ++_ii) {
      if (_ii === 0) { _list_item = [] }

      if (list[_i]) { _list_item.push(list[_i]) }
      ++_i
    }

    _list.push(_list_item)
  }
  return _list
}

const homePartnersPage = () => {
  return (
    <Box as='section' id='partners' className='partners-content'>
      <h3>合作夥伴</h3>
      <div className='partners-items'>
        {
          partnersHandle(partners).map((items, index) => {
            return (
              <div className='partners-item' key={index}>
                {
                  items.map((item, index) => {
                    return (
                      <div className='partners-item-contnet' key={index}>
                        <div className='partners-item-image'>
                          <Image src={item.image} alt='' />
                        </div>
                        <div className='partners-item-title'>
                          {item.title}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </Box>
  )
}

export default homePartnersPage
