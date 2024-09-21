import { useContext } from 'react';
import BookContext from '../../../../contexts/BookContext';

const RecByFile = () => {
  const { selectedFile, handleSetSelectedFile, handleUploadFile } = useContext(BookContext);

  // Event handler for file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    handleSetSelectedFile(file); // Set the selected file to state
  };

  // Handle file upload submission
  const handleSubmit = async () => {
    if (selectedFile) {
      try {
        // Call the uploadFile function
        const uploadedBooks = await handleUploadFile(selectedFile);
        console.log('Uploaded books:', uploadedBooks);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <article className='max-w-lg'>
      <h1 className='mb-4 pl-2 pr-2'>
        Upload <strong>your selection of favorite books</strong> and let our
        ML model make its magic to get you the best recommendations!
      </h1>
      {/* <input type="file" id="upload-books" onChange={handleFileChange} hidden/>
      <label htmlFor="upload-books">Upload your favorite book list</label> */}

      <div className='mb-2 ml-2 text-blue-600 underline'>
        <label htmlFor="upload-books" className='cursor-pointer'>
          Upload your favorite book list
          <input type="file" id="upload-books" onChange={handleFileChange} hidden />
        </label>
      </div>

      <div>
        <input type="submit" id="submit-books" onClick={handleSubmit} hidden />
        <label htmlFor="submit-books"
          className='flex flex-wrap justify-center content-center
        h-12 text-2xl text-white bg-grey-book-rec rounded-lg hover:bg-orange-book-rec cursor-pointer'
        >Get me recommended books
        </label>
      </div>

      {/* Display selected file name */}
      {selectedFile && (
        <p>Selected file: {selectedFile.name}</p>
      )}
    </article>
  )
}

export default RecByFile;