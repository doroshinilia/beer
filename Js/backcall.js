/*обратная связь*/
$(document).ready(function () {
 $('.show_popup').click(function () {
  var popup_id = $('#' + $(this).attr("rel"));
  $(popup_id).show("fast");
  $('.overlay_popup').show();

 })

 $('.overlay_popup').click(function () {
  $('.overlay_popup').hide();
  $('.popup').hide("fast");
 })
})
