import React from 'react'


export const Header = () => {
  return (
    <header>
        <Link to="/" className="logo">
            <img src={Logo} alt="logo">
                <span>Router</span>
            </img>
        </Link>
    </header>
  )
}
