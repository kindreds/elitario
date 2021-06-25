import { useBreakpointValue } from '@chakra-ui/media-query'

const initialState = {
  base: 1,
  ms: 2,
  sm: 3,
  md: 3,
  lg: 3,
  xl: 3
}

const useNumSlides = (breakpoints = initialState) => {
  const numOfSlidesRaw = useBreakpointValue(breakpoints)
  const numOfSlides = numOfSlidesRaw ?? 3
  return numOfSlides
}

export default useNumSlides
