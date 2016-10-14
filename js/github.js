var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getUser = function(user, displayUserInfo, displayFunction) {
  $.get('https://api.github.com/search/repositories?q=user:'+ user + '&sort=updated&order:desc&per_page=100&access_token=' + apiKey).then(function(response){
    response.items.forEach(function(repository) {
      var dateCreated = moment(repository.created_at).format('MM/DD/YYYY');

      displayFunction(repository.name, repository.language, repository.description, dateCreated);
    });
    
    displayUserInfo(user, response.items.length);

  }).fail(function(error){
    console.log(error.responseJSON.message);

  });
};

exports.searchModule = Search;
