import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const BookContext = createContext();

// Create a provider component
export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetchBooks('hunger');
    }, []);

    /**********************************************SEARCH*****************************************************/
    // Used in "search" function
    const fetchBooks = async (searchTerm) => {
        setIsLoading(true);
        try {
            console.log("Search term: ", searchTerm);
            const params = { b: searchTerm };
            const response = await axios.get(`${baseUrl}/search`, { params });
            console.log("Fetched data", response.data);
            setBooks(response.data);
        } catch (error) {
            console.error('Error while searching!: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Function to handle manual search initiation
    const handleSearch = (searchTerm) => {
        fetchBooks(searchTerm);
    };

    /********************************************REC_BY_FILE**************************************************/
    // To pass components; listen to file changes
    const handleSetSelectedFile = (bookListFile) => {
        setSelectedFile(bookListFile);
    }

    // To pass components; listen to file submission
    const handleUploadFile = (bookListFile) => {
        uploadFile(bookListFile);
    }

    const uploadFile = async (file) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(`${baseUrl}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Response - Upload file: ', response.data);
            const recByFile = response.data;
            setBooks(recByFile);
            return response.data;
        } catch (error) {
            console.error('Error uploading file: ', error);
            throw error; // Rethrow the error to handle it in the caller
        } finally {
            setIsLoading(false);
        }
    };

    /********************************************REC_BY_GENRE**************************************************/
    // To pass genres; listen to genre submission
    const handleGenreSubmission = (genres) => {
        postGenres(genres);
    }

    const postGenres = async (genres) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/genre`, {
                genres: genres
            });
            console.log('Response - Rec. by genre: ', response.data);
            const recByGenre = response.data;
            setBooks(recByGenre);
        } catch (error) {
            console.error('Error fetching recommendations by genre: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    /********************************************RANDOM_REC**************************************************/
    // To pass genres; listen to genre submission
    const handleRandomRecSubmission = () => {
        suggestRandomBook();
    }

    const suggestRandomBook = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${baseUrl}/random`);
            console.log('Response - random: ', response.data);
            const randomSuggestions = response.data;
            setBooks(randomSuggestions);
        } catch (error) {
            console.error('Error fetching random recommendations: ', error);
        } finally {
            setIsLoading(false);
        }
    }




    return (
        <BookContext.Provider
            value={{
                books, handleSearch, selectedFile, handleSetSelectedFile, handleUploadFile, isLoading,
                selectedGenres, setSelectedGenres, handleGenreSubmission, handleRandomRecSubmission
            }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContext;
