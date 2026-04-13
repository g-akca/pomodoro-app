function CircularProgress() {
  const radius = 124;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - 0.84 * circumference;

  return (
    <svg width={radius * 2} height={radius * 2} className="-rotate-90 absolute">
      <circle
        stroke="#F87070"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
}

export default CircularProgress;