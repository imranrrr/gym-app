import React from 'react';
import Sidebar from '../../Components/AdminSidebar';
import { Grid } from '@mui/material';
import ProductsTables from './components/Table';
import AddProductModal from '../AddProductModal';


const ProductsTable = () => {

  return (
    <>
      <Sidebar />
      <Grid className='productsTable'>
        <div className='productsTable__addProductButton' >
          <h2>Add New Product</h2>
          <AddProductModal />
        </div>
        <ProductsTables />

      </Grid>
    </>
  );
}

export default ProductsTable;
