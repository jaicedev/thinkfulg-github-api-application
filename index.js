function getPublicRepos(){
    $('#js-submit').on('click', function (e){
        e.preventDefault()
        let handle = $('#js-handle').val();
        let repoList = fetch(`api.github.com/users/${handle}/repos`).then(response => response.json())
        console.log(repoList)
    });
}


$(getPublicRepos)