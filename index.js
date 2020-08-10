function getPublicRepos(){
    $('#js-submit').on('click', function (e){
        e.preventDefault()
        $('#repo-list').html('');
        let handle = $('#js-handle').val();
        $('#js-handle').val('')
        fetch(`https://api.github.com/users/${handle}/repos`)
            .then(response => response.json())
            .then(responseJson => {
                $('#repo-list').append(buildRepoObjects(responseJson));
            })
    });
}

function buildRepoObjects(object){
    for(i = 0; i < object.length; i++){
        let repoObject = object[i];
        console.log(repoObject)
        let repoName = repoObject.name
        repoName.toUpperCase();
        $('#repo-list').append(`
        <li class="repo-object" id="js-repo-object">` + 
        `<h1 class="repo-title">${repoName}</h1>` + 
        `<h2 class="repo-description">${repoObject.description}</h2>` + 
        `<a href="${repoObject.html_url}">Visit Repo</a>` + 
        `</li>`);
    }
}

$(getPublicRepos)