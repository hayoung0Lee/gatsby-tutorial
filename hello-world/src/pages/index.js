import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <>
      <Header title="This is Home Page" />
      <div>Hello world!</div>
      <div>
        <Link to="/about/">About</Link>
      </div>
      <div>
        <Link to="/contact/">Contact</Link>
      </div>
    </>
  )
}
