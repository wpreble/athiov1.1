"use client"

export function SectionDivider({
  fromDark = true,
  variant = "pixels",
}: {
  fromDark?: boolean
  variant?: "pixels" | "diagonal" | "curved"
}) {
  const baseColor = fromDark ? "#0A0A0A" : "#FAFAFA"
  const targetColor = fromDark ? "#FAFAFA" : "#0A0A0A"

  if (variant === "curved") {
    const cols = 300
    const rows = 20

    return (
      <div className="relative h-5 md:h-6 overflow-hidden" style={{ backgroundColor: targetColor }}>
        <div className="absolute inset-0 flex flex-col">
          {Array.from({ length: rows }).map((_, rowIndex) => {
            return (
              <div key={rowIndex} className="flex flex-1">
                {Array.from({ length: cols }).map((_, colIndex) => {
                  // Create a gentle sine wave curve
                  const x = colIndex / cols
                  const waveHeight = Math.sin(x * Math.PI) * 0.4 // Gentle arc
                  const curveOffset = waveHeight * rows

                  // Add subtle noise for pixelated edge
                  const noise = (Math.random() - 0.5) * 3
                  const threshold = rows / 2 + curveOffset + noise

                  const showBaseColor = rowIndex < threshold

                  return (
                    <div
                      key={colIndex}
                      className="flex-1"
                      style={{
                        backgroundColor: showBaseColor ? baseColor : targetColor,
                      }}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (variant === "diagonal") {
    return (
      <div className="relative h-12 md:h-16 overflow-hidden" style={{ backgroundColor: targetColor }}>
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,30 0,100" fill={baseColor} />
        </svg>
      </div>
    )
  }

  const rows = 12
  const cols = 300

  return (
    <div className="relative h-3 md:h-4 overflow-hidden" style={{ backgroundColor: targetColor }}>
      <div className="absolute inset-0 flex flex-col">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const rowProgress = rowIndex / rows
          return (
            <div key={rowIndex} className="flex flex-1">
              {Array.from({ length: cols }).map((_, colIndex) => {
                const noise = Math.random()
                const threshold = 1 - rowProgress * 1.3
                const showBaseColor = noise < threshold

                return (
                  <div
                    key={colIndex}
                    className="flex-1"
                    style={{
                      backgroundColor: showBaseColor ? baseColor : targetColor,
                    }}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
