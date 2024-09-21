import { useContext, useState } from 'react';
import BookContext from "../../../contexts/BookContext"

const SearchBar = () => {
  const { handleSearch } = useContext(BookContext);
  const [searchInput, setSearchInput] = useState('');
  
  const handleEnterKeystroke = (event) => {
    event.preventDefault()
    if (event.key === "Enter") {
      console.log("Enter pressed!");
      handleSearch(searchInput)
    }
  }

  const handleInputChange = (event) => {
    event.preventDefault()
    setSearchInput(event.target.value)
  }

  return (
    <div>
      <input
        className='w-full h-10 text-xl border-solid border-2 rounded-lg border-grey-book-rec p-2'
        type="text" name="searchBar" id="searchBar" placeholder='Search for a book...'
        value={searchInput} onChange={handleInputChange}
        onKeyUp={handleEnterKeystroke}
      />
    </div>
  )
}

export default SearchBar