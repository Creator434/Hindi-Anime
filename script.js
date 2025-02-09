const apiURL = "https://api.consumet.org/anime/gogoanime"; // Hindi Anime API

async function searchAnime() {
    let query = document.getElementById("search-bar").value;
    if (query.length < 3) return;
    
    let response = await fetch(`${apiURL}/${query}`);
    let data = await response.json();
    
    document.getElementById("content").innerHTML = data.results
        .filter(anime => anime.title.includes("Hindi"))
        .map(anime => `
            <div class="card">
                <img src="${anime.image}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <a href="${anime.url}" target="_blank">Watch Now</a>
            </div>
        `).join('');
}
