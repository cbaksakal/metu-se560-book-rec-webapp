import SearchBar from './SearchBar/SearchBar'

const Header = () => {
    return (
        <header className='flex flex-row items-center'>
            <div className='grow-0'>
                <h1 className='text-4xl text-green-book-rec font-bold'>METU Book Recommendation</h1>
            </div>
            <div className='grow ml-20'>
                <SearchBar />
            </div>
        </header>
    )
}

export default Header