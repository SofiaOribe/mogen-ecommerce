import React from "react"

const Loading = () => {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center">
      <svg viewBox="25 25 50 50" className="svgLoading">
        <circle r="20" cy="50" cx="50" className="circleLoading"></circle>
      </svg>
    </div>
  )
}

export default Loading
