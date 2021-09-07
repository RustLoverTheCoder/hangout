import * as React from "react"
const isBrowser = typeof window !== "undefined"
const ChannelHeader = React.lazy(() => import("../components/ChannelHeader"))
const ChannelUser = React.lazy(() => import("../components/ChannelUser"))
const ChannelUserList = React.lazy(() => import("../components/ChannelUserList"))

const ChannelLayout = () => {
  const searchMoveUser = () => (
    <div className="w-60 h-12 shadow flex justify-center items-center">
      <ChannelHeader />
    </div>
  )
  const ServerBanner = () => (
    <div
      className="w-full h-34 bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://c.tenor.com/IBseb9-DzvwAAAAd/jojo-u-got-that-jojo-version.gif')",
      }}
    />
  )

  return (
    <div className="w-60 h-full bg-secondary flex flex-col justify-between">
      {isBrowser && searchMoveUser()}
      <div className="flex-1 h-auto overflow-y-auto">
        <div className="h-2" />
        {isBrowser && <ChannelUserList />}
      </div>
      {isBrowser && <ChannelUser />}
    </div>
  )
}

export default ChannelLayout
