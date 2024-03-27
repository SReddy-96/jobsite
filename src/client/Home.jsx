import axios from 'axios';
import { React, useState } from 'react';
import ApiJobs from './apijobs.jsx';
import './styles/home.css';

function Home() {
    const [jobs, setJobs] = useState([]); // to store the Get request data
    const [tags, setTags] = useState(''); // to store the users input for (What: )
    const [location, setLocation] = useState(''); // to store the users input for the (Where: )
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track API request error
    const [hasSearched, setHasSearched] = useState(false); // keep track of search

    const handleSearchSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        if (!location) {
            throw new Error('please enter location!');
        }
        if (!tags) {
            throw new Error('please enter a search item!');
        }

        try {
            setHasSearched(true)
            setIsLoading(true);
            setError(null); // Clear any previous errors
            const fetchedJobs = await axios.get(`https://remoteok.com/api?tags=${encodeURIComponent(tags)}&location=${encodeURIComponent(location)}`); // handles any special characters that are inputted by the user.
            const jobData = fetchedJobs.data;
            setJobs(jobData);   // change the state of jobs

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
                    <div className="row g-2 mb-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    id="searchInput"
                                    type="text"
                                    className="form-control shadow"
                                    aria-label="search input"
                                    autoComplete="off"
                                    placeholder="What:"
                                    required
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}  // changes the useState of tags
                                />
                                <label htmlFor="searchInput">What:</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    id="locationInput"
                                    type="text"
                                    className="form-control shadow"
                                    aria-label="location input"
                                    autoComplete="off"
                                    placeholder="Where:"
                                    required
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)} // changes the useState of location.
                                />
                                <label htmlFor="locationInput">Where:</label>
                            </div>
                        </div>
                    </div>
                    {/* button changes when submitted and waiting for the GET request. */}
                    <button type="submit" aria-label="submit button" disabled={isLoading} className="btn btn-primary">
                        {isLoading ? 'Loading...' : 'Search Jobs'}
                    </button>
                </form>
            </div>
            {/* passing the useStates as arguments to apijobs.jsx to then handle the display */}
            <ApiJobs jobs={jobs} isLoading={isLoading} error={error} hasSearched={hasSearched} />
        </>
    );
}

export default Home;
