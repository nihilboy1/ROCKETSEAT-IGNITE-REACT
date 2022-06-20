import { Flex, Text, Input, Icon, Box, Avatar } from '@chakra-ui/react'
import {
  RiNotificationLine,
  RiSearch2Line,
  RiUserAddLine
} from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1100px"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          px="4"
          mr="4"
          _placeholder={{
            color: 'gray.400'
          }}
        />
        <Icon as={RiSearch2Line} fontSize="20" />
      </Flex>
      <Flex
        alignItems="center"
        ml="auto"
        gap={6}
        mr="6"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </Flex>
      <Flex alignItems="center">
        <Box textAlign="right" mr="4">
          <Text>Samuel Seve</Text>
          <Text color="gray.300" fontSize="small">
            samuelseve1@Gmail.com
          </Text>
        </Box>
        <Avatar size="md" name='Samuel Seve' src='https://github.com/nihilboy1.png'/>
      </Flex>
    </Flex>
  )
}
