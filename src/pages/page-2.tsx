import * as React from 'react'
import { PageProps } from 'gatsby'

type DataProps = {
  site: {
    buildTime: string
  }
}

const AppPage: React.FC<PageProps<DataProps>> = ({ data, path, serverData }) => {
  return (
    <main>
      <h1>SSR Page with Dogs</h1>
      <img alt="Happy dog" src={serverData.message} />
    </main>
  )
}

export default AppPage

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      headers: {
        status: 500,
      },
      props: {},
    }
  }
}
