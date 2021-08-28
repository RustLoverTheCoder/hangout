import * as React from "react"
import Editor from "../components/Editor"

interface PropsTypes {
  children?: React.ReactElement | Array<React.ReactElement>
}

const ChatContainerLayout = ({ children }: PropsTypes) => {
  return (
    <div>
      {children}
      <Editor />
    </div>
  )
}

export default ChatContainerLayout
