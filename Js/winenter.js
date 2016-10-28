/*вход*/
$(document).ready(function () {
 $('.show_enter').click(function () {
  var popenter_id = $('#' + $(this).attr("rel"));
  $(popenter_id).show("fast");
  $('.overlay_popup').show();

 })

 $('.overlay_popup').click(function () {
  $('.overlay_popup').hide();
  $('.popenter').hide("fast");
 })
})
