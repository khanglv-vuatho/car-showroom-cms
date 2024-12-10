import React from 'react'

type WrapperLayoutProps = {
  children: React.ReactNode
}

const WrapperLayout = ({ children }: WrapperLayoutProps) => {
  return (
    <div className='mx-auto w-full max-w-7xl px-4'>
      <div className='w-full'>{children}</div>
    </div>
  )
}

export default WrapperLayout
