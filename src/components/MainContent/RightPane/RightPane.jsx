import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookContext from '../../../contexts/BookContext';
import BookCard from './BookCard/BookCard'
import BookDetails from './BookDetails/BookDetails';

const RightPane = () => {
  const [showSearchResults, setShowSearchResults] = useState(true);
  const { books } = useContext(BookContext);
  const { id } = useParams(); // Get the bookId from the URL

  const toggleBookSelection = () => {
    setShowSearchResults(!showSearchResults);
  }

  const selectedBook = books.find(book => book.bookId === id);
  console.log("Selected book: ", selectedBook);

  return (
    <section className='mt-4'>
      <div>
        {
          selectedBook && !showSearchResults ? ( // If a book is selected, render BookDetails
            <div>
              <BookDetails book={selectedBook} onClose={toggleBookSelection} />
            </div>
          ) : ( // Else render the list of books as BookCards
            <div className='flex flex-wrap'>
              {books?.length > 0 ? (
                books.map((book) => (
                  <BookCard key={book.bookId} book={book} onThumbnailClick={toggleBookSelection} />
                ))
              ) : (
                <div>
                  <h2>No books found</h2>
                </div>
              )}
            </div>
          )
        }
      </div>
    </section>
  );
}

export default RightPane;