import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as yup from 'yup'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header/Index'
import { SideBar } from '../../components/Sidebar/Index'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'

interface CreateUserFormData {
  nome: string
  email: string
  password: string
  password_confirmation: string
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório!'),
  email: yup
    .string()
    .email('Formato de e-mail inválido')
    .required('O e-mail é obrigatório!'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(6, 'Mínino de 6 caracteres necessários'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'A senhas devem ser iguais!')
})

export default function CreateUser() {
  const router = useRouter()
  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    await createUser.mutateAsync(values)
    router.push("/users")
  }
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth="1100" mx="auto" px="6">
        <SideBar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="name"
                label="Nome completo"
                {...register('name')}
                error={errors.name}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="password"
                label="Senha"
                type="password"
                {...register('password')}
                error={errors.password}
              />
              <Input
                name="password_confirmation"
                label="Confirmação de senha"
                type="password"
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end" gap="4">
            <NextLink href="/users" passHref>
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </NextLink>
            <Button
              type="submit"
              colorScheme="pink"
              isLoading={formState.isSubmitting}
            >
              Salvar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
