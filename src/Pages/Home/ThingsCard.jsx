import { Card, CardBody, Heading, IconButton, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ThingsCard = ({icon,title,description,read_more_link}) => {
  return (
    <Card width={'350px'} mr={'auto'} ml={'auto'} mt={4} mb={4} boxShadow={'none'}>
        <CardBody>
            <VStack spacing={4}>
            <IconButton
                cursor={'default'}
                fontSize={'150px'}
                p={4}
                size={'xl'}
                colorScheme={'red'}
                isRound={'true'}
                icon={icon}
            />
            <Heading>{title}</Heading>
            <Text textAlign={'center'}>{description}</Text>
            <Link href={read_more_link}>
                <Text color={'#EC3750'}>Know More →</Text>
            </Link>
            </VStack>
        </CardBody>
    </Card>
  )
}

export default ThingsCard