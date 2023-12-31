import * as React from "react"

const SportsIcon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8Zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 0 0 .078-2.183l1.562-1.562C13.802 6.249 14 7.1 14 8Zm-5.165 3.913 1.58 1.58A5.98 5.98 0 0 1 8 14a5.976 5.976 0 0 1-2.516-.552l1.562-1.562a4.005 4.005 0 0 0 1.789.027ZM4.158 9.117a4.002 4.002 0 0 1-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 0 0 2 8c0 .954.223 1.856.619 2.657l1.54-1.54h-.001Zm1.088-6.45A5.974 5.974 0 0 1 8 2c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 0 0-2.346.033L5.246 2.668v-.001ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill={props.color}
    />
  </svg>
)

export default SportsIcon
