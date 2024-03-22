import axios from 'axios';
import { useState, useEffect } from 'react';


function ApiJobs() {
    // used to keep track of jobs
    const [jobs, setJobs] = useState([])

    // Getting the API request from the server request.
    useEffect(() => {
        axios.get('/api/jobs').then(res => {
            setJobs(res.data)
        }).catch(err => {
            console.log('error with API request.')
            console.error(err)
        })
    }, []);

    return (
        <div className="row" id="jobCard">
            {/* sift out any duplicating id's and map over the jobs array and create a card for each one. */}
            {jobs.filter(job => job.id).map(job => (
                <div className="col-sm-4 my-2 my-sm-1" id={job.id}>
                    <div className="card h-100 d-flex flex-column">
                        <div className="card-body">
                            <h5 className="card-title">{job.position}</h5>
                            <p className="card-text">{job.company} - {job.location}</p>
                            <div className="justify-content-center mt-auto">
                                <a href={job.url} className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ApiJobs;

