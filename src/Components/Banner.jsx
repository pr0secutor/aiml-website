import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import styles from './Banner.module.css'

const Banner = ({title}) => {
  return (
    <Flex
    bgImage="url('./bg-image-home.jpg')"
    width={'100%'} 
    height={'max(52vh,500px)'}
    >
      <VStack
      spacing={1} 
      alignItems={'center'}
      width={'100%'}
      bgColor={'rgba(13, 35, 69, 0.8)'}
      >
        <Heading id={styles.heading} mt={'20vh'} size={['xl','2xl','3xl',null]}>
            {title}
        </Heading>
        <Text textAlign={'center'} color={'#fff'} p={2} fontSize={['md','lg','2xl',null]}>
            A non-profit network of college coding clubs and  makers around the world<br/>,for the students ,by the students.
        </Text>
      </VStack>
    </Flex>
  )
}

export default Banner