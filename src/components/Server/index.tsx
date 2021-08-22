import * as React from "react"

import ServerItem from "../ServerItem"

const Server = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className="flex flex-col w-18 bg-tertiary py-3">
      {list.map(_ => <ServerItem />)}
    </div>
  )
}

export default Server
