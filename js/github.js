var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getUser(user, displayFunction) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
