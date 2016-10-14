var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getUser = function(user, displayUserInfo, displayRepositories, displayNoResults) {
  if (apiKey !== "") {
    var query = '&access_token=' + apiKey;
  } else {
    var query = '';
  }

  getRepos(user, query, displayRepositories, displayNoResults);

  getUserInfo(user, query, displayUserInfo, displayNoResults)
};

getRepos = function(user, query, displayRepositories, displayNoResults) {
  $.get('https://api.github.com/search/repositories?q=user:'+ user +'&sort=updated&order:desc&per_page=100' + query).then(function(response){
    response.items.forEach(function(repository) {
      var dateCreated = moment(repository.created_at).format('MM/DD/YYYY');

      displayRepositories(repository.name, repository.language, repository.description, dateCreated);
    });
  });
};

getUserInfo = function(user, query, displayUserInfo, displayNoResults) {
  $.get('https://api.github.com/users/' + user + '?' + query ).then(function(response){
    console.log(response);
    var githubStart = moment(response.created_at).format('MM/DD/YYYY');

    displayUserInfo(response.name, response.login, githubStart, response.email, response.followers, response.public_repos, response.avatar_url);
    if (response.public_repos === 0) {
      displayNoResults("This user has no repositories!");
    }
  }).fail(function(error){
    displayNoResults("User does not exist!");
  });
}

exports.searchModule = Search;
