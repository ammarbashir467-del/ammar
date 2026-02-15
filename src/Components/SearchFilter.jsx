export function SearchFilter({ search, setSearch, filter, setFilter }) {
    const inputChange = (event) => {
        setSearch(event.target.value)
    }

    const selectChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        // "container" ko badal kar "search-filter-section" kar diya
        <div className="search-filter-section">
            <input 
                type="text" 
                className="search-input" 
                placeholder="Search for a country..." 
                value={search} 
                onChange={inputChange} 
            />
            
            <select className="select-sec" value={filter} onChange={selectChange}>
                <option value="all">all</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}