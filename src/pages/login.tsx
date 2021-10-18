import * as React from "react"
import { PageProps } from "gatsby"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const LoginPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <div className="w-full h-full bg-brand flex justify-center items-center">
      <Seo title="阿瓦隆" />
      <div className="container flex justify-center items-center px-4 sm:mx-0">
        <div className="w-full sm:w-auto h-102 md:w-196 md:h-102 bg-primary text-muted p-8 rounded flex justify-between">
          <div className="h-full w-full sm:w-100 flex flex-col">
            <h3 className="text-2xl text-white font-semibold mb-2">欢迎回来！</h3>
            <div className="text-base leading-5 text-header-secondary">很高兴再次见到你！</div>
            <div className="mt-5">
              <div className="mb-5">
                <div className="mb-2 text-xs leading-4">电话号码</div>
                <div className="w-full h-10.5 bg-text-input-bg rounded border border-gray-600"></div>
              </div>
              <div>
                <div className="mb-2 text-xs leading-4">验证码</div>
                <div className="w-full h-10.5 bg-text-input-bg rounded border border-gray-600"></div>
              </div>
              <button
                className="w-full h-11 text-base leading-6 text-white mt-11 bg-brand rounded font-medium px-4 py-0.5">
                登录
              </button>
              <div className="mt-0.5">
                <span className="text-sm leading-4">没有账号即注册</span>
              </div>
            </div>
          </div>
          <div className="h-full w-60  justify-center items-center flex-col hidden md:flex">
            <div className="mb-8 w-44 h-44"></div>
            <h3 className="text-white mb-2 font-semibold text-2xl leading-7">通过二维码登录</h3>
            <div className="text-base leading-5 font-semibold text-header-secondary text-center">
              通过手机APP扫描二维码，便即可登录。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
