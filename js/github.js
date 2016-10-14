var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getUser = function(user, displayUserInfo, displayRepositories) {
  if (apiKey !== "") {
    var query = '&sort=updated&order:desc&per_page=100&access_token=' + apiKey;
  } else {
    var query = '&sort=updated&order:desc&per_page=100';
  }
  
  $.get('https://api.github.com/search/repositories?q=user:'+ user + query).then(function(response){

    response.items.forEach(function(repository) {
      var dateCreated = moment(repository.created_at).format('MM/DD/YYYY');

      displayRepositories(repository.name, repository.language, repository.description, dateCreated);
    });
    displayUserInfo(user, response.items.length, response.items[0].owner.avatar_url);
    if (response.items.length === 0) {
      displayNoResults("This user has no repositories!");
    }

  }).fail(function(error){
    displayNoResults("This user does not exist! Check your spelling?");
  });
};

exports.searchModule = Search;
