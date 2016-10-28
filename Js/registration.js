/*регистрация*/
$(document).ready(function () {


 $('.show_popregistr').click(function () {
  var popupreg_id = $('#' + $(this).attr("rel"));
  $(popupreg_id).show("fast");
  $('.overlay_popup').show();

 })



 $('.overlay_popup').click(function () {
  $('.overlay_popup').hide();
  $('.popregistr').hide("fast");
 })



$('#regSubmit').click(function(){
 $('.overlay_popup').hide();
  $('.popregistr').hide("fast");
})





})
