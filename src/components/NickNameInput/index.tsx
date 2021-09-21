import * as React from "react"
import { useForm } from "react-hook-form"
import { BiArrowBack } from "react-icons/bi"
import { navigate } from "gatsby"

const NickNameInput = () => {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = React.useState("")
  const onSubmit = (data) => {
    setResult(JSON.stringify(data))
    navigate("/app")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
          className="w-95 h-14 bg-white rounded-full flex justify-between items-center">
      <input {...register("nickname")} placeholder="输入用户名" className="ml-8 outline-none flex-1" />
      <button type="submit" className="bg-brand rounded-full px-4.5 py-1.5 m-2">
        <BiArrowBack className="text-2xl transform rotate-180 text-white" />
      </button>
    </form>
  )
}

export default NickNameInput
