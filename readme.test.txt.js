$(data.user).each(function(index,row){
	console.log('Row ' + row);
});


aa = $("#users_mv").siblings(".ms-options-wrap").find("ul>")

aa = $("#users_mv").siblings(".ms-options-wrap").find('input[type="checkbox"]')

$(aa).each(function(index, row){
	console.log(row);
});

aa = $("#users_mv").siblings(".ms-options-wrap").find('input[type="checkbox"]')

$(aa).each(function(index, row){
	var  _valt = row.value;
    var  _id = row.id;
    var  _text = $("#"+_id).parent().text();
	//console.log(_valt + ', ' + _id + ', ' + _text);
	console.log('__TEXT : ' + _text);
	$("#"+_id).prop("checked", true);
});



	var currentId = optionsWrap.parent().siblings('select').attr('id');
	if (currentId === 'users_'){
		var _tmpMsgLog = 'Current Id ' +  currentId;
		logOnConsole(_tmpMsgLog);
		var _tmpInstace = instance.listNumber;
		
		//var select = optionsWrap.parent().siblings('.ms-list-'+ _tmpInstace +'.jqmsLoaded');
		
		var selectUser_mv = $("#users_mv").siblings('.ms-list-'+ _tmpInstaceOne +'.jqmsLoaded');
		
		// toggle clicked option
		selectUser_mv.find('option[value="'+ instance._escapeSelector( $(this).val() ) +'"]').prop(
			'selected', $(this).is(':checked')
		).closest('select').trigger('change');

		instance._updateSelectAllText();
		instance._updatePlaceholderText();
	}
	
