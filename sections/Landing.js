import React from 'react'

import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'
import BrandStack from '@/components/BrandStack'
import Publicidad from '@/components/Publicidad'
import PorQueElegirnos from '@/components/PorQueElegirnos'
import ProductosRecientes from '@/components/ProductosRecientes'
import ProductosDestacados from '@/components/ProductosDestacados'
import PublicacionesRecientes from '@/components/PublicacionesRecientes'

import 'react-slidy/lib/styles.css'

const Landing = () => {
  return (
    <>
      <HeroSlider />
      <BrandStack />
      <ProductosRecientes />
      <Publicidad />
      <ProductosDestacados />
      <Publicidad />
      <Blog />
      <PublicacionesRecientes />
      <PorQueElegirnos />
      <Footer />
    </>
  )
}

export default Landing
