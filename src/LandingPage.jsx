import React from "react"
import Layout from "./Layout"
import Hero from "./Components/Hero"
import Photos from "./Components/Photos"
import Whoami from "./Components/Whoami"
function LandingPage() {
  return (
    <Layout>
      <Hero />
      <Whoami />
      <Photos />
    </Layout>
  )
}

export default LandingPage
