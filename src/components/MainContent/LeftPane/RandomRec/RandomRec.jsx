import { useContext } from "react"
import BookContext from "../../../../contexts/BookContext"

const RandomRec = () => {
  const { handleRandomRecSubmission } = useContext(BookContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRandomRecSubmission();
  }

  return (
    <article className='max-w-lg'>
      <h1 className='pl-2 pr-2 mb-4 '>
        Get a <strong>completely random recommendation</strong> among the top rated books!
      </h1>
      <button onClick={handleSubmit}
        className='w-full h-12 text-2xl text-white
         bg-grey-book-rec rounded-lg hover:bg-orange-book-rec cursor-pointer'
      >Random Recommendation</button>
    </article>
  )
}

export default RandomRec