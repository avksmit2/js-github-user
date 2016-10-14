var Search = require('./../js/github.js').searchModule;

var displayRepositories = function(user, repositoryName, repositoryLanguage, repositoryDescription) {
  $('.user-name').text('User: ' + user);
  $('#results').append('<tr><td>' + repositoryName + '</td> <td>' + repositoryLanguage + '</td> <td>' + repositoryDescription + '</td></tr>');
};

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var user = $('#user').val();
    var newSearch = new Search();

    newSearch.getUser(user, displayRepositories);
  });
});
