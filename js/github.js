var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getUser = function(user, displayFunction) {
  $.get('https://api.github.com/search/repositories?q=user:'+ user + '&access_token=' + apiKey).then(function(response){
    response.items.forEach(function(repository) {
      console.log(repository.name);
      displayFunction(user, repository.name);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
