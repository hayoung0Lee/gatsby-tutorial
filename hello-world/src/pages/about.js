import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link } from "gatsby"

export default function About() {
  return (
    <Container>
      <Header title="This is About Page" />
      <div>About page</div>
      <Link to="/">Home</Link>
    </Container>
  )
}
