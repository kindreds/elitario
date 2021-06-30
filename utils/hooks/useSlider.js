import { useEffect, useState } from 'react'

const defaultProps = {
  ms: 5000
}

const useSlider = ({ ms } = defaultProps) => {
  const [timer, setTimer] = useState(false)
  const [actualSlide, setActualSlide] = useState(0)

  useEffect(() => {
    const timer = play()
    setTimer(timer)
    return () => clearTimeout(timer)
  }, [])

  const play = () => {
    return setInterval(() => {
      setActualSlide((state) => {
        if (state + 1 === 8) return 0
        return state + 1
      })
    }, ms)
  }

  const reset = () => clearInterval(timer)

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  return { actualSlide, updateSlide, play: () => setTimer(play()), reset }
}

export default useSlider
