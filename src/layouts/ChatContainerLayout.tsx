import * as React from "react"

interface PropsTypes {
  children?: React.ReactElement | Array<React.ReactElement>
}

const ChatContainerLayout = ({ children }: PropsTypes) => {
  return <div>{children}</div>
}

export default ChatContainerLayout
