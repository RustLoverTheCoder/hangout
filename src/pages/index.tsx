import * as React from 'react'
import { PageProps } from 'gatsby'
import HomeBgLayout from '../layouts/HomeBgLayout'

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <HomeBgLayout>
      <div>123</div>
    </HomeBgLayout>
  )
}

export default IndexPage
