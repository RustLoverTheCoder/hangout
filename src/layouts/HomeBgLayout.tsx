import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface PropsTypes {
  children: React.ReactElement | Array<React.ReactElement>
}

const HomeBgLayout = ({ children }: PropsTypes) => {
  return (
    <div className="w-full h-full bg-background">
      <StaticImage
        src="../images/home_bg_mini.png"
        quality={75}
        className="w-full h-full"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="bg"
        loading='eager'
        imgClassName='h-full md:w-full object-cover md:object-contain md:object-right'
      />
    </div>
  )
}

export default HomeBgLayout
