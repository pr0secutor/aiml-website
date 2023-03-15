import { Button, Card, CardBody, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const InitiativesCard = ({image_src,title,description,link}) => {
  return (
    <Card boxShadow={'none'}>
      <CardBody>
        <HStack spacing={24}>
          <Image src={image_src} alt='' borderRadius={8} width={'450px'} height={'420px'}/>
          <VStack spacing={4} maxWidth={'650px'} alignItems={'flex-start'}>
            <Heading>{title}</Heading>
            <Text>{description}</Text>
            <Button as='a' href={link} colorScheme={'red'} variant="outline" borderRadius={20} width={'120px'} ml={'auto'} mr={'auto'} mt={4} mb={4}>
              Live Demo
            </Button>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default InitiativesCard