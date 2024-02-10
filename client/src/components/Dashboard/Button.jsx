import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({name}) => {
  return (
    <Link
        to={"/dashboard/talk"}
        className="bg-blue-400 px-4 py-1 rounded-xl text-center"
    >
        {name}
      </Link>
  )
}

export default Button