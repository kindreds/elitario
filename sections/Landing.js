import React, { useEffect, useState } from 'react'
import d from 'next/dynamic'

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

import 'react-slidy/lib/styles.css'

const Landing = () => {
  const [loadChunk, setLoadChunk] = useState(false)
  const { ref, inView } = useInView()

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
