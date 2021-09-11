import * as React from "react"

interface PropTypes {
  name?: string
}

const Skeleton = ({ name = "normal" }: PropTypes) => {
  const list1 = () => (
    <>
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "2.6875rem",
        opacity: 0.06
      }} />
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "2.9375rem",
        opacity: 0.06
      }} />
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "3.3125rem",
        opacity: 0.06
      }} />
    </>
  )

  const list2 = () => (
    <>
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "2.9375rem",
        opacity: 0.06
      }} />
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "5.75rem",
        opacity: 0.06
      }} />
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "3.5625rem",
        opacity: 0.06
      }} />
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "8.75rem",
        opacity: 0.06
      }} />
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "8.5625rem",
        opacity: 0.06
      }} />
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "6.75rem",
        opacity: 0.06
      }} />
      <div className="block bg-text-normal rounded-full h-5.5 flex-shrink-0 mb-1 mr-1" style={{
        width: "3.25rem",
        opacity: 0.06
      }} />
    </>
  )
  return (
    <div className="mt-4 pl-18 pr-4 relative flex-shrink-0">
      <div className="outline-none h-auto">
        <div className="absolute left-4 top-1 w-10 h-10 rounded-full flex-1 bg-text-normal" style={{ opacity: 0.08 }} />
        <h2 className="relative flex h-5.5 overflow-hidden flex-wrap">
          <div className="block bg-text-normal rounded-full h-full" style={{
            width: name === "normal" ? "6.375rem" : "9.375rem",
            opacity: 0.102498
          }} />
        </h2>
        <div className="flex h-auto overflow-hidden flex-wrap mt-1 flex-1">
          {name === "normal" ? <>{list1()}{list2()}</> : <>{list1()}{list1()}</>}
        </div>
      </div>
    </div>
  )
}


export default Skeleton
