import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Main.css";
import axios from "axios";
import bgmix from "../Images/bg-mixcolor.png";
import rectangle from "../Images/Rectangle 34624146.png";
import searchIcon from "../Images/Search.png";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL; // Get API URL from .env


 

  async function fetchRecentSearches() {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      const response = await axios.get(`${API_URL}/search/client-logs/?recent=true`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (response.data.results) {
        setRecentSearches(response.data.results.map((item) => item.search_name));
      }
    } catch (error) {
      console.error("Error fetching recent searches:", error);
    }
  }

  useEffect(() => {
    fetchRecentSearches();
  },);


  async function handleSearch() {
    if (!searchTerm.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setError(""); // Clear previous errors

    try {
      const token = localStorage.getItem("access_token"); // Retrieve token
      if (!token) {
        setError("You are not authorized. Please log in first.");
        return;
      }

      const response = await axios.post(
        `${API_URL}/search/`, // Use API URL from .env
        {
          skip: 0,
          pageSize: 20,
          searchName: searchTerm,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add Authorization token
          },
        }
      );

      console.log("API Response:", response.data);

      // Check if there are cases in the response
      if (response.data.lstCases && response.data.lstCases.length > 0) {
        navigate("/dashboard", { 
          state: { 
            searchData: response.data, 
            searchName: searchTerm // Adding searchName
          } 
        }); // Pass search data to Dashboard
      } else {
        setError(`No results found for "${searchTerm}".`);
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("An error occurred while searching. Please try again.");
    }
  }

  return (
    <div className="main-container">
      <img src={bgmix} alt="Background" className="bgmix" />
      <div className="overlay-content">
        <h1 className="hero-text">
          Criminal records at your <br /> fingertips fast and reliable
        </h1>

        <div className="search-container">
          <div className="search-box">
            <img src={searchIcon} alt="Search" className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by case, name, or number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select className="search-dropdown">
              <option>Individual</option>
              <option>Company</option>
            </select>
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>

      {/* Recent Search Section */}
      <div className="main-down">
        <img src={rectangle} alt="horizontal-line" className="line" />
        <h2 className="recent">Recent Search</h2>
        <img src={rectangle} alt="horizontal-line" className="line" />
      </div>

      {/* Recent Search Names */}
      <div className="recent-searches">
        {recentSearches.length > 0 ? (
          recentSearches.map((name, index) => (
            <span key={index} className="search-tag">
              {name}
            </span>
          ))
        ) : (
          <p>No recent searches available.</p>
        )}
      </div>
    </div>
  );
};

export default Main;
