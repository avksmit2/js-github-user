var Search = require('./../js/github.js').searchModule;

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var user = $('#user').val();
    var newSearch = new Search();

    
  });
});
