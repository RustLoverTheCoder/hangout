import * as React from 'react'
import { PageProps } from 'gatsby'

const Channel: React.FC<PageProps> = (props) => {
  console.log(props)
  const { serverId, channelId } = props.params
  return (
    <div>
      <h1>
        Channel:{serverId},{channelId}
      </h1>
    </div>
  )
}

export default Channel
