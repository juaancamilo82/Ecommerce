

import React from 'react'

const SectionTitle = ({title, path} : {title: string; path: string}) => {
  return (
    <div className='h-[250px] border-b pt-16 border-white bg-custom-dark-blue mb-2 max-sm:h-[200px] max-sm:pt-16'>
        <h1 className='section-title-title text-7xl text-center mb-7 max-md:text-7xl max-sm:text-5xl text-white max-sm:mb-2'>{ title }</h1>
        <p className='section-title-path text-xl text-center max-sm:text-xl text-white'>{ path }</p>
    </div>
  )
}

export default SectionTitle