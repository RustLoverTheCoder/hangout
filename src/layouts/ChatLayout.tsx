import * as React from "react"

const ChatHeader = React.lazy(() => import("../components/ChatHeader"))
const ChatContainerLayout = React.lazy(() => import("./ChatContainerLayout"))

const ChatLayout = () => {
  return (
    <div className="flex-1 bg-primary flex flex-col">
      <ChatHeader />
      <ChatContainerLayout />
    </div>
  )
}

export default ChatLayout
