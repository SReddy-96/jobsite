import { React, useState, useEffect } from 'react';
import './styles/apiJobs.css';


function ApiJobs({ jobs, isLoading, error }) {

    return (
        <div className="row">
            {isLoading ? (
                <p id="loadingAndErrorApi" >Loading jobs...</p>
            ) : error ? (
                <p id="loadingAndErrorApi" >Error fetching jobs: {error.message}
                    {console.error('Error fetching jobs:', error)}
                </p>
            ) : Array.isArray(jobs) && jobs.length > 0 ? (
                jobs[1] ? ( // Check if the second element exists (the actual job data)
                jobs.slice(1).map((job) => ( // This is to get rid of the T&Cs from the third party API
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
                    <p id="loadingAndErrorApi">No jobs available.</p>
                )
            }
        </div>
    );
}

export default ApiJobs;

