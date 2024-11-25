import Bestselling from  "@/components/best-selling/Bestselling"
import ProductDetail from '@/components/product-detail/Productdetail'
import React from 'react'

const Dynamic = async ({params}:{params: Promise<{id:number}>}) => {
  const {id} = await params

  return (
    <div>
      <ProductDetail  cardid={id}/>
      <Bestselling/>
    </div>
  )
}

export default Dynamic
