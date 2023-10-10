import "../assets/main.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Search (): JSX.Element {
  let [ query, setQuery ] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const encodedQuery = encodeURIComponent(query);
    const url = `/search?query=${encodedQuery}`;
    navigate(url);
  };

  return (
    <div className="w-full px-5 py-5 text-dark-text-base">
      <form onSubmit={handleSubmit}>
        <input 
          type="search"
          placeholder="Search..."
          className="px-4 py-2 text-md w-full outline-none bg-dark-background-main border-dark-primary hover:border-b-2 focus:border-b-2 active:border-b-2 transition-all duration-0"
          value={query}
          onChange={e => setQuery(query = e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
