import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ChannelUserList = () => {
  const userList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14]
  return (
    <div className="w-full pl-2 flex flex-col gap-y-px">
      {userList.map(user => (
        <Link to="/" className="w-full" style={{ maxWidth: "224px" }}>
          <div className="rounded flex h-10.5 px-2 hover:bg-modifier-selected flex items-center justify-start overflow-hidden">
            <div className="w-8 h-8 flex-shrink-0">
              <StaticImage
                src="../../images/gatsby-icon.png"
                width={32}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ borderRadius: 32 }}
              />
            </div>
            <div className="ml-3 flex-1">
              <div
                className="truncate block h-5 text-base text-white"
                style={{ lineHeight: "1.25rem", maxWidth: "9.75rem" }}
              >
                Saya撒打算大xxxxxxx撒的
              </div>
              <div
                className="h-4 truncate block text-xs text-white"
                style={{ lineHeight: "1rem", maxWidth: "9.75rem" }}
              >
                正在玩 原神
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default ChannelUserList
