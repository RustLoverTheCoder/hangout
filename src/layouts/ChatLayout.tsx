import * as React from "react"

import ChatHeader from "../components/ChatHeader"
import ChatContainerLayout from "./ChatContainerLayout"

const ChatLayout = () => {
  return (
    <div className="flex-1 bg-primary flex flex-col">
      <ChatHeader />
      <ChatContainerLayout />
    </div>
  )
}

export default ChatLayout
