// Function to display movies
function displaymovies(movies){
    let moviedisplayarea = document.getElementById("moviecont");
    moviedisplayarea.innerHTML = '';

    movies.forEach(movie => {
        let moviecard = document.createElement("div");
        moviecard.setAttribute("class", "moviecard");
        moviecard.innerHTML = `
        <img src="${movie.Poster}" alt="" id="mainimage">
        <h2 id="mainmoviename">${movie.Title}</h2>
        <ul>
            <li id="mainmovieyear">Year: ${movie.Year}</li>
        </ul>
        <p id="mainmovieid">Movie Type: ${movie.Type}</p>
        <button id="detailsbutton" onclick="showdetails('${movie.imdbID}')">View Full</button>`;
        moviedisplayarea.appendChild(moviecard);
    });
}

//function to search movie
async function searchmovies(){
    const searchinput = document.getElementById("movieinput").value;
    let res = await fetch(`https://omdbapi.com/?s=${searchinput}&page=1&apikey=b3fac5c2`);
    let data = await res.json();
    // console.log(data)
    if(data.Search){
        displaymovies(data.Search);
    }
    else{
        alert("Please enter data correctly....")
    }
}

//to fetch movie details with id
async function fetchmoviedetails(movieid){
    const res = await fetch(`https://www.omdbapi.com/?apikey=b3fac5c2&i=${movieid}`);
    const data = await res.json();
    return data;
}

//to show details of specific movie
async function showdetails(movieid){
    const moviedetails = await fetchmoviedetails(movieid);
    let queryParams = new URLSearchParams(moviedetails);
    let queryString = queryParams.toString();
    window.location.href = `detailspage.html?${queryString}`;
}