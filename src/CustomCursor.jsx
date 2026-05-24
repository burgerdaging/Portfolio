import { useEffect, useRef, useState } from 'react'

const interactiveSelector =
  'a, button, [role="button"], input, textarea, select, .cursor-preview'

function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const dot = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const frame = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    const canUseCursor =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canUseCursor) {
      return undefined
    }

    setEnabled(true)

    const moveCursor = () => {
      dot.current.x += (mouse.current.x - dot.current.x) * 0.65
      dot.current.y += (mouse.current.y - dot.current.y) * 0.65
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${ring.current.x + 22}px, ${ring.current.y + 22}px, 0)`
      }

      frame.current = window.requestAnimationFrame(moveCursor)
    }

    const handlePointerMove = (event) => {
      mouse.current = { x: event.clientX, y: event.clientY }
    }

    const handlePointerOver = (event) => {
      const target = event.target.closest(interactiveSelector)
      setActive(Boolean(target))
      setLabel(target?.dataset.cursorLabel || '')
    }

    const handlePointerOut = (event) => {
      if (!event.relatedTarget?.closest?.(interactiveSelector)) {
        setActive(false)
        setLabel('')
      }
    }

    window.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)
    frame.current = window.requestAnimationFrame(moveCursor)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      window.cancelAnimationFrame(frame.current)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor custom-cursor-ring${active ? ' is-active' : ''}`}
      />
      <div
        ref={dotRef}
        className={`custom-cursor custom-cursor-dot${active ? ' is-active' : ''}`}
      />
      <div
        ref={labelRef}
        className={`custom-cursor-label${label ? ' is-visible' : ''}`}
        aria-hidden="true"
      >
        {label}
      </div>
    </>
  )
}

export default CustomCursor
