import { useState } from "react";
import SearchBar from "./SearchBar"
import searchImages from "../api";
import ImageList from "./ImageList";

const App = () => {
    const [image, setImage] = useState([])

    const handleSubmit = async (term) => {
        const results = await searchImages(term)
        setImage(results)
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={image}/>
        </div>
    )
}

export default App
