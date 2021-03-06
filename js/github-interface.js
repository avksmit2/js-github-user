var Search = require('./../js/github.js').searchModule;

var displayNoResults = function(message) {
  $('#no-results').show();
  $('#no-results').text(message);
};

var displayUserInfo = function(userName, userID, githubStart, email, followers, repoCount, avatar) {
  $('#results').fadeIn();
  $('#user-name').text('Name: ' + userName + ', UserID: ' + userID);
  $('#github-start').text('Joined Github on: ' + githubStart);
  $('#email').html('Email: ' + email);
  $('#followers').text('Number of followers: ' + followers);
  $('#repo-count').text('Total Repositories:  ' + repoCount);
  $('#avatar').html('<img src=' + avatar + '>');
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
    newSearch.getUser(user, displayUserInfo, displayRepositories, displayNoResults);
  });

  $('#clear-filter').click(function() {
    location.reload();
  });
});
