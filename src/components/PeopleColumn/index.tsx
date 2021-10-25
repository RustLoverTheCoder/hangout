import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const PeopleColumn = () => {
  return (
    <div className="flex-1">
      <div className="w-full h-full py-2">
        <h2 className="mt-4 mr-5 mb-2 ml-7.5 font-semibold text-xs leading-4 text-header-secondary">
          在线 - 1
        </h2>
        <div className="h-15.5 border-t border-modifier-accent ml-7.5 mr-5 flex items-center justify-between hover:bg-modifier-accent">
          <div className="h-full flex items-center">
            <StaticImage
              src="../../images/gatsby-icon.png"
              width={32}
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="A Gatsby astronaut"
              style={{ borderRadius: 32 }}
            />
            <div className="ml-3">
              <div className="text-header-primary font-semibold truncate">pupu9996</div>
              <div className="text-header-secondary text-xs">闲置</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default PeopleColumn
