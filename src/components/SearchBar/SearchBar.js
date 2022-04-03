import "./SearchBar.css";

export function SearchBar({ search, setSearchTerm }) {
    const handleChange = (event) => {
        setSearchTerm(event);
    };

  return (
    <div className="search-bar-container">
      <input className="search-bar" value={search} type="text" placeholder="Search for a beer" onChange={(e) => handleChange(e.target.value)}/>
    </div>
  );
}