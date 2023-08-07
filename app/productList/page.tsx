import ProductList from '@/components/ProductList'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
type Props = {}
const Products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold",
      price: 40.99,
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 60.99,
    },
  ];
const page = (props: Props) => {
  return (
    <div className="container">
    <div className="my-3">
      <ProductList Products={Products} />
    </div>
  </div>
  )
}
export default page
