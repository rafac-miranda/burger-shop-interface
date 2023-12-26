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
import { Container, Label, Input, ButtonStyled, LabelUpload } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Selecione uma categoria'),
    details: Yup.string(),
    file: Yup.mixed()
      .test('required', 'Carregue uma imagem', value => {
        return value?.length > 0
      })
      .test('fileSize', 'Carregue uma imagem de até 5MB', value => {
        return value[0]?.size <= 500000
      })
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
    productFormData.append('details', data.details)

    await toast.promise(api.post('products', productFormData), {
      pending: 'Adicionando produto',
      success: 'Produto adicionado',
      error: 'Falha ao adicionar produto'
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
        <Input type="text" {...register('name')} />
        <ErrorMessage> {errors.name?.message}</ErrorMessage>
        <Label>PREÇO</Label>
        <Input type="number" {...register('price')} />
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
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="SELECIONE..."
              />
            )
          }}
        ></Controller>
        <ErrorMessage> {errors.category?.message}</ErrorMessage>

        <Label>INGREDIENTES</Label>
        <Input type="text" {...register('details')} />
        <ErrorMessage> {errors.details?.message}</ErrorMessage>

        <ButtonStyled>ADICIONAR</ButtonStyled>
      </form>
    </Container>
  )
}

export default NewProduct
