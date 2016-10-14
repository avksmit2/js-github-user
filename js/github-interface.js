var Search = require('./../js/github.js').searchModule;

var displayRepositories = function(user, repositoryName, repositoryLanguage, repositoryDescription) {
    $('.user-name').text('User: ' + user);
    $('#repo-name').append('<p>' + repositoryName + '</p>');
    $('#repo-language').append('<p>' + repositoryLanguage + '</p>');
    $('#repo-description').append('<p>' + repositoryDescription + '</p>');
};

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var user = $('#user').val();
    var newSearch = new Search();

    newSearch.getUser(user, displayRepositories);
  });
});
