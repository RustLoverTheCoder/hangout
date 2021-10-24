import * as React from 'react'
import useVirtual from 'react-cool-virtual'
import User from '../User'

const UserList = () => {
  const { outerRef, innerRef, items } = useVirtual({
    itemCount: 50,
  })
  return (
    <div className="h-full w-60 bg-secondary hidden lg:flex flex-shrink-0 relative">
      <div
        ref={outerRef}
        className="w-full h-full flex-shrink-0  absolute top-0 bottom-0 right-0 left-0 z-0 overflow-y-auto overflow-x-hidden pt-8"
      >
        <div ref={innerRef} className="flex flex-col w-full gap-y-1">
          {items.map(({ index, size }) => {
            return <User />
          })}
        </div>
      </div>
    </div>
  )
}

export default UserList
