import { useContext, useEffect } from "react";
import BookContext from "../../../../contexts/BookContext";

const RecByGenre = () => {
  const { selectedGenres, setSelectedGenres, handleGenreSubmission } = useContext(BookContext);

  // Genres to render in the form
  const genresOnForm = ['Romance', 'Science Fiction', 'Mystery', 'History', 'Thriller', 'Fantasy', 'Young Adult', 'Dystopia', 'Horror', 'Adventure', 'Biography', 'Classics'];

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    if (selectedGenres.includes(name)) {
      setSelectedGenres(selectedGenres.filter(genre => genre !== name));
      // console.log("Selected genres: ", selectedGenres);
    } else {
      setSelectedGenres([...selectedGenres, name]);
      // console.log("Selected genres: ", selectedGenres);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleGenreSubmission(selectedGenres);
  }

  return (
    <article className='w-11/12'>
      {/* NOTE: Checkboxes might be limited up to a count */}
      <h1 className='mb-2'>Choose <strong>your favorite genres</strong> and let us find you a great book!</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className='p-2 pt-4 pb-4 border-solid border-2 border-black'>
          <legend className='text-2xl text-green-book-rec font-bold'>Genres</legend>

          <div className='flex flex-row flex-wrap justify-end'>
            {genresOnForm.map(genre => (
              <div key={genre} className='genre-object w-42'>
                <input
                  className='genre-checkbox'
                  type="checkbox"
                  id={genre}
                  name={genre}
                  checked={selectedGenres.includes(genre)}
                  onChange={handleCheckboxChange}
                />
                <label className='genre-label' htmlFor={genre}>{genre}</label>
              </div>
            ))}
          </div>

          <div className='flex flex-row justify-center mt-4'>
            <input id="genre-submit" type="submit" value="Submit" hidden />
            <label htmlFor="genre-submit"
              className='flex flex-wrap  justify-center content-center w-10/12 h-10 text-2xl
             text-white bg-grey-book-rec rounded-lg hover:bg-orange-book-rec cursor-pointer'
            >Submit</label>
          </div>
        </fieldset>
      </form>
    </article>
  )
}

export default RecByGenre;