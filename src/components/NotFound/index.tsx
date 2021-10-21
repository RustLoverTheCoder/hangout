import * as React from 'react'
import './index.sass'
import './glitch.css'

import Seo from '../seo'

const NotFound = () => (
  <main className="w-full h-full flex justify-center items-center bg-notFound-bg">
    <Seo title="未找到页面" />
    <div className="container">
      <div className="glitch-wrapper">
        <h1 className="glitch">404</h1>
      </div>
    </div>
  </main>
)

export default NotFound
