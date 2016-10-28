var registrationsValues=[]

$(document).ready(function(){
/*динамическое добавление кусков таблички*/
$("#regSubmit").click(function(){  
var a=$("#name").val();
var b=$("#login").val();
var c=$("#password").val();

var clickFun={
Name:a, Login:b, Password:c
} 
registrationsValues.push(clickFun);

DrawTable();


return false;})

$('#regSubmit_edit').click(function(){
var index=$('#form1edit').attr('data-id');
registrationsValues[index].Name=$('#name_edit').val();
registrationsValues[index].Login=$('#login_edit').val();
registrationsValues[index].Password=$('#password_edit').val();

$('#edit1').hide();

DrawTable();
return false;

})


 $('.overlay_popup').click(function () {
  $('.overlay_popup').hide();
$('#edit1').hide();})


/*очистка формы после отправки*/
$('#regSubmit').click(function(){ //очистка полей
$('#form1reg').trigger("reset");
})

});
function DrawTable(){
	$('#tableReg tbody').html("")

	console.log(registrationsValues.length)

	for(var i=0; i<registrationsValues.length; i++){

		$('#tableReg tbody').append("<tr><td class='nam'>"+registrationsValues[i].Name+"\
	</td><td class='log'>"+registrationsValues[i].Login+"</td><td class='pas'>\
	"+registrationsValues[i].Password+"</td><td><button onclick='editRow("+i+")' id='ed_Row' rel='popTable2'>Edit</button>\
	<button class='delRow' onclick='deleteRow("+i+")'>Del</button></tr></td>");
	}
}

function editRow(indexoff){
	$('#name_edit').val(registrationsValues[indexoff].Name);
	$('#login_edit').val(registrationsValues[indexoff].Login);
	$('#password_edit').val(registrationsValues[indexoff].Password);
console.log()

$('#form1edit').prop('data-id', indexoff).attr('data-id', indexoff);

	$('#edit1').show();

}

/*удаление строки таблицы*/
function deleteRow(indexOf) {
 $("#tableReg tbody tr:eq("+indexOf+")").remove()
 registrationsValues.splice(indexOf,1)
 DrawTable();
};

/*редактирование полей по клику на них*/
/*function editRow(){
	$('td').click(function(e)	{
		var t = e.target || e.srcElement;
		var elm_name = t.tagName.toLowerCase();
		if(elm_name == 'input')	{return false;}
		var val = $(this).html();
		var code = '<input type="text" id="edit" value="'+val+'" />';
		$(this).empty().append(code);
		$('#edit').focus();
		$('#edit').blur(function()	{
			var val = $(this).val();
			$(this).parent().empty().html(val);
		});
	});
};

$(window).keydown(function(event){
	if(event.keyCode == 13) {	
		$('#edit').blur();
	}
})*/