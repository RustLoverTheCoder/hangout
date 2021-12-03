import * as React from 'react'
import { PageProps } from 'gatsby'

const Channel: React.FC<PageProps> = (props) => {
  const { serverId } = props.params
  return (
    <div>
      <h1>Channel:{serverId}</h1>
    </div>
  )
}

export default Channel
