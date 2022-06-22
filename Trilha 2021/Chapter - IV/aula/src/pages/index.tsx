import { Button, Flex } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from '../components/Form/Input'

interface SignInFormData {
  email: string
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Formato de e-mail inválido')
    .required('O e-mail é obrigatório!'),
  password: yup.string().required('A senha é obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema)
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
          <Button
            type="submit"
            mt={6}
            colorScheme={'pink'}
            size={'lg'}
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
