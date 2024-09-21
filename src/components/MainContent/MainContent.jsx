import React from 'react'
import LeftPane from './LeftPane/LeftPane'
import RightPane from './RightPane/RightPane'

const MainContent = () => {
  return (
    <main className='grid grid-cols-5'>
      <section className='col-start-1 col-end-3 border-solid border-r-2 border-grey-book-rec'>
        <LeftPane />
      </section>

      <section className='col-start-3 col-end-6 ml-4'>
        <RightPane />
      </section>
    </main>
  )
}

export default MainContent