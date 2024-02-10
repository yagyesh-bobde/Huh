import React from 'react'

const LangName = ({language}) => {
  return (
    <div className="bg-blue-200 w-[92px] h-[20px] flex justify-center align-middle text-center text-xs text-blue-950 font-semibold">
      {language}
    </div>
  )
}

export default LangName