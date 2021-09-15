import * as React from "react"
import { Link } from "gatsby"
import useTransitionState from "use-transition-state"

import { ModalContainer, Reoverlay } from 'reoverlay';

import { DatePickerModal } from '../components/Modals'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const SecondPage = () => {
  React.useEffect(() => {
    Reoverlay.showModal(DatePickerModal)
  }, [])
  const [searchQuery, setSearchQuery, { isPending }] = useTransitionState(
    null,
    { timeoutMs: 500 }
  )
  console.log(React)

  const handleInputChange = (e) => {
    setTimeout(() => {
      setSearchQuery(e.target.value)
    }, 500)
  }
  return (
    <Layout>
      <Seo title="Home" />
      <ModalContainer />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
      ddd
      <div>
        <input onChange={handleInputChange} />
        {isPending && "⏳ Loading..."}
        <div>{searchQuery || "🔍 Start search"}</div>
      </div>
    </Layout>
  )
}

export default SecondPage
