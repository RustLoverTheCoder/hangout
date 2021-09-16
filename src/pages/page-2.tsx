import * as React from "react"
const isBrowser = typeof window !== "undefined"
import { StaticImage } from "gatsby-plugin-image"


const SecondPage = () => {
  if(!isBrowser){
    return null
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      {window.innerWidth < 800 ? <StaticImage src="../images/home_bg_mini.png"
                                              width={window.innerWidth} quality={75}
                                              className="h-full object-cover md:w-full"
                                              formats={["AUTO", "WEBP", "AVIF"]} alt="背景" /> :
        <StaticImage src="../images/home_bg.png"
                     width={window.innerWidth} quality={75} className="h-full object-cover md:w-full"
                     formats={["AUTO", "WEBP", "AVIF"]} alt="背景" />}

    </div>
  )
}

export default SecondPage
