import * as React from 'react'
import People from '../People'

const PeopleColumn = () => {
  return (
    <div className="flex-1">
      <div className="w-full h-full py-2">
        <h2 className="mt-4 mr-5 mb-2 ml-7.5 font-semibold text-xs leading-4 text-header-secondary">
          在线 - 1
        </h2>
        <People />
        <People />
      </div>
    </div>
  )
}

export default PeopleColumn
