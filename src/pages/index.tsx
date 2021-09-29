import * as React from "react"
import { PageProps } from "gatsby"
import HomeBgLayout from "../layouts/HomeBgLayout"
import Seo from "../components/seo"
import { Link, navigate } from "gatsby"

import NickNameInput from "../components/NickNameInput"

const isBrowser = typeof window !== "undefined"


type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const [showInput, setShowInput] = React.useState(false)
  const handleOpenApp = () => {
    if (!isBrowser) return false
    const token = localStorage.getItem("access_token")
    if (!token) {
      setShowInput(true)
    } else {
      navigate("/app")
    }
  }
  return (
    <HomeBgLayout>
      <Seo title="阿瓦隆" />
      <div className="w-full h-full flex justify-center items-center">
        <div className="container flex justify-center md:justify-start items-center px-6">
          {showInput ? <NickNameInput /> : (
            <button
              onClick={() => handleOpenApp()}
              className="bg-quite-black text-xl text-white px-8 py-4 mt-6 rounded-full font-semibold">
              在你的浏览器中打开app
            </button>
          )}
        </div>
      </div>
    </HomeBgLayout>
  )
}

export default IndexPage
