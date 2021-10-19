import * as React from "react"
import { PageProps } from "gatsby"

import { ReactQueryDevtools } from "react-query/devtools"

import { useMutation, useQueryClient } from "react-query"
import { ping, userLogin } from "../graphql/query"
import { userRegister } from "../graphql/mutation"
import { useEffect } from "react"

type DataProps = {
  site: {
    buildTime: string
  }
}


const AppPage: React.FC<PageProps<DataProps>> = ({ serverData }) => {

  const queryClient = useQueryClient()

  const { data: data2, status: status2 } = ping()
  console.log("data", data2, status2)

  // const { data } = userLogin()
  // console.log("data2", data)

  const mutation = useMutation(({ nickname }: userRegister) => userRegister(nickname), {
      onError: (error, variables, context) => {
        console.log("userRegister error:", error, variables, context)
      },
      onSuccess: async (data, variables, context) => {
        console.log("userRegister success:", data, variables, context)
        const res = await queryClient.invalidateQueries("userLogin")
        console.log("res", res)
      }
    }
  )

  return (
    <main>
      <div>{mutation.isError ? "error" : null}</div>
      <h1 onClick={() => mutation.mutate({ nickname: "maxiang1" })}>SSR Page with Dogs</h1>
      <img alt="Happy dog" src={serverData.message} />
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
      props: await res.json()
    }
  } catch (error) {
    return {
      headers: {
        status: 500
      },
      props: {}
    }
  }
}
