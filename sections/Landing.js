import React from 'react'

// Component
import Blog from '@/components/Blog'
import HeroSlider from '@/components/HeroSlider'
import BrandStack from '@/components/BrandStack'
import Publicidad from '@/components/Publicidad'
import PorQueElegirnos from '@/components/PorQueElegirnos'
import SliderCategorias from '@/components/SliderCategorias'
import ProductosRecientes from '@/components/ProductosRecientes'
import ProductosDestacados from '@/components/ProductosDestacados'
import PublicacionesRecientes from '@/components/PublicacionesRecientes'

const Landing = () => {
  return (
    <>
      <HeroSlider />
      <BrandStack />
      <SliderCategorias />
      <ProductosRecientes />
      <ProductosDestacados />
      <Publicidad />
      <Blog />
      <PublicacionesRecientes />
      <PorQueElegirnos />
    </>
  )
}

export default Landing
