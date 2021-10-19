import { useQuery } from "react-query"
import { request, gql } from "graphql-request"

const endpoint = process.env.NODE_ENV === "development" ? `/api/graphql` : process.env.GATSBY_API_URL + "/graphql"

export function ping() {
  const { status, data, error, isFetching } = useQuery("ping", async () => {
      const { ping } = await request(endpoint, gql`
        {
          ping 
        }
      `)
      return ping
    }
  )
  return { status, data, error, isFetching }
}

export function userLogin() {
  const { status, data, error, isFetching } = useQuery("userLogin", async () => {
      const { userSignIn } = await request(endpoint, gql`
        {
          userSignIn(vm:{login:"maxiang",password:"1234567"}){
            accessToken
            refashToken
            expires
          } 
        }
      `)
      return userSignIn
    }, { refetchOnWindowFocus: false }
  )
  return { status, data, error, isFetching }
}