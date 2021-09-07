import * as React from "react"
import Server from "../components/Server"

interface PropsTypes {
  children: React.ReactElement | Array<React.ReactElement>
}

const BaseLayout = ({ children }: PropsTypes) => {
  return (
    <div className="flex w-full h-full">
      <Server />
      <div className="flex flex-1">
        {children}
      </div>
    </div>
  )
}

export default BaseLayout
