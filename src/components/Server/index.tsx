import * as React from "react"

import ServerItem from "../ServerItem"

const Server = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <div className="flex-col w-18 bg-tertiary py-3 overflow-y-auto hidden lg:flex">
      {list.map(_ => (
        <ServerItem />
      ))}
    </div>
  )
}

export default Server
