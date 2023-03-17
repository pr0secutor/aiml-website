import { Button, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Banner from '../../Components/Banner'
import EventCard from '../../Components/EventCard'

const Events = () => {
  return (
    <Flex flexDirection={'column'}>
    <Banner title='EVENTS'/>
    <SimpleGrid minChildWidth={'360px'} spacingX={24} spacingY={4} mt={24}>
        <EventCard
          image_src='./google io 21.png'
          title='Google IO 2023'
          date='September 1st Week'
          description='Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam.'
        />
        <EventCard
          image_src='./google io 21.png'
          title='Google IO 2023'
          date='September 1st Week'
          description='Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam.'
        /><EventCard
          image_src='./google io 21.png'
          title='Google IO 2023'
          date='September 1st Week'
          description='Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam.'
        /><EventCard
          image_src='./google io 21.png'
          title='Google IO 2023'
          date='September 1st Week'
          description='Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam.'
        /><EventCard
          image_src='./google io 21.png'
          title='Google IO 2023'
          date='September 1st Week'
          description='Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam.'
        />
    </SimpleGrid>
    <Button as='a' href='' colorScheme={'red'} variant="outline" borderRadius={20} width={'120px'} ml={'auto'} mr={'auto'} mt={4} mb={4}>
      View More
    </Button>
    </Flex>
  )
}

export default Events