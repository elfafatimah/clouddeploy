var API_URL = 'https://zhaki5ndu4.execute-api.us-east-1.amazonaws.com/proakhirdeploy/datamhs';


$(function (){
  var $table_data = $('#table_data');
  var $nim = $('#nim');
  var $nama = $('#nama');

  $.ajax({
    type:  'GET',
    url: API_URL,
    dataType: 'json',
    success: function(table_data) {
      var event_data='';
      $.each(table_data, function(i, datamhs) {
                 event_data += '<tr>';
                 event_data += '<td>'+datamhs.nim+'</td>';
                 event_data += '<td>'+datamhs.nama+'</td>';
                 event_data += '</tr>';
      });
      $("#datamahasiswa").append(event_data);
    },
    error: function(){
      alert('error fetching');
    }
  });
});




