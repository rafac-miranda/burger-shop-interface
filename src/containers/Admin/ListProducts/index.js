import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, BorderColorRoundedIconStyle } from './styles'

function ListProducts() {
  const [products, setProducts] = useState()
  const { push } = useHistory()

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

      setProducts(data)
    }
    loadOrders()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxRoundedIcon style={{ color: '#228B22' }} />
    }
    return <DisabledByDefaultRoundedIcon style={{ color: '#CC1717' }} />
  }

  function editProduct(product) {
    push(paths.EditProduct, { product })
  }

  return (
    <Container>
      <TableContainer style={{ borderRadius: '10px' }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>
                NOME
              </TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>
                PREÇO
              </TableCell>
              <TableCell
                style={{ fontWeight: 'bold', fontSize: '16px' }}
                align="center"
              >
                PRODUTO EM OFERTA
              </TableCell>
              <TableCell
                style={{ fontWeight: 'bold', fontSize: '16px' }}
                align="center"
              >
                IMAGEM DO PRODUTO
              </TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>
                EDITAR
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    style={{ textTransform: 'uppercase', fontWeight: '500' }}
                    component="th"
                    scope="row"
                  >
                    {product.name}
                  </TableCell>
                  <TableCell style={{ fontWeight: '500' }}>
                    {formatCurrency(product.price)}
                  </TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <Img src={product.url} alt="product-image" />
                  </TableCell>
                  <TableCell>
                    <BorderColorRoundedIconStyle
                      onClick={() => editProduct(product)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
