var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getUser = function(user, displayUserInfo, displayRepositories) {
  if (apiKey !== "") {
    var query = '&sort=updated&order:desc&per_page=100&access_token=' + apiKey;
  } else {
    var query = '&sort=updated&order:desc&per_page=100';
  }

  getRepos(user, query, displayRepositories);

  getUserInfo(user, query, displayUserInfo)
};

getRepos = function(user, query, displayRepositories) {
  $.get('https://api.github.com/search/repositories?q=user:'+ user + query).then(function(response){
    response.items.forEach(function(repository) {
      var dateCreated = moment(repository.created_at).format('MM/DD/YYYY');

      displayRepositories(repository.name, repository.language, repository.description, dateCreated);
    });


  }).fail(function(error){
    displayNoResults("This user does not exist! Check your spelling?");
  });
};

getUserInfo = function(user, query, displayUserInfo) {
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);

      displayUserInfo(response.name, response.login, response.public_repos, response.avatar_url);
      if (response.public_repos === 0) {
        displayNoResults("This user has no repositories!");
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
}

exports.searchModule = Search;
