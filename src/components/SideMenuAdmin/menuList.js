import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import InventoryIcon from '@mui/icons-material/Inventory'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'PEDIDOS',
    link: paths.Orders,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'LISTAR PRODUTOS',
    link: paths.Products,
    icon: InventoryIcon
  },
  {
    id: 3,
    label: 'ADICIONAR PRODUTOS',
    link: paths.NewProduct,
    icon: AddBusinessIcon
  }
]

export default listLinks
