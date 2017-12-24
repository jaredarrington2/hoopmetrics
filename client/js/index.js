$(document).ready(function(){

  var addTeamBtn = '<button type="button" class="btn btn-primary btn-lg btn-block id="addteam" id="addteambtn""><span class="glyphicon glyphicon-plus"></span>Add a team</button>'
  var editTeamBtn = '<button type="button" class="btn btn-secondary btn-lg btn-block" id="editteambtn"><span class="glyphicon glyphicon-pencil"></span>Edit team</button>'
  var addPlayersBtn = '<div class="container"><button type="button" class="btn btn-secondary btn-lg btn-block" id="addplayers"><span class="glyphicon glyphicon-plus"></span>Add Players</button></div>'
  var playerForm

  $('#teams').hide();
  $('#roster').hide();
  $('#rostertable').hide();
  $('#alert').hide();
  $('#partone').append(addTeamBtn);
  $('#parttwo').append(editTeamBtn);

  $('#addteambtn').click(function(){
    $('#teams').show('slow');
    $('#teams').attr('class', 'container').attr('div', 'row');
    // $('#')
    $('#addteambtn').hide();
    $('#addplayers').hide();
    $('#teams').append(addPlayersBtn);
    $('#addplayers').click(function(){
      if($('#conference').val() !== 0 && $('#teamname').val() !== "" && $('#school').val() !== ""){
      console.log('This button works!');
      $('#roster').show();
      $('#rostertable').show();
      $('#addplayers').hide();
      $('#roster').append('<button type="button" class="btn btn-secondary btn-lg" id="newplayer"><span class="glyphicon glyphicon-plus"></span>Add Another Player</button><button type="button" class="btn btn-secondary btn-lg" id="newplayer"><span class="glyphicon glyphicon-plus"></span>Save Team</button>');
      $('#newplayer').click(function(){
        $('#roster').append(playerForm)
      })
    } else {
      $(".alert").fadeIn();
    };
      $('#editteambtn').hide();
      });
    });
  });
