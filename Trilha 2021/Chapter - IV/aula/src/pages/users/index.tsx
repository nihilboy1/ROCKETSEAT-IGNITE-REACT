import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header/Index'
import { Pagination } from '../../components/Pagination/Index'
import { SideBar } from '../../components/Sidebar/Index'

export default function UserList() {
  const isWideVersion = useBreakpointValue(
    {
      base: false,
      lg: true
    },
    'lg'
  )
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth="1100" mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data do cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Samuel Seve</Text>
                    <Text fontSize="sm" color="gray.300">
                      samuelseve1@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>21/06/2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blackAlpha"
                    leftIcon={
                      <Icon
                        as={RiPencilLine}
                        fontSize="16"
                        mr={isWideVersion ? '0' : '-2'}
                      />
                    }
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Samuel Seve</Text>
                    <Text fontSize="sm" color="gray.300">
                      samuelseve1@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>21/06/2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blackAlpha"
                    leftIcon={
                      <Icon
                        as={RiPencilLine}
                        fontSize="16"
                        mr={isWideVersion ? '0' : '-2'}
                      />
                    }
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Samuel Seve</Text>
                    <Text fontSize="sm" color="gray.300">
                      samuelseve1@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>21/06/2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blackAlpha"
                    leftIcon={
                      <Icon
                        as={RiPencilLine}
                        fontSize="16"
                        mr={isWideVersion ? '0' : '-2'}
                      />
                    }
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Samuel Seve</Text>
                    <Text fontSize="sm" color="gray.300">
                      samuelseve1@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>21/06/2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blackAlpha"
                    leftIcon={
                      <Icon
                        as={RiPencilLine}
                        fontSize="16"
                        mr={isWideVersion ? '0' : '-2'}
                      />
                    }
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
