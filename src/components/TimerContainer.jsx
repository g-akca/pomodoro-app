function TimerContainer() {
  const radius = 124;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - 0.84 * circumference;

  return (
    <div className="h-75 aspect-square p-4 rounded-full bg-linear-275 from-[#2E325A] to-[#0E112A] shadow-[-50px_-50px_100px_#272C5A,50px_50px_100px_#121530]">
      <div className="w-full h-full p-2.5 bg-blue-900 rounded-full flex items-center justify-center">
        <svg
          width={radius * 2}
          height={radius * 2}
          className="-rotate-90"
        >
          {/* Progress ring */}
          <circle
            stroke="#f87070"
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

        <div>
          <h2>17:59</h2>
          <button>Pause</button>
        </div>
      </div>
    </div>
  )
}

export default TimerContainer;