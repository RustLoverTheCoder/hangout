import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"




const SecondPage = () => {

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <StaticImage src='../images/home_bg.webp' width={window.innerWidth} quality={75} className='h-full object-cover md:w-full' formats={["AUTO", "WEBP", "AVIF"]} alt="背景" />
    </div>
  )
}

export default SecondPage
