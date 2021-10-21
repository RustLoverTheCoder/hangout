import * as React from 'react'
import { PageProps } from 'gatsby'
import NotFound from '../components/NotFound'
import { StaticImage } from 'gatsby-plugin-image'
import qrcode from '../images/qrcode.png'

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
      <main className="w-full h-full flex justify-center items-center bg-brand px-4 md:px-0">
        <section className="w-full md:w-120 bg-primary text-invite p-8 text-lg rounded-md">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="w-16 h-16 rounded-2xl">
                <img src={qrcode} alt="" className="w-16 h-16 rounded-2xl" />
              </div>
              <div className="text-base text-center text-header-secondary leading-5 mt-1">
                pupu 邀请你加入
              </div>
              <h3 className="font-semibold text-2xl leading-7 mt-2 text-white text-center">
                Blizzard
              </h3>
              <div className="mt-1 flex justify-center items-center gap-4 text-muted text-base">
                <div className="flex justify-center items-center leading-5 text-header-secondary">
                  <span className="mr-1 w-2.5 h-2.5 rounded-full bg-saturation-factor" />
                  10,858在线
                </div>
                <div className="flex justify-center items-center leading-5 text-header-secondary">
                  <span className="mr-1 w-2.5 h-2.5 rounded-full bg-header-secondary" />
                  73,342在线
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-11 text-base font-semibold leading-6 text-white mt-10 bg-brand rounded font-medium px-4 py-0.5 text-center flex justify-center items-center"
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
