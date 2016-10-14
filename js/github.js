var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getUser = function(user, displayFunction) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayFunction();
    }).fail(function(error){
      console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
