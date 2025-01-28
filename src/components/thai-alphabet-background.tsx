import { useEffect, useRef } from "react"

const thaiAlphabet: string = "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ"

interface Character {
  x: number
  y: number
  char: string
  speed: number
}

export function ThaiAlphabetBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const characters: Character[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      char: thaiAlphabet[Math.floor(Math.random() * thaiAlphabet.length)],
      speed: 0.2 + Math.random() * 0.3,
    }))

    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      ctx.font = "20px Arial"

      characters.forEach((char) => {
        ctx.fillText(char.char, char.x, char.y)
        char.y += char.speed
        if (char.y > canvas.height) {
          char.y = 0
          char.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

