$(function(){
  $("#building").change(function() {
  var id = $("#building option:selected").val();
  switch(id)
  {
  case '1':
  $('.right').show('slow');
  $('.left').show('slow');
  break;
  case 'cham':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#chambit').show('slow');
  break;
  case 'sae':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#saebit').show('slow');
  break;
  case 'bi':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#bima').show('slow');
  break;
  case 'hwa':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#hwado').show('slow');
  break;
  case 'gi':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#ginyeom').show('slow');
  break;
  case 'ok':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#okui').show('slow');
  break;
  case 'bok':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#bokji').show('slow');
  break;
  case 'han':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#hanul').show('slow');
  break;
  case 'nu':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#nuri').show('slow');
  break;
  case 'dong':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#donghae').show('slow');
  break;
  case 'bit':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#bit').show('slow');
  break;
  case 'yeon':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#yeongu').show('slow');
  break;
  case 'no':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#nocheon').show('slow');
  break;
  case 'ice':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#icelink').show('slow');
  break;
  }
  });
});

$(function(){
  $("#food").change(function() {
  var id = $("#food option:selected").val();
  switch(id)
  {
  case '1':
  $('.right').show('slow');
  $('.left').show('slow');
  break;
  case 'cafe':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#cafe').show('slow');
  break;
  case 'res':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#lunch').show('slow');
  break;
  case 'drink':
  $('.right').hide('slow');
  $('.left').hide('slow');
  $('#drink').show('slow');
  break;
}
});
});

$(document).ready(function(){
  $("#sel1").change(function(){
    if($("#sel1").is(":checked")){ //체크됐을 때
      $('.lun').hide();
      $('.din').show();
    }
      else {
        $('.lun').show();
      }
  });
});
$(document).ready(function(){
  $("#sel2").change(function(){
    if($("#sel2").is(":checked")){ //체크됐을 때
      $('.din').hide();
      $('.lun').show();
    }
      else {
        $('.din').show();
      }
  });
});
$(document).ready(function(){
  $("#sel3").change(function(){
    if($("#sel3").is(":checked")){ //체크됐을 때
      $('.hu').hide();
      $('.inn').hide();
      $('.jung').show();
    }
      else {
        $('.hu').show();
        $('.inn').show();
      }
  });
});
$(document).ready(function(){
  $("#sel4").change(function(){
    if($("#sel4").is(":checked")){ //체크됐을 때
      $('.jung').hide();
      $('.inn').hide();
      $('.hu').show();
    }
      else {
        $('.jung').show();
        $('.inn').show();
      }
  });
});
$(document).ready(function(){
  $("#sel5").change(function(){
    if($("#sel5").is(":checked")){ //체크됐을 때
      $('.hu').hide();
      $('.jung').hide();
      $('.inn').show();
    }
      else {
        $('.hu').show();
        $('.jung').show();
      }
  });
});

$(function(){
  $('.sub-img1').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img1').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img2').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img2').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img3').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img3').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img4').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img4').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img5').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img5').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img6').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img6').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img7').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img7').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img8').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img8').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img9').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img9').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img10').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img10').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img11').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img11').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img12').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img12').attr('src', changeimg);
  });
})
$(function(){
  $('.sub-img13').click(function(){
    var changeimg = $(this).attr('src');
    $('.main-img13').attr('src', changeimg);
  });
})
