import * as React from "react"
const isBrowser = typeof window !== "undefined"
const ChatHeader = React.lazy(() => import("../components/ChatHeader"))
const ChatContainerLayout = React.lazy(() => import("./ChatContainerLayout"))

const ChatLayout = () => {
  return (
    <div className="flex-1 bg-primary flex flex-col">
      {isBrowser && <ChatHeader />}
      {isBrowser && <ChatContainerLayout />}
    </div>
  )
}

export default ChatLayout
