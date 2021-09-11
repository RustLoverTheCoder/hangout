import * as React from "react"
import Editor from "../components/Editor"
import MessageContainerLayout from "./MessageContainerLayout"

interface PropsTypes {
  children?: React.ReactElement | Array<React.ReactElement>
}

const ChatContainerLayout = ({ children }: PropsTypes) => {
  return (
    <div className="flex flex-col flex-1 justify-between w-full h-full">
      <MessageContainerLayout />
      <div className="w-full px-4 mb-6">
        <Editor />
      </div>
    </div>
  )
}

export default ChatContainerLayout
