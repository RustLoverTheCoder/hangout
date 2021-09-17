import * as React from 'react'
import { PageProps } from 'gatsby'

type DataProps = {
  site: {
    buildTime: string
  }
}

const AppPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <div>
      <div>123</div>
    </div>
  )
}

export default AppPage
