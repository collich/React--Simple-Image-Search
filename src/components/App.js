import SearchBar from "./SearchBar"

const App = () => {
    const handleSubmit = (term) => {
        console.log('Search for', term);
    }

    return (
        <SearchBar onSubmit={handleSubmit}/>
    )
}

export default App
