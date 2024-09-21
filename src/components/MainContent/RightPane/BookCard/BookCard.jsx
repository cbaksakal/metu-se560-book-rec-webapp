import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoImage from "../../../../assets/no_image_176x240.svg"

const BookCard = ({ book, onThumbnailClick }) => {
  // Function to truncate the title if it exceeds a certain character count
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };

  return (
    <div key={book.bookId} className='mr-4 mb-4'>
      {/* BOOKCARD */}
      <div className='border-4 rounded border-solid border-orange-book-rec block text-center hover:opacity-60'>
        <Link to={`/books/${book.bookId}`} onClick={onThumbnailClick} className='w-44 h-60'>
          {book.coverImg ? ( // Check if coverImg exists
            <img className='w-44 h-60' alt={book.title} src={book.coverImg} />
          ) : (
            <img className='w-44 h-60' alt={book.title} src={NoImage}/>
          )}
        </Link>
        <Link to={`/books/${book.bookId}`} onClick={onThumbnailClick} className='flex border-t-4 border-solid border-orange-book-rec w-44 h-16 bg-green-book-rec items-center p-1'>
          <p className='grow raleway-bookCard  text-white text-sm'>
            {truncateTitle(book.title, 37)}
          </p>
        </Link>
      </div>
      {/* BOOKCARD */}
    </div>
  );
}

BookCard.propTypes = {
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
};

export default BookCard;
