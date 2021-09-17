import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface PropsTypes {
  children: React.ReactElement | Array<React.ReactElement>
}

const HomeBgLayout = ({ children }: PropsTypes) => {
  if (typeof window !== "undefined" && window.innerWidth < 700) {
    return (
      <div className="w-full h-full">
        <StaticImage
          src="../images/home_bg_mini.png"
          quality={75}
          className="w-full h-full"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="bg"
        />
      </div>
    )
  }
  return (
    <div className="w-full h-full">
      <StaticImage
        src="../images/home_bg.png"
        quality={75}
        className="w-full h-full"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="bg"
      />
    </div>
  )
}

export default HomeBgLayout
