var Search = require('./../js/github.js').searchModule;

var displayNoResults = function(message) {
  $('#no-results').show();
  $('#no-results').text(message);
};

var displayUserInfo = function(user, repoCount) {
  $('#results').fadeIn();
  $('#user-name').text('User: ' + user);
  $('#repo-count').text('Total Repositories:  ' + repoCount);
};

var displayRepositories = function(repositoryName, repositoryLanguage, repositoryDescription, repositoryCreated) {
  $('#repos').append('<tr><td>' + repositoryName + '</td> <td>' + repositoryLanguage + '</td> <td>' + repositoryDescription + '</td> <td>' + repositoryCreated + '</td></tr>');
};

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var user = $('#user').val();
    var newSearch = new Search();

    $('#no-results').hide();
    newSearch.getUser(user, displayUserInfo, displayRepositories);
  });

  $('#clear-filter').click(function() {
    location.reload();
  });
});
