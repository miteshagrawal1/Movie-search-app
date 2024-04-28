function displaymoviedetails(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let moviedetails = {};
    for(const [key, value] of urlParams.entries()){
        moviedetails[key] = value;
    }

    let detailscontainer = document.getElementById("detailscontainer");
    detailscontainer.innerHTML = `
    <div class="moviename">
            <h1>${moviedetails.Title}</h1>
        </div>

        <div class="detailscont" >
            <div class="moviedetails">
                <div class="left">
                    <img src="${moviedetails.Poster}" alt="">
                </div>
                <div class="right">
                    <h1>${moviedetails.Title}</h1>
                    <br>
                    <ul>
                        <li>Year: <b>${moviedetails.Year}</b></li>
                        <li>Ratings: <b>${moviedetails.Rated}</b></li>
                        <li>Released: <b>${moviedetails.Released}</b></li>
                        <li>Runtime: <b>${moviedetails.Runtime}</b></li>
                    </ul>
                    <br>
                    <h3>Genre: <b>${moviedetails.Genre}</b></h3><br>
                    <h3>Director: <b>${moviedetails.Director}</b></h3><br>
                    <h3>Artists: <b>${moviedetails.Actors}</b></h3><br>
                    <h3>Plot: <b>${moviedetails.Plot}</b></h3><br>
                    <h3>Awards: <b>${moviedetails.Awards}</b></h3><br>
                </div>
            </div>
    `;
}

displaymoviedetails();