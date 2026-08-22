export function DrivelineVisual() {
  return (
    <div className="driveline-visual" aria-hidden="true">
      <div className="visual-grid" />
      <svg viewBox="0 0 760 500" role="img">
        <defs>
          <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e1e5e7" />
            <stop offset="0.45" stopColor="#6f777c" />
            <stop offset="1" stopColor="#22272a" />
          </linearGradient>
          <linearGradient id="darkMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5b6266" />
            <stop offset="1" stopColor="#101315" />
          </linearGradient>
          <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="18" floodOpacity=".55" /></filter>
        </defs>
        <g filter="url(#shadow)" transform="translate(86 62) rotate(-7 300 190)">
          <path d="M145 122 234 54h190l78 74-26 188-91 68H207l-89-86z" fill="url(#darkMetal)" stroke="#939a9e" strokeWidth="3" />
          <path d="M222 84h185l62 58-22 142-75 61H220l-69-64 20-135z" fill="url(#metal)" opacity=".86" />
          <circle cx="315" cy="213" r="108" fill="#171b1d" stroke="#a3aaad" strokeWidth="9" />
          <circle cx="315" cy="213" r="76" fill="#363c3f" stroke="#0a0c0d" strokeWidth="10" />
          <g fill="#929a9d">
            {Array.from({ length: 12 }).map((_, index) => (
              <rect key={index} x="306" y="103" width="18" height="42" rx="3" transform={`rotate(${index * 30} 315 213)`} />
            ))}
          </g>
          <circle cx="315" cy="213" r="35" fill="#d71920" stroke="#5a080b" strokeWidth="8" />
          <circle cx="315" cy="213" r="11" fill="#f5f5f2" />
          <path d="M424 170h142l52 39-15 84-61 29H425z" fill="url(#darkMetal)" stroke="#8d9598" strokeWidth="3" />
          <path d="M538 189h65l50 22-10 79-54 18h-51z" fill="#24292c" stroke="#697074" strokeWidth="5" />
          <path d="m155 155-73 12-29 41 14 62 85 8" fill="url(#darkMetal)" stroke="#80878b" strokeWidth="4" />
          <g fill="#16191b" stroke="#c0c4c6" strokeWidth="4">
            <circle cx="204" cy="112" r="11" /><circle cx="427" cy="132" r="11" /><circle cx="446" cy="292" r="11" /><circle cx="195" cy="312" r="11" />
          </g>
        </g>
      </svg>
      <div className="spec-label spec-one"><span>01</span> SYNCHRO ASSEMBLY</div>
      <div className="spec-label spec-two"><span>02</span> OUTPUT SHAFT</div>
      <div className="visual-caption"><strong>TRANSMISSION UNIT</strong><span>INSPECT · REBUILD · TEST</span></div>
    </div>
  )
}

export function PartVisual({ type }: { type: 'gearbox' | 'astronic' | 'ug780' | 'differential' }) {
  return (
    <div className={`part-visual ${type}`} aria-hidden="true">
      <div className="part-shadow" />
      <div className="part-body">
        <div className="part-bell"><div className="part-core" /></div>
        <div className="part-ribs" />
        <div className="part-tail" />
      </div>
    </div>
  )
}
