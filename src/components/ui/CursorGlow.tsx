import { useMousePosition } from '@/hooks'

export function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden sm:block transition-opacity duration-500"
      style={{
        transform: `translate3d(${x - 240}px, ${y - 240}px, 0)`,
        width: '480px',
        height: '480px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 30%, transparent 70%)',
        opacity: x === 0 && y === 0 ? 0 : 1,
        willChange: 'transform',
      }}
    />
  )
}