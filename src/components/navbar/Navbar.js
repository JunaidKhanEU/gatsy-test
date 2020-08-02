import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <u>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">blog</Link>
      </li>
      <li>
        <Link to="/products">products</Link>
      </li>
      <li>
        <Link to="/examples">Examples</Link>
      </li>
      <li>
        <Link to="/images">Images</Link>
      </li>
    </u>
  )
}

export default Navbar
