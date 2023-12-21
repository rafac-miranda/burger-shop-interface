import { yupResolver } from '@hookform/resolvers/yup'
import { React, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginLogo from '../../assets/login-logo.png'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import api from '../../services/api'
import { Container, ContainerItens, Input, SignInLink } from './styles'

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string(10).required('Este campo é obrigatório.'),
    phone: Yup.string()
      .required('Este campo é obrigatório.')
      .min(15, 'Insira um número com DDD e dígito 9.'),
    password: Yup.string()
      .required('Este campo é obrigatório.')
      .min(6, 'A senha deve conter pelo o menos 6 dígitos.'),
    confirmPassword: Yup.string()
      .required('Este campo é obrigatório.')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          phone: clientData.phone,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastrado com sucesso!', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else if (status === 409) {
        toast.error('Telefone já possui cadastro!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Erro no sistema! Tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }
  }

  const [phoneInsert, setPhone] = useState()
  function handlePhoneChange(clientInsert) {
    const notFormattedPhone = clientInsert.target.value
    const formattedPhone = notFormattedPhone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
    setPhone(formattedPhone)

    console.log(formattedPhone)
  }

  return (
    <Container>
      <ContainerItens>
        <img src={LoginLogo} alt="login-logo" />

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            {...register('name')}
            placeholder="Primeiro Nome"
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Input
            value={phoneInsert}
            {...register('phone')}
            placeholder="Telefone"
            error={errors.phone?.message}
            onChange={handlePhoneChange}
          />
          <ErrorMessage>{errors.phone?.message}</ErrorMessage>

          <Input
            type="password"
            {...register('password')}
            placeholder="Senha"
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirme a senha"
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 10 }}>
            Cadastrar
          </Button>
        </form>
        <SignInLink>
          {' '}
          Já possui conta? <Link to="/login">Faça login</Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Register
