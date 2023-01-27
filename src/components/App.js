import SearchBar from "./SearchBar"
import searchImages from "../api";

const App = () => {
    const handleSubmit = async (term) => {
        const results = await searchImages(term)
        console.log(results);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    )
}

export default App
