import React, { useEffect, useState } from 'react'

// Terceros
import { useInView } from 'react-intersection-observer'

// Component
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'
import BrandStack from '@/components/BrandStack'
import Publicidad from '@/components/Publicidad'
import PorQueElegirnos from '@/components/PorQueElegirnos'
import ProductosRecientes from '@/components/ProductosRecientes'
import ProductosDestacados from '@/components/ProductosDestacados'
import PublicacionesRecientes from '@/components/PublicacionesRecientes'

const Landing = () => {
  const { ref, inView } = useInView()
  const [loadChunk, setLoadChunk] = useState(false)

  useEffect(() => {
    if (inView) setLoadChunk(true)
  }, [inView])

  return (
    <>
      <HeroSlider />
      <div ref={ref} />
      {loadChunk ? <BrandStack /> : null}
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
