    var data =[];
    $(function () {
            $('select[multiple]').multiselect({
            columns  : 1,
           search: true,
                searchOptions: {
                        'default': 'Search ',
                                },
            selectAllITV: true,
            applyQuery: true,
            resetITVQuery: true,//Added for reset
            texts    : {
                placeholder: 'Select States',
                search     : 'Search States'
            }
        });
    });


function getOnClickReset() {
    $('.ms-reset').off('click');
    $('.ms-reset').on('click', function (event) {
        event.preventDefault();
        //$(this).siblings('select[multiple]').multiselect( 'reset' );

        $(this).siblings('ul').find('li:not(.optgroup, .ms-hidden).selected').removeClass('selected');
        $(this).siblings('ul').find('li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop('checked', false);

        var placeholder = $(this).parents().siblings('div');
        var placeholderTxt = placeholder.find('span');
        placeholderTxt.text("");
    });
}

function getOnClickSave(currentId) {
    //alert("hiio");
    $('.ms-applyQuery').off('click');
    $('.ms-applyQuery').on('click', function (event) {
        event.preventDefault();
        vals = [];
        $(this).siblings('ul').find('li.selected input[type="checkbox"]').each(function () {
            vals.push($(this).val());
            //vals.push($(this).text());
        });
        //var currentId = $(this).parents().siblings('select').attr('id');
        if (currentId == 'users') {
            data.user = vals;
            //getData(currentId);
            } else if (currentId == 'state') {
            data.state = vals;
        
            } else if (currentId == 'user_mv') {
            data.user_mv = vals;
            }
        alert(' vals : ' + ' selected for : ' + currentId + ' : ' + vals);

    });
  //  return true;
}

function addnewuser(){
    alert(data.user);
}



function getfoodtypeData(data) {
    $('#foodtype').html('vegee');
}
function getData(currentId) {
    $.ajax({
        url: "data.php",
        type: 'GET',
        data: {'action': currentId},
        success: function (data) {
            console.log(data);
            setNewFood(data);
            //getfoodtypeData(currentId);
        },
        error: function (e) {
            //called when there is an error
            console.log(e.message);
        }
    });




}
 
function getState() {
    $.ajax({
        url: "data.php",
        type: 'GET',
        // data: {'state':state},
        data: state,
        dataType: 'html',
        success: function (data) {

        },
        error: function (e) {
            //called when there is an error
            console.log(e.message);
        }
    });
}

function callSaveNow(){
	alert('In callSaveNow : ' );
}

function callResetQuery(currentId){	
	alert('In reset : ' + currentId);	
}
