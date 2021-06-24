import * as React from 'react'

const Separador = (props) => {
  return (
    <svg
      width={398}
      height={10}
      viewBox="0 0 398 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5h182" stroke="#B59459" strokeWidth={2} />
      <circle cx={199} cy={5} r={5} fill="#B59459" />
      <path d="M216 5h182" stroke="#B59459" strokeWidth={2} />
    </svg>
  )
}

export default Separador
