// import React from 'react'
import RecByFile from './RecByFile/RecByFile.jsx'
import RecByGenre from './RecByGenre/RecByGenre.jsx'
import RandomRec from './RandomRec/RandomRec.jsx'

const LeftPane = () => {
  return (
    <section className='flex flex-col max-w-xl'>
      <article className='grow mt-6'>
        <RecByFile />
      </article>

      <article className='grow mt-6'>
        <RecByGenre />
      </article>

      <article className='grow mt-6'>
        <RandomRec />
      </article>
    </section>
  )
}

export default LeftPane