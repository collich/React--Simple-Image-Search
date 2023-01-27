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
                <input placeholder="What are you searching for?"
                onChange={handleSearch}
                value={item}></input>
                <div>{item}</div>
            </form>
        </div>
    )
}

export default SearchBar
