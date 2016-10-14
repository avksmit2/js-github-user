var apiKey = require('./../.env').apiKey;

function Search() {

}

Search.prototype.getUser = function(user) {
  $.get('https://api.github.com/search/repositories?q=user:'+ user + '&access_token=' + apiKey).then(function(response){
    console.log(response.items[0].name );
    response.items.forEach()
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
