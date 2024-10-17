import React from 'react'

const GaugeCircle = ({ score }) => {
  const radius = 50 // Radius of the circle
  const stroke = 10 // Thickness of the circle
  const normalizedScore = score * 100 // Convert to percentage
  const circumference = 2 * Math.PI * radius // Circumference of the circle
  const offset = circumference - (normalizedScore / 100) * circumference
  return (
    <div>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke="#e6e6e6" // Background color of the circle
          strokeWidth={stroke}
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke={getScoreColor(score)} // Dynamic color based on score
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)" // Rotate to start from the top
          strokeLinecap="round" // Rounded edges
        />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dy="0.3em"
          fontSize="20px"
          fontWeight="bold"
          fill={getScoreColor(score)} // Text color based on score
        >
          {Math.round(normalizedScore)}
        </text>
      </svg>
    </div>
  )
}


const getScoreColor = (score) => {
  if (score >= 0.9) return '#0c6'
  if (score >= 0.5) return '#fa3'
  return '#c00'
}


export default GaugeCircle

