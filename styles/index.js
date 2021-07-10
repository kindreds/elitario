import React from 'react'

const Globals = () => {
  return (
    <style jsx global>
      {`
        @keyframes fadeDown {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}
    </style>
  )
}

export default Globals
