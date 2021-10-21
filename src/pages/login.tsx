import * as React from 'react'
import { PageProps } from 'gatsby'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import { useForm, SubmitHandler } from 'react-hook-form'
import qrcode from '../images/qrcode.png'
import HashLoader from "react-spinners/HashLoader"


type DataProps = {
  site: {
    buildTime: string
  }
}

type Inputs = {
  phone: string
  code: string
}

const LoginPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log('errors', errors)

  return (
    <div className="w-full h-full bg-brand flex justify-center items-center">
      <Seo title="阿瓦隆" />
      <div className="container flex justify-center items-center px-4 sm:mx-0">
        <div className="w-full sm:w-auto h-102 md:w-196 md:h-102 bg-primary text-muted p-8 rounded-md flex justify-between">
          <div className="h-full w-full sm:w-100 flex flex-col">
            <h3 className="text-2xl text-white font-semibold mb-2">欢迎回来！</h3>
            <div className="text-base leading-5 text-header-secondary">很高兴再次见到你！</div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col">
              <div className="mb-5">
                <div
                  className={`mb-2 text-xs leading-4 font-semibold ${
                    errors.phone ? 'text-danger' : 'text-muted'
                  }`}
                >
                  电话号码
                  {errors.phone && (
                    <span>
                      {' '}
                      -{' '}
                      <span className="italic">
                        {errors.phone.type === 'required' ? '这是必填栏' : '请输入正确的电话号码'}
                      </span>
                    </span>
                  )}
                </div>

                <input
                  {...register('phone', {
                    required: true,
                    pattern: /^1[3456789]\d{9}$/,
                  })}
                  className={`${
                    errors.phone ? 'border-danger' : 'border-gray-600 focus:border-blue-500'
                  } bg-text-input-bg rounded border w-full h-10.5 text-white rounded  bg-transparent p-2.5 outline-none`}
                />
              </div>
              <div>
                <div
                  className={`mb-2 text-xs leading-4 font-semibold ${
                    errors.code ? 'text-danger' : 'text-muted'
                  }`}
                >
                  验证码
                  {errors.code && (
                    <span>
                      {' '}
                      -{' '}
                      <span className="italic">
                        {' '}
                        {errors.code.type === 'required' ? '这是必填栏' : '请输入4位数验证码'}
                      </span>
                    </span>
                  )}
                </div>

                <input
                  {...register('code', { required: true, pattern: /^\d{4}$/ })}
                  className={`${
                    errors.code ? 'border-danger' : ' border-gray-600 focus:border-blue-500'
                  } bg-text-input-bg rounded border w-full h-10.5 text-white rounded  bg-transparent p-2.5 outline-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full h-11 text-base font-semibold leading-6 text-white mt-11 bg-brand rounded font-medium px-4 py-0.5 text-center flex justify-center items-center"
              >
                <span>登录</span>
              </button>
              <div className="mt-0.5">
                <span className="text-sm leading-4">没有账号即注册</span>
              </div>
            </form>
          </div>
          <div className="h-full w-60  justify-center items-center flex-col hidden md:flex">
            <div className="w-44 h-44 mb-8 rounded flex justify-center items-center">
              {/*<HashLoader color="#5865f2" size={50} />*/}
              <img src={qrcode} className="w-44 h-44 rounded" alt="" />
            </div>
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
