import * as React from "react"
import ChannelHeader from "../components/ChannelHeader"
import ChannelUser from "../components/ChannelUser"
import ChannelUserList from "../components/ChannelUserList"

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
      {searchMoveUser()}
      <div className="flex-1 h-auto overflow-y-auto">
        <ChannelUserList />
      </div>
      <ChannelUser />
    </div>
  )
}

export default ChannelLayout
