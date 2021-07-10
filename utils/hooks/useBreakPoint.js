import { useEffect, useState } from 'react'

const useBreakPoint = ({ sm, md, lg, xl, xxl }) => {
  const [num, setnum] = useState(0)
  const [reset, setReset] = useState(false)
  // const num = useBreakpointValue({ base: 1, ms: 1, sm: 2, md: 3, lg: 4 })

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  function resize() {
    setReset(true)

    if (breakPoint('34em')) {
      setReset(false)
      return setnum(sm)
    }
    if (breakPoint('40em')) {
      setReset(false)
      return setnum(md)
    }
    if (breakPoint('52em')) {
      setReset(false)
      return setnum(lg)
    }
    if (breakPoint('64em')) {
      setReset(false)
      return setnum(xl)
    }

    setReset(false)
    return setnum(xxl)
  }

  function breakPoint(br) {
    return window.matchMedia(`(max-width: ${br})`).matches
  }

  return { num, reset }
}

export default useBreakPoint
