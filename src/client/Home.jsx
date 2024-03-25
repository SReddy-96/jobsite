import React, { useState } from 'react';
import getJobData from './helpers.jsx';
import ApiJobs from './apijobs.jsx';
import './styles/home.css';

function Home() {
    const [jobs, setJobs] = useState([]);
    const [searchKeywords, setSearchKeywords] = useState('');
    const [location, setLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track API request error

    const handleSearchSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        if (!location) {
            throw new Error('please enter location!');
        }
        if (!searchKeywords) {
            throw new Error('please enter a search item!');
        }

        try {
            setIsLoading(true);
            setError(null); // Clear any previous errors
            const fetchedJobs = await getJobData(searchKeywords, location); // Update state of another component (e.g., ApiJobs) with fetchedJobs
            setJobs(fetchedJobs);    // change the state of jobs

        } catch (error) {
            console.error('Error fetching jobs:', error); // Display an error message to the user
            setError(error); // Store error for handling
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div id="home">
                <h1 className="mb-5">Welcome to Job Site!</h1>
                <h3 className="mt-5 mb-3">You're one search away from your dream job</h3>
                <form onSubmit={handleSearchSubmit} className="mb-3">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="search">Search: </span>
                        <input
                            id="searchInput"
                            type="text"
                            className="form-control shadow"
                            aria-label="search input"
                            autocomplete="off"
                            required
                            value={searchKeywords}
                            onChange={(e) => setSearchKeywords(e.target.value)}
                        />
                        <span className="input-group-text ms-2" id="location">Location:  </span>
                        <input
                            id="locationInput"
                            type="text"
                            className="form-control shadow"
                            aria-label="location input"
                            autocomplete="off"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <button type="submit" aria-label="submit button" disabled={isLoading} className="btn btn-primary">
                        {isLoading ? 'Loading...' : 'Search Jobs'}
                    </button>
                </form>
            </div>
            <ApiJobs jobs={jobs} islLoading={isLoading} error={error} />
        </>
    );
}

export default Home;
