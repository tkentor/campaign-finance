

$(document).ready(function() {

  $(function() {
      $(".financials").hide();
      $("#flag").hide();
      $(".animals").hide();
      $("#flag-2").hide();
  });

  $(".faces").click(function() {
    $(".financials").show("slow");
  });

  $("#button-1").click(function() {
    $(".animals").hide();
    $("#flag-2").hide();
  });

  $("#button-2").click(function() {
    $("#flag").hide();
    $("#flag-2").hide();
    $(".animals").show("slow");
  });

  $("#button-3").click(function() {
    $("#flag").hide();
    $(".animals").hide();
    $("#flag-2").show("slow");
  });



});
