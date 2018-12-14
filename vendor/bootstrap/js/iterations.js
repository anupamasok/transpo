$(document).ready(function() {
  var time = 0;

  $('#btn-Start').on('click', function() {

    setTimeout(function() {
      $("#s1").attr({
        "data-toggle":"tooltip",
        "data-placement":"right",
        "title":"North West Cell",
      });

      $('#c111').tooltip('show');
    }, 500);

    setTimeout(function() {
      $("#c111").removeAttr("data-toggle data-placement title");
      $('#c111').tooltip('hide');

      time += 500;
    }, 1000);

    setTimeout(function() {
      $("#c111, #c112").addClass("popout highlight rounded transitions animated");
    }, 2000);

    setTimeout(function() {
      $("#c111, #c112").addClass("popin transitions animated");
    }, 3000);

    setTimeout(function() {
      $("#c121,#c122,#c131,#c132,#s1,#c211,#c212,#c311,#c312,#d1").addClass("highlight2 rounded transitions animated");
    }, 4000);

    setTimeout(function() {
      $("#c121,#c122,#c131,#c132,#c211,#c212,#c311,#c312").removeClass("highlight2 rounded", {
        duration: 1000
      });
    }, 5000);

    setTimeout(function() {
      $("#s1,#d1").addClass("popout transitions animated");
    }, 6000);

    setTimeout(function() {
      $("#s1").attr({
        "data-toggle":"tooltip",
        "data-placement":"right",
        "title":"Minimum",
      });

      $('#s1').tooltip('show')
    }, 7000);

    setTimeout(function() {
      $("#s1").removeAttr("data-toggle data-placement title");
      $('#s1').tooltip('hide')
    }, 9000);

    setTimeout(function() {
      $("#d1").addClass("popin transitions animated");
    }, 10000);

    setTimeout(function() {
      $("#d1").addClass("popin transitions animated");
      $("#d1").removeClass("highlight2");
    }, 11000);

    setTimeout(function() {
      $("#s1").addClass("popin transitions animated");
    }, 11500);

    setTimeout(function() {
      $("#c111").append("<b>150</b>");
    }, 14000);


    setTimeout(function() {

      var posc111 = $("#c111").position();
      var poss1 = $("#s1").position();

      $('#s1').css({
        position: 'absolute',
        "width": $('#s1').width(),
        // "width": "22%",
        margin:"0",
        top: poss1.top,
        left: poss1.left,
        bottom: poss1.bottom,
      });

      $('#s12').css({
        display: "block",
      });

      $("#s1").animate({
        top: posc111.top,
        left: posc111.left,
        bottom: poss1.bottom,
      }, 1000);

      $("#s1").fadeOut(800);


    }, 12000);

    setTimeout(function() {
      $("#s12,#d1").addClass("highlight2 rounded transitions animated");
    }, 14500);

    var s1,s2;

    setTimeout(function() {
      s1 = Number($("#s12").text());
      s2 = Number($("#d1").text());

      $("#s12,#d1").append("-150");
    }, 16000);

    setTimeout(function() {
      var d1 = Number(s1 - Number($("#s1").text()));
      var d2 = Number(s2- Number($("#s1").text()));
      $("#s12").text(d1);
      $("#d1").text(d2);
    }, 18500);

    setTimeout(function() {
      $("#d1").removeClass("highlight2");
    }, 19500);

    setTimeout(function() {
      $("#s12").attr({
        "data-toggle":"tooltip",
        "data-placement":"right",
        "title":"Supply 0 Hence Nullify Row",
      });
      // $("#s12").attr("data-placement","right");
      // $("#s12").attr("title","Supply 0 Hence Nullify Row");

      $('#s12').tooltip('show');
    }, 19500);

    setTimeout(function() {
      $("#s12").removeAttr("data-toggle data-placement title");
      $('#s12').tooltip('hide');
    }, 21500);

    setTimeout(function() {
      $("#c121,#c122,#c131,#c132").addClass("bg-secondary rounded transitions animated");
      $("#c121,#c122,#c131,#c132").css("color", "#fff");
    }, 22500);

    setTimeout(function() {
      $("#c111,#c112,#s12").removeClass("highlight");
      $("#s12").removeClass("highlight2");
    }, 23500);

  })

});

$('#pause').click(function() {
    // $('#d1').finish();
});

$('#resume').click(function() {
    $('[animpaused=1]').animate({width: '500px'}, 2000);
});

$("#btn-Reset").click(function() {
  document.location.reload(true);
});
