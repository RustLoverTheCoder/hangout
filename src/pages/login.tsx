import * as React from 'react'
import { PageProps } from 'gatsby'

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <div>
      <div>123</div>
    </div>
  )
}

export default IndexPage
