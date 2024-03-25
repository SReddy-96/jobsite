async function getJobData(searchValue, locationValue) { // Pass search and location as arguments
  try {
    const apiUrl = "https://remoteok.io/api";
    const queryString = new URLSearchParams({
      tags: searchValue,
      location: locationValue,
    });

    const response = await axios.get(`${apiUrl}?${queryString}`); // Use template literal
    return response.data; // No need for intermediate data assignment

  } catch (error) {
    console.error('Error fetching job data:', error);
    throw new Error('Error fetching job data'); // Throw an error for handling
  }
}

export default getJobData;