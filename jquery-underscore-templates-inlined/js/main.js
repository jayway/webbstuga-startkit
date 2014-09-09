$(function(){

  var template = $("#foo-template").text(); 
  var rendered = _.template(template, { name:"Run a mile", completed: false });

  // TODO Disable this comment, save the file and reload the page
  // $(".template-test-container").html(rendered);

});
