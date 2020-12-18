var API_URL = 'https://358wt7ug67.execute-api.us-east-1.amazonaws.com/cors1/authors/';


$(function (ss){
  var $pengajars = $('#pengajars');

  $.ajax({
    type:  'GET',
    url: API_URL,
    success: function(pengajars) {
      $.each(pengajars, function(i, authors) {
        $pengajars.append('<li>Name: '+ authors.lastName +', '+ authors.firstName +'</li>');
      });
    },
    error: function(){
      alert('error fetching');
    }
  });


  $('#add-pengajar').on('click', function(){

    var order = {
      first: $first.val(),
      last: $last.val(),
    };
    $.ajax({
        type: 'POST',
        url: API_URL,
        dataType: 'json',
        data : order,
        success: function(newP) {
          $pengajars.append('<li>Name: '+ authors.lastName +', '+ authors.firstName +'</li>');
        },

    });



});
