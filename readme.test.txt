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
