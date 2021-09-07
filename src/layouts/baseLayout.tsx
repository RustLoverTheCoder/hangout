import * as React from "react"
const isBrowser = typeof window !== "undefined"
const Server = React.lazy(() => import("../components/Server"))

interface PropsTypes {
  children: React.ReactElement | Array<React.ReactElement>
}

const BaseLayout = ({ children }: PropsTypes) => {
  return (
    <div className="flex w-full h-full">
      {isBrowser && <Server />}
      <div className="flex flex-1">
        {children}
      </div>
    </div>
  )
}

export default BaseLayout
