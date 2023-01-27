import { useState } from "react"

const SearchBar = ({onSubmit}) => {
    const [item, setItem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(item)
    }

    const handleSearch = (e) => {
        setItem(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Search Term: {item}</h3>
                <input placeholder="What are you searching for?"
                onChange={handleSearch}
                value={item}></input>
            </form>
        </div>
    )
}

export default SearchBar
