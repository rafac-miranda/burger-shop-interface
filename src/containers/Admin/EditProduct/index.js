import { yupResolver } from '@hookform/resolvers/yup'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import ErrorMessage from '../../../components/ErrorMessage'
import api from '../../../services/api'
// import formatCurrency from '../../../utils/formatCurrency'
import {
  Container,
  Label,
  Input,
  ButtonStyled,
  LabelUpload,
  ContainerItens
} from './styles'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const {
    push,
    location: {
      state: { product }
    }
  } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Selecione uma categoria'),
    offer: Yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    const productFormData = new FormData()

    productFormData.append('name', data.name)
    productFormData.append('price', data.price)
    productFormData.append('category_id', data.category.id)
    productFormData.append('file', data.file[0])
    productFormData.append('offer', data.offer)

    await toast.promise(api.put(`products/${product.id}`, productFormData), {
      pending: 'Editando produto',
      success: 'Produto editado',
      error: 'Falha ao editar produto'
    })

    setTimeout(() => {
      push('/listar-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>NOME</Label>
        <Input type="text" {...register('name')} defaultValue={product.name} />
        <ErrorMessage> {errors.name?.message}</ErrorMessage>
        <Label>PREÇO</Label>
        <Input
          type="number"
          {...register('price')}
          defaultValue={product.price}
        />
        <ErrorMessage> {errors.price?.message}</ErrorMessage>
        <Label>IMAGEM DO PRODUTO</Label>
        <LabelUpload>
          {fileName || (
            <DriveFolderUploadIcon
              style={{ fontSize: '30px', color: '#ffffff' }}
            />
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <ErrorMessage> {errors.file?.message}</ErrorMessage>

        <Label>CATEGORIA</Label>
        <Controller
          name="category"
          control={control}
          defaultValue={product.category}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="SELECIONE..."
                defaultValue={product.category}
              />
            )
          }}
        ></Controller>
        <ErrorMessage> {errors.category?.message}</ErrorMessage>

        <ContainerItens>
          <Label>PRODUTO EM PROMOÇÃO?</Label>
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={product.offer}
          />
        </ContainerItens>
        <ButtonStyled>ATUALIZAR</ButtonStyled>
      </form>
    </Container>
  )
}

export default EditProduct
