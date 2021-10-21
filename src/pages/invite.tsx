import * as React from 'react'
import { PageProps } from 'gatsby'
import NotFound from '../components/NotFound'

type DataProps = {
  site: {
    buildTime: string
  }
}

const AppPage: React.FC<PageProps<DataProps>> = ({ serverData }) => {
  if (serverData.state == 404) {
    return <NotFound />
  } else {
    return (
      <main className="w-full h-full flex justify-center items-center">
        <section className="w-120 bg-primary text-invite p-8 text-lg rounded-md">
          <div>
            <div></div>
            <button
              type="submit"
              className="w-full h-11 text-base font-semibold leading-6 text-white mt-11 bg-brand rounded font-medium px-4 py-0.5 text-center flex justify-center items-center"
            >
              <span>接受邀请</span>
            </button>
          </div>
        </section>
      </main>
    )
  }
}

export default AppPage

export async function getServerData({ query }) {
  if (!!query?.server) {
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
  } else {
    return {
      headers: {
        status: 404,
      },
      props: { state: 404 },
    }
  }
}
