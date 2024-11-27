import { useEffect, useRef } from "react"
import Typed from "typed.js"

interface TypedTextProps {
  words: string[]
}

const TypedText = ({ words }: TypedTextProps) => {
  const element = useRef(null)

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: words,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <span ref={element} />
  )
}

export default TypedText