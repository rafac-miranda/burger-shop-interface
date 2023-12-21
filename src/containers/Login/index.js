import { yupResolver } from '@hookform/resolvers/yup'
import { React, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginLogo from '../../assets/login-logo.png'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import { Container, ContainerItens, Input, SignInLink } from './styles'

function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    phone: Yup.string()
      .required('Este campo é obrigatório.')
      .min(15, 'Insira um número com DDD e dígito 9.'),
    password: Yup.string()
      .required('Este campo é obrigatório.')
      .min(6, 'A senha deve conter pelo o menos 6 dígitos.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        phone: clientData.phone,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu telefone e a senha 🤯'
      }
    )

    putUserData(data)
    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000)
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
  }

  return (
    <Container>
      <ContainerItens>
        <img src={LoginLogo} alt="login-logo" />

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            autoComplete="off"
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

          <Button type="submit" style={{ marginTop: '40px', color: '#fff' }}>
            Entrar
          </Button>
        </form>
        <SignInLink>
          Não possui conta? <Link to="/cadastro">Clique aqui</Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
