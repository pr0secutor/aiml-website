import { Button, Card, CardBody, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const InitiativesCard = ({image_src,title,description,link}) => {
  return (
    <Card boxShadow={'none'}>
      <CardBody>
        <Stack direction={{base:'column',lg:'row'}} spacing={24} alignItems={'center'}>
          <Image src={image_src} alt='' borderRadius={8} width={{base:'350px',md:'450px'}} height={{base:'350px',md:'450px'}}/>
          <VStack spacing={4} maxWidth={'650px'} alignItems={'flex-start'}>
            <Heading>{title}</Heading>
            <Text>{description}</Text>
            <Button as='a' href={link} colorScheme={'red'} variant="outline" borderRadius={20} width={'120px'} ml={'auto'} mr={'auto'} mt={4} mb={4}>
              Live Demo
            </Button>
          </VStack>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default InitiativesCard