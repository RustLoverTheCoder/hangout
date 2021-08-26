import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

const ServerItem = () => {
  return (
    <div className="w-full h-14 flex justify-center items-center text-white flex-shrink-0" onClick={() => navigate('/app/#me')}>
      <StaticImage
        src="../../images/gatsby-icon.png"
        width={48}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ borderRadius: 48 }}
      />
    </div>
  )
}

export default ServerItem
