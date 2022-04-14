import React from 'react'

import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetails from '../parts/Details/ProductDetails'
// import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import Suggestion from '../parts/Details/Suggestion'

export default function Details() {
  return (
    <>
    <Header theme="black"/>

    <Breadcrumb list={[
        {url: "/", name: "Home"},
        {url: "/categories/91231", name: "Office Room"},
        {url: "/categories/91231/products/7888", name: "Details"},
    ]}/>
    <ProductDetails/>
    <Suggestion/>
    {/* <Clients/> */}
    <Sitemap/>
    <Footer/>
    </>
  )
}
