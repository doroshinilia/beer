$(document).ready(function () {

 $('.show_table').click(function () {
  $('.popTable').show("fast");
  $('.overlay_popup').show();

 })

 $('.overlay_popup').click(function () {
  $('.overlay_popup').hide();
  $('.popTable').hide("fast");
 })
})