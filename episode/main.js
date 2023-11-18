fetch('')
   .then(res=> {
    $
    .then(data

        console.log(data);
        
        => { for (let el of data.results) { $('.episodeContainer').append('<div class="episodeItem"> <h3>$(el.name)</h3> <button class="saveBtn" id="${el.id}">add</button> </div>');
        
        $('.saveBtn').click((e) => { let trg = e.target.id;
        
        let watchList = JSON.parse(localStorage.getItem("watchlist')) || [];
        
        function getEpisodeById(id) {
        
   })