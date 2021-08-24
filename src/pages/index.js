import * as React from "react"
import Email from "../components/Email"
// import Sidebar from "../components/Sidebar"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"
// import { useState } from "react"

const IndexPage = () => (
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };


  <Layout>
    {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
    <Seo title="Home" />
    <Hero />
   <Trips heading="Nossos Destinos Favoritos" />
   <Testimonials />
   <Stats />
   <Email />
  </Layout>
)

export default IndexPage
