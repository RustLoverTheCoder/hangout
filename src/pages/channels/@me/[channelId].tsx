import * as React from 'react'
import { PageProps } from 'gatsby'

const Channel: React.FC<PageProps> = (props) => {
  console.log(props)
  const { channelId } = props.params
  return (
    <div>
      <h1>Channel:{channelId}</h1>
    </div>
  )
}

export default Channel
