import React from 'react'

import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import HeroSlider from '@/components/HeroSlider'
import BrandStack from '@/components/BrandStack'
import Publicidad from '@/components/Publicidad'
import PorQueElegirnos from '@/components/PorQueElegirnos'
import ProductosRecientes from '@/components/ProductosRecientes'
import ProductosDestacados from '@/components/ProductosDestacados'
import PublicacionesRecientes from '@/components/PublicacionesRecientes'

const Landing = ({ isOpen, onClose }) => {
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
      <Sidebar {...{ isOpen, onClose }} />
    </>
  )
}

export default Landing
