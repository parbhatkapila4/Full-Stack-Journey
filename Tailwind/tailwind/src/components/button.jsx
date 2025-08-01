
import React from 'react'

export const Button = ({
    disabled,
    children,
    onClick,
    varient 
}) => {
  return (
    <span onClick={onClick} className={`rounded-2xl text-2xl px-32 py-8 text-white cursor-pointer ${disabled ? "bg-blue-500" : "bg-green-400"}`}>
{children}
    </span>
  )
}

export default Button;