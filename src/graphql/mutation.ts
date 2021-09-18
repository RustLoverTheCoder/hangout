import { useMutation } from "react-query"
import { request, gql } from "graphql-request"
import "./type"


const endpoint = "/api/graphql"


export const userRegister = (nickname: string) => request(endpoint, gql`
        mutation{
           userRegister(newUser:{nickname:"${nickname}",password:"1234567",username:"${nickname}",email:"1341198325679213ss0@qq.com"}){
            id
          }
        }
      `
)

export const updateUserEmail = (email) => request(endpoint, gql`
        mutation{
           userRegister(newUser:{email:"${email}"}){
            id
          }
        }
      `
)