import React from 'react';
import './styles/apiJobs.css';


function ApiJobs({ jobs, isLoading, error, hasSearched }) {

    return (
        <div className="row mb-5">
            {/* // ternary operator for the loading and handling error of fetching the jobs from API. */}
            {isLoading ? (
                <p id="loadingAndErrorApi" >Loading jobs...</p>
            ) : error ? (
                <p id="loadingAndErrorApi" >Error fetching jobs: {error.message}
                    {console.error('Error fetching jobs:', error)}
                </p>

                // checks to see if the data that inside jobs (useState) is an array. Also, checking to see if the length of said array is more than 0
            ) : hasSearched && Array.isArray(jobs) && jobs.length > 0 ? (
                jobs[1] ? ( // Check if the second element exists (the actual job data)
                jobs.slice(1).map((job) => ( // This is to get rid of the T&Cs from the third party API then map over the jobs array.
                    <div className="col-sm-4 my-2 my-sm-1" key={job.id}>
                        <div className="card h-100 d-flex flex-column shadow">
                            <div className="card-body">
                                <h5 className="card-title">{job.position}</h5>
                                <p className="card-text">{job.company} - {job.location}</p>
                                <div className="justify-content-center mt-auto">
                                    <a href={job.url} className="btn btn-primary">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                    ) : (
                        <p id="loadingAndErrorApi">No jobs available.</p>
                    )
                ) : (
                    <p id="loadingAndErrorApi">Try a Search!</p>
                )
            }
        </div>
    );
}

export default ApiJobs;

