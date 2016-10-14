var Search = require('./../js/github.js').searchModule;

var displayRepositories = function(user, repositoryName) {
    $('.user-name').text('User: ' + user);
    $('#repo-name').append('<li>' + repositoryName + '</li>');
};

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var user = $('#user').val();
    var newSearch = new Search();

    newSearch.getUser(user, displayRepositories);
  });
});
