import React from 'react'

interface Props{
    children: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
    onClick: () => void;
}

const NewButton = ({children, color, onClick}: Props) => {
  return (
    <button className={'btn btn-' +color} onClick={onClick}>{children}</button>
  )
}

export default NewButton

// color?: string;