import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles/apiJobs.css';


function ApiJobs({ jobs, isLoading, error }) {

    const hasJobs = jobs && jobs.length > 0;
    if(!hasJobs){
        throw new Error("No jobs available!")
    }

    return (
        <div className="row">
            {isLoading ? (
                <p id="loadingAndErrorApi" >Loading jobs...</p>
            ) : error ? (
                <p id="loadingAndErrorApi" >Error fetching jobs: {error.message}</p>
            ) : (
                jobs.filter((job) => job.id).map((job) => (
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
            )}
        </div>
    );
}

export default ApiJobs;

