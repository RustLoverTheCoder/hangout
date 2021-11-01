import * as React from 'react'
import { PageProps } from 'gatsby'

import { ReactQueryDevtools } from 'react-query/devtools'

import { useMutation, useQueryClient } from 'react-query'
import { ping, userLogin } from '../graphql/query'
import { userRegister } from '../graphql/mutation'
import { Reoverlay, ModalContainer } from 'reoverlay'
import { UserProfile } from '../components/Modals'
import useStore from '../stores/index'

type DataProps = {
  site: {
    buildTime: string
  }
}

const AppPage: React.FC<PageProps<DataProps>> = ({ serverData }) => {
  const bears = useStore((state) => state.bears)
  const increasePopulation = useStore((state) => state.increasePopulation)
  console.log('process', process.env.GATSBY_API_URL, process.env.NODE_ENV)

  const queryClient = useQueryClient()

  const { data: data2, status: status2 } = ping()
  console.log('data', data2, status2)

  // const { data } = userLogin()
  // console.log("data2", data)

  const mutation = useMutation(({ nickname }: userRegister) => userRegister(nickname), {
    onError: (error, variables, context) => {
      console.log('userRegister error:', error, variables, context)
    },
    onSuccess: async (data, variables, context) => {
      console.log('userRegister success:', data, variables, context)
      const res = await queryClient.invalidateQueries('userLogin')
      console.log('res', res)
    },
  })

  return (
    <main className="w-full h-full">
      <div>{mutation.isError ? 'error' : null}</div>
      <h1 onClick={() => mutation.mutate({ nickname: 'maxiang1' })}>SSR Page with Dogs</h1>
      <img alt="Happy dog" className="w-40" src={serverData.message} />
      <div
        className="text-base font-normal"
        onClick={() => {
          Reoverlay.showModal(UserProfile)
        }}
      >
        监狱你啊实打实给大家回复是德国萨v更多
      </div>
      <div>{bears}</div>

      <div className="text-base font-medium cursor-pointer" onClick={() => increasePopulation()}>
        监狱你啊实打实给大家回复是德国萨v更多
      </div>
      <div className="text-base font-semibold">监狱你啊实打实给大家回复是德国萨v更多</div>
      <div className="text-base font-bold">监狱你啊实打实给大家回复是德国萨v更多</div>
      <div className="text-lg">监狱你啊实打实给大家回复是德国萨v更多</div>
      <div className="text-xl">监狱你啊实打实给大家回复是德国萨v更多</div>
      <div className="text-2xl">监狱你啊实打实给大家回复是德国萨v更多</div>
      <div className="text-3xl">监狱你啊实打实给大家回复是德国萨v更多</div>
      <div className="w-100 h-auto">
        <div className="w-full h-auto flex items-center border-gray-600 focus:border-blue-500 bg-text-input-bg rounded border">
          <input className="flex-1 h-10.5 text-white p-2.5 bg-text-input-bg outline-none" />
          <div className="w-px h-10.5 flex">
            <div className="w-px flex-1 my-2 bg-white flex-shrink-0" />
          </div>
          <div className="h-10.5 px-2 text-header-primary text-sm font-semibold flex justify-center items-center cursor-pointer">
            获取验证码
          </div>
        </div>
      </div>
      <ModalContainer />
      <ReactQueryDevtools initialIsOpen={false} />
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
