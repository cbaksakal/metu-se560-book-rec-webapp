import PropTypes from 'prop-types';
import NoImage from "../../../../assets/no_image_208x288.svg"

const BookDetails = ({ book, onClose }) => {
  const handleClose = (event) => {
    event.preventDefault();
    onClose();
  };

  const parseGenres = (genresAsString) => {
    const omittedStr = genresAsString.substring(1, genresAsString.length - 1);
    const parsedGenres = omittedStr.split(", ");
    const genresAsArray = parsedGenres.map(genre => genre.substring(1, genre.length - 1));
    return genresAsArray;
  };

  const bookGenresArray = parseGenres(book.genres);

  return (
    <div>
      <div className='raleway-text mb-6'>
        <a className='underline text-blue-600' href="#" onClick={handleClose}>Back to Search Results</a>
      </div>

      <div className='general-container flex flex-col'>
        <div className='top-section flex flex-1 flex-row mb-4'>
          {/* TOP SECTION */}
          {/* IMAGE */}
          <div className="basis-1/4 image mr-4 w-52 h-72">
            {book.coverImg ? ( // Check if coverImg exists
              <img className='w-full h-full' alt={book.title} src={book.coverImg} />
            ) : (
              <img className='w-full h-full' alt={book.title} src={NoImage} />
            )}
            {/* <img className='w-full h-full' src={book.coverImg} alt={book.title} /> */}
          </div>

          {/* DETAILS */}
          <div className="raleway-text basis-3/4 details flex flex-col flex-wrap">
            <h1 className='text-5xl mb-4'>{book.title} </h1>
            <h2 className='text-3xl text-green-book-rec mb-4'>{book.author} </h2>
            <h3 className='text-xl mb-8'>Rating: {book.rating} </h3>
            <h3 className='text-lg text-gray-500 mb-2'>Genres</h3>
            <h4>
              {bookGenresArray.map(genre => (
                <span key={genre}>{genre}&nbsp;|&nbsp;</span>
              ))}
            </h4>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="raleway-text bottom-section">
          <p>{book.description} </p>
        </div>
      </div>
    </div>
  )
}

BookDetails.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string,
    genres: PropTypes.string,
    pages: PropTypes.string,
    publishDate: PropTypes.string,
    coverImg: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func
};

export default BookDetails;