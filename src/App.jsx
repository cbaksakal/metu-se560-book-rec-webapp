import './App.css'
import Header from './components/Header/Header.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetails from './components/MainContent/RightPane/BookDetails/BookDetails.jsx';
import RightPane from './components/MainContent/RightPane/RightPane.jsx';
import { useContext } from 'react';
import BookContext from './contexts/BookContext.jsx';
import Loader from './components/Loaders/Loader.jsx';


function App() {
  const { isLoading } = useContext(BookContext);

  return (
    <>
    {isLoading && <Loader />}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} >
            <Route path="/books/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );

  // return (
  //   <>
  //     {isLoading ? (
  //       <div className='justify-center align-middle'>
  //         <Loader />
  //       </div>
  //     ) : (
  //       <Router>
  //         <Header />
  //         <Routes>
  //           <Route path="/" element={<MainContent />} >
  //             <Route path="/books/:id" element={<BookDetails />} />
  //           </Route>
  //         </Routes>
  //       </Router>
  //     )}
  //   </>
  // );
}

export default App;