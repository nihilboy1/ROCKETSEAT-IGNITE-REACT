import Head from 'next/head'
import { Input } from '../components/Form/Input'
import { Flex, Button } from '@chakra-ui/react'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Dashgo Home</title>
      </Head>
      <Flex w="100vw" h="100vh" justifyContent="center" alignItems={'center'}>
        <Flex
          as={'form'}
          w="100%"
          maxWidth={360}
          bg={'gray.800'}
          p={'8'}
          borderRadius={8}
          flexDir="column"
          gap={4}
        >
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
          <Button type="submit" mt={6} colorScheme={'pink'} size={'lg'}>
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
