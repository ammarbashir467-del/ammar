import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchFilter } from "./SearchFilter";

export const Country = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        fn_getAllCountries();
    }, []);

    const fn_getAllCountries = async () => {
        const res = await axios.get(
            "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region"
        );
        setCountries(res.data);
    };
    const searchCountry = (country) => {
        console.log("===========search==========", search);
        if (search) {
            return (country.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        return country;
    }

    const filterRegion = (country) => {
        console.log("==========filter==========", filter);
        if (filter === "all") return country;
        return country.region === filter;
    }
    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

    return (
        <div className="country-container">
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} 
            />
            <div className="country-grid">
                {filterCountries.map((curData, index) => (
                    <div className="country-card" key={index}>
                        <img
                            src={curData.flags.png}
                            alt={curData.name.common}
                            className="flag"
                        />

                        <h3>{curData.name.common}</h3>

                        <p>
                            <span>Population:</span>{" "}
                            {curData.population.toLocaleString()}
                        </p>
                        <p>
                            <span>Region:</span> {curData.region}
                        </p>
                        <p>
                            <span>Capital:</span> {curData.capital?.[0] || "N/A"}
                        </p>


                        <Link to={`/contact/${curData.name.common}`}>
                            <button>Read More →</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
