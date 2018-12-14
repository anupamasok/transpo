$(document).ready(function() {
  var time = 500;

  $('#btn-Start').on('click', function() {

    setTimeout(function() {
      $("#c111").attr({
        "data-toggle":"tooltip",
        "data-placement":"right",
        "title":"North West Cell",
      });

      $('#c111').tooltip('show');
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#c111").removeAttr("data-toggle data-placement title");
      $('#c111').tooltip('hide');
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#c111, #c112").addClass("popout highlight rounded transitions animated");
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#c111, #c112").addClass("popin transitions animated");
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#c121,#c122,#c131,#c132,#s1,#c211,#c212,#c311,#c312,#d1").addClass("highlight2 rounded transitions animated");
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#c121,#c122,#c131,#c132,#c211,#c212,#c311,#c312").removeClass("highlight2 rounded", {
        duration: 1000
      });
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#s1,#d1").addClass("popout transitions animated");
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#s1").attr({
        "data-toggle":"tooltip",
        "data-placement":"right",
        "title":"Minimum",
      });

      $('#s1').tooltip('show')
    }, time);

    time=time+2000;
    setTimeout(function() {
      $("#s1").removeAttr("data-toggle data-placement title");
      $('#s1').tooltip('hide')
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#d1").removeClass("popout");
      $("#d1").addClass("popin transitions animated");
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#d1").removeClass("popout");
      $("#d1").addClass("popin transitions animated");
      $("#d1").removeClass("highlight2");
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#s1").removeClass("popout");
      $("#s1").addClass("popin transitions animated");
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#c111").append("<b>150</b>");
    }, time);


    time=time+1000;
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


    }, time - 2500);

    time=time+1000;
    setTimeout(function() {
      $("#s12,#d1").addClass("highlight2 rounded transitions animated");
    }, time);

    var s1,s2;

    time=time+1000;
    setTimeout(function() {
      s1 = Number($("#s12").text());
      s2 = Number($("#d1").text());

      $("#s12,#d1").append("-150");
    }, time);

    time=time+1500;
    setTimeout(function() {
      var d1 = Number(s1 - Number($("#s1").text()));
      var d2 = Number(s2- Number($("#s1").text()));
      $("#s12").text(d1);
      $("#d1").text(d2);
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#d1").removeClass("highlight2");
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#s12").attr({
        "data-toggle":"tooltip",
        "data-placement":"right",
        "title":"Supply 0 Hence Nullify Row",
      });
      // $("#s12").attr("data-placement","right");
      // $("#s12").attr("title","Supply 0 Hence Nullify Row");

      $('#s12').tooltip('show');
    }, time);

    time=time+2000;
    setTimeout(function() {
      $("#s12").removeAttr("data-toggle data-placement title");
      $('#s12').tooltip('hide');
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#c121,#c122,#c131,#c132").addClass("bg-secondary rounded transitions animated");
      $("#c121,#c122,#c131,#c132").css("color", "#fff");
    }, time);

    time=time+1000;
    setTimeout(function() {
      $("#c111,#c112,#s12").removeClass("highlight");
      $("#s12").removeClass("highlight2");
    }, time);




  // //  NEW ITERATION ############################################################################################
  //
      time=time+2500;

      setTimeout(function() {
        $("#c211").attr({
          "data-toggle":"tooltip",
          "data-placement":"right",
          "title":"North West Cell",
        });

        $('#c211').tooltip('show');
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#c211").removeAttr("data-toggle data-placement title");
        $('#c211').tooltip('hide');
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#c211, #c212").addClass("popout highlight rounded transitions animated");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#c211, #c212").removeClass("popout");
        $("#c211, #c212").addClass("popin transitions animated");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#c221,#c222,#c231,#c232,#s2,#c311,#c312,#d1").addClass("highlight2 rounded transitions animated");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#c221,#c222,#c231,#c232,#c311,#c312").removeClass("highlight2 rounded", {
          duration: 1000
        });

          $("#s2,#d1").removeClass("popout");
          $("#s2,#d1").removeClass("popin");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#s2,#d1").addClass("popout transitions animated");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#d1").attr({
          "data-toggle":"tooltip",
          "data-placement":"right",
          "title":"Minimum",
        });

        $('#d1').tooltip('show')
      }, time);

      time=time+2000;
      setTimeout(function() {
        $("#d1").removeAttr("data-toggle data-placement title");
        $('#d1').tooltip('hide')
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#s2").removeClass("popout");
        $("#s2").addClass("popin transitions animated");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#s2").removeClass("popout");
        $("#s2").addClass("popin transitions animated");
        $("#s2").removeClass("highlight2");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#d1").removeClass("popout");
        $("#d1").addClass("popin transitions animated");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#c211").append("<b>50</b>");
      }, time);


      time=time+1000;
      setTimeout(function() {

        var posc111 = $("#c211").position();
        var poss1 = $("#d1").position();

        $('#d1').css({
          position: 'absolute',
          "width": $('#d1').width(),
          // "width": "22%",
          margin:"0",
          top: poss1.top,
          left: poss1.left,
          right: poss1.right,
          bottom: poss1.bottom,
        });

        $("#d1").animate({
          "width": $('#d1').width(),
          top: posc111.top,
          left: posc111.left,
          right: posc111.right,
          bottom: posc111.bottom,
          "z-index":"1",
        }, 1000);

        $("#d1").fadeOut(800);
        $("#d12").fadeIn(800);

        $('#d12').css({
          // "width": $('#A').width(),
          // "display": "block",
        });

        $('#d12').removeAttr("style");


      }, time - 2500);

      time=time+1000;
      setTimeout(function() {
        $("#s2,#d12").addClass("highlight2 rounded transitions animated");
      }, time);

      time=time+1000;
      setTimeout(function() {
        s1 = Number($("#s2").text());
        s2 = Number($("#d12").text());
        sub = Number($("#d1").text());

        $("#s2,#d12").append("-50");
      }, time);

      time=time+1500;
      setTimeout(function() {
        var d1 = Number(s1 - sub);
        var d2 = Number(s2- sub);
        $("#s2").text(d1);
        $("#d12").text(d2);
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#s2").removeClass("highlight2");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#d12").attr({
          "data-toggle":"tooltip",
          "data-placement":"right",
          "title":"Demand 0 Hence Nullify Column",
        });
        // $("#s12").attr("data-placement","right");
        // $("#s12").attr("title","Supply 0 Hence Nullify Row");

        $('#d12').tooltip('show');
      }, time);

      time=time+2000;
      setTimeout(function() {
        $("#d12").removeAttr("data-toggle data-placement title");
        $('#d12').tooltip('hide');
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#c311,#c312").addClass("bg-secondary rounded transitions animated");
        $("#c311,#c312").css("color", "#fff");
      }, time);

      time=time+1000;
      setTimeout(function() {
        $("#c211,#c212,#d12").removeClass("highlight");
        $("#d12").removeClass("highlight2");
      }, time);

    // });

    //  NEW ITERATION ############################################################################################

        time=time+2500;

        setTimeout(function() {
          $("#c221").attr({
            "data-toggle":"tooltip",
            "data-placement":"right",
            "title":"North West Cell",
          });

          $('#c221').tooltip('show');
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c221").removeAttr("data-toggle data-placement title");
          $('#c221').tooltip('hide');
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c221, #c222").addClass("popout highlight rounded transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c221, #c222").removeClass("popout popin");
          $("#c221, #c222").addClass("popin transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c231,#c232,#s2,#c321,#c322,#d2").addClass("highlight2 rounded transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c231,#c232,#c321,#c322").removeClass("highlight2 rounded", {
            duration: 1000
          });

            $("#s2,#d2").removeClass("popout");
            $("#s2,#d2").removeClass("popin");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s2,#d2").addClass("popout transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#d2").attr({
            "data-toggle":"tooltip",
            "data-placement":"right",
            "title":"Minimum",
          });

          $('#d2').tooltip('show')
        }, time);

        time=time+2000;
        setTimeout(function() {
          $("#d2").removeAttr("data-toggle data-placement title");
          $('#d2').tooltip('hide')
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s2").removeClass("popout");
          $("#s2").addClass("popin transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s2").removeClass("popout");
          $("#s2").addClass("popin transitions animated");
          $("#s2").removeClass("highlight2");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#d2").removeClass("popout popin");
          $("#d2").addClass("popin transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c221").append("<b>100</b>");
        }, time);


        time=time+1000;
        setTimeout(function() {

          var posc111 = $("#c221").position();
          var poss1 = $("#d2").position();

          $('#d2').css({
            position: 'absolute',
            "width": $('#d2').width(),
            // "width": "22%",
            margin:"0",
            top: poss1.top,
            left: poss1.left,
            right: poss1.right,
            bottom: poss1.bottom,
          });

          $("#d2").animate({
            "width": $('#d2').width(),
            top: posc111.top,
            left: posc111.left,
            right: posc111.right,
            bottom: posc111.bottom,
            "z-index":"1",
          }, 1000);

          $("#d2").fadeOut(800);
          $("#d22").fadeIn(800);

          $('#d22').css({
            // "width": $('#A').width(),
            // "display": "block",
          });

          $('#d22').removeAttr("style");


        }, time - 2500);

        time=time+1000;
        setTimeout(function() {
          $("#s2,#d22").addClass("highlight2 rounded transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          s1 = Number($("#s2").text());
          s2 = Number($("#d22").text());
          sub = Number($("#d2").text());

          $("#s2,#d22").append("-100");
        }, time);

        time=time+1500;
        setTimeout(function() {
          var d1 = Number(s1 - sub);
          var d2 = Number(s2- sub);
          $("#s2").text(d1);
          $("#d22").text(d2);
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s2").removeClass("highlight2");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#d22").attr({
            "data-toggle":"tooltip",
            "data-placement":"right",
            "title":"Demand 0 Hence Nullify Column",
          });
          // $("#s12").attr("data-placement","right");
          // $("#s12").attr("title","Supply 0 Hence Nullify Row");

          $('#d22').tooltip('show');
        }, time);
        //
        time=time+2000;
        setTimeout(function() {
          $("#d22").removeAttr("data-toggle data-placement title");
          $('#d22').tooltip('hide');
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c321,#c322").addClass("bg-secondary rounded transitions animated");
          $("#c321,#c322").css("color", "#fff");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c221,#c222,#d22").removeClass("highlight");
          $("#d22").removeClass("highlight2");
        }, time);

        // NEW ITERATION ###################################################################################

        setTimeout(function() {
          $("#c231").attr({
            "data-toggle":"tooltip",
            "data-placement":"right",
            "title":"North West Cell",
          });

          $('#c231').tooltip('show');
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c231").removeAttr("data-toggle data-placement title");
          $('#c231').tooltip('hide');
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c231, #c232").addClass("popout highlight rounded transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c231, #c232").addClass("popin transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s2,#c331,#c332,#d3").addClass("highlight2 rounded transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c331,#c332").removeClass("highlight2 rounded", {
            duration: 1000
          });
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s2,#d3").removeClass("popout popin");
          $("#s2,#d3").addClass("popout transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s2").attr({
            "data-toggle":"tooltip",
            "data-placement":"right",
            "title":"Minimum",
          });

          $('#s2').tooltip('show')
        }, time);

        time=time+2000;
        setTimeout(function() {
          $("#s2").removeAttr("data-toggle data-placement title");
          $('#s2').tooltip('hide')
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#d3").removeClass("popout popin");
          $("#d3").addClass("popin transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#d3").removeClass("popout popin");
          $("#d3").addClass("popin transitions animated");
          $("#d3").removeClass("highlight2");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s2").removeClass("popout popin");
          $("#s2").addClass("popin transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c231").append("<b>25</b>");
        }, time);


        time=time+1000;
        setTimeout(function() {

          var posc111 = $("#c231").position();
          var poss1 = $("#s2").position();

          $('#s2').css({
            position: 'absolute',
            "width": $('#s2').width(),
            // "width": "22%",
            margin:"0",
            top: poss1.top,
            left: poss1.left,
            bottom: poss1.bottom,
          });

          $('#s22').css({
            display: "block",
          });

          $("#s2").animate({
            top: posc111.top,
            left: posc111.left,
            bottom: poss1.bottom,
          }, 1000);

          $("#s2").fadeOut(800);


        }, time - 2500);

        time=time+1000;
        setTimeout(function() {
          $("#s22,#d3").addClass("highlight2 rounded transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          s1 = Number($("#s22").text());
          s2 = Number($("#d3").text());
          sub = Number($("#s22").text());

          $("#s22,#d3").append("-25");
        }, time);

        time=time+1500;
        setTimeout(function() {
          var d1 = Number(s1 - sub);
          var d2 = Number(s2- sub);
          $("#s22").text(d1);
          $("#d3").text(d2);
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#d3").removeClass("highlight2");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s22").attr({
            "data-toggle":"tooltip",
            "data-placement":"right",
            "title":"Supply 0 Hence Nullify Row",
          });
          // $("#s12").attr("data-placement","right");
          // $("#s12").attr("title","Supply 0 Hence Nullify Row");

          $('#s22').tooltip('show');
        }, time);

        time=time+2000;
        setTimeout(function() {
          $("#s22").removeAttr("data-toggle data-placement title");
          $('#s22').tooltip('hide');
        }, time);

        // time=time+1000;
        // setTimeout(function() {
        //   $("#c121,#c122,#c131,#c132").addClass("bg-secondary rounded transitions animated");
        //   $("#c121,#c122,#c131,#c132").css("color", "#fff");
        // }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c231,#c232,#s22").removeClass("highlight");
          $("#s22").removeClass("highlight2");
        }, time);



        //  NEW INTERATION  #############################################################################################

        time=time+2500;

        setTimeout(function() {
          $("#c331").attr({
            "data-toggle":"tooltip",
            "data-placement":"right",
            "title":"North West Cell",
          });

          $('#c331').tooltip('show');
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c331").removeAttr("data-toggle data-placement title");
          $('#c331').tooltip('hide');
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c331, #c332").addClass("popout highlight rounded transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c331, #c332").removeClass("popout popin");
          $("#c331, #c332").addClass("popin transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s3,#d3").addClass("highlight2 rounded transitions animated");
        }, time);

        // time=time+1000;
        setTimeout(function() {
          // $("#c231,#c232,#c321,#c322").removeClass("highlight2 rounded", {
          //   duration: 1000
          // });

            $("#s3,#d3").removeClass("popout");
            $("#s3,#d3").removeClass("popin");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s3,#d3").addClass("popout transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s3").attr({
            "data-toggle":"tooltip",
            "data-placement":"right",
            "title":"Minimum",
          });

          $('#s3').tooltip('show')
        }, time);

        time=time+2000;
        setTimeout(function() {
          $("#s3").removeAttr("data-toggle data-placement title");
          $('#s3').tooltip('hide')
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#d3").removeClass("popout");
          $("#d3").addClass("popin transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#d3").removeClass("popout");
          $("#d3").addClass("popin transitions animated");
          $("#d3").removeClass("highlight2");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s3").removeClass("popout popin");
          $("#s3").addClass("popin transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c331").append("<b>275</b>");
        }, time);


        time=time+1000;
        setTimeout(function() {

          var posc111 = $("#c331").position();
          var poss1 = $("#s3").position();

          $('#s3').css({
            position: 'absolute',
            "width": $('#s3').width(),
            // "width": "22%",
            margin:"0",
            top: poss1.top,
            left: poss1.left,
            bottom: poss1.bottom,
          });

          $('#s32').css({
            display: "block",
          });

          $("#s3").animate({
            top: posc111.top,
            left: posc111.left,
            bottom: poss1.bottom,
          }, 1000);

          $("#s3").fadeOut(800);


        }, time - 2500);

        time=time+1000;
        setTimeout(function() {
          $("#s32,#d3").addClass("highlight2 rounded transitions animated");
        }, time);

        time=time+1000;
        setTimeout(function() {
          s1 = Number($("#d3").text());
          s2 = Number($("#s32").text());
          sub = Number($("#s32").text());

          $("#s32,#d3").append("-275");
        }, time);

        time=time+1500;
        setTimeout(function() {
          var d1 = Number(s1 - sub);
          var d2 = Number(s2- sub);
          $("#d3").text(d1);
          $("#s32").text(d2);
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#d3").removeClass("highlight2");
        }, time);

        time=time+1000;
        setTimeout(function() {
          $("#s32").attr({
            "data-toggle":"tooltip",
            "data-placement":"right",
            "title":"Supply 0 Hence Nullify Row",
          });
          // $("#s12").attr("data-placement","right");
          // $("#s12").attr("title","Supply 0 Hence Nullify Row");

          $('#s32').tooltip('show');
        }, time);
        //
        time=time+2000;
        setTimeout(function() {
          $("#s32").removeAttr("data-toggle data-placement title");
          $('#s32').tooltip('hide');
        }, time);

        // time=time+1000;
        // setTimeout(function() {
        //   $("#c321,#c322").addClass("bg-secondary rounded transitions animated");
        //   $("#c321,#c322").css("color", "#fff");
        // }, time);

        time=time+1000;
        setTimeout(function() {
          $("#c331,#c332").removeClass("highlight");
          $("#s32").removeClass("highlight2");
        }, time);

});

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
