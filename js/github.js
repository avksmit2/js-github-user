var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getUser = function(user, displayUserInfo, displayRepositories, displayNoResults) {
  $.get('https://api.github.com/search/repositories?q=user:'+ user + '&sort=updated&order:desc&per_page=100&access_token=' + apiKey).then(function(response){
    response.items.forEach(function(repository) {
      var dateCreated = moment(repository.created_at).format('MM/DD/YYYY');

      displayRepositories(repository.name, repository.language, repository.description, dateCreated);
    });

    displayUserInfo(user, response.items.length);

  }).fail(function(error){
    displayNoResults();
  });
};

exports.searchModule = Search;
