import { Button, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Banner from '../../Components/Banner'
import MemberCard from './MemberCard'

const Members = () => {
  return (
    <Flex flexDirection={'column'}>
    <Banner title='MEMBERS'/>
        <SimpleGrid minChildWidth={'360px'} spacingX={24} spacingY={4} mt={24}>
            <MemberCard
              profile_pic='https://bit.ly/dan-abramov'
              name='Dan Abramov'
              por='President'
              date='2021-2022'
            />
            <MemberCard
              profile_pic='https://bit.ly/kent-c-dodds'
              name='Kent C Dodds'
              por='Secretary'
              date='2021-2022'
            />
            <MemberCard
              profile_pic='https://bit.ly/ryan-florence'
              name='Ryan Florence'
              por='Senior Head'
              date='2021-2022'
            />
            <MemberCard
              profile_pic='https://bit.ly/prosper-baba'
              name='Prosper Baba'
              por='Member'
              date='2021-2022'
            />
            <MemberCard
              profile_pic='https://bit.ly/code-beast'
              name='Code Beasr'
              por='Member'
              date='2021-2022'
            />
            <MemberCard
              profile_pic='https://bit.ly/sage-adebayo'
              name='Sage Adebayo'
              por='Member'
              date='2021-2022'
            />
        </SimpleGrid>
    </Flex>
  )
}

export default Members