import { useEffect, useRef, useState, useCallback } from 'react'

function useScrollFade(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  const handleIntersection = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true)
        setHasAnimated(true)
      }
    })
  }, [hasAnimated])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: '0px'
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [handleIntersection, threshold])

  return [elementRef, isVisible]
}

export default useScrollFade
