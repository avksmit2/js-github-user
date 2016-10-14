var Search = require('./../js/github.js').searchModule;

var displayRepositories = function(user, repositories) {
    $('#results, .user-name').text('User: ' + user);
    $('#results, #repositories').append('<li>' + repositories + '</li>');
};

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var user = $('#user').val();
    var newSearch = new Search();

    newSearch.getUser(user, displayRepositories);
  });
});
