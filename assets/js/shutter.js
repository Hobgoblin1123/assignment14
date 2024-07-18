jQuery(function(){
    $('#lazer').css('animation','lazer forwards 4.0s');
    //lazerアニメーションが終わりそうなときにshutter2自体をフェードアウトさせる
    setTimeout(function(){
      $('#shutter1').fadeOut(1000);
    },3000);

    setTimeout(function(){
      $('#s-logo').css('animation','scale-change 1.75s forwards');
      setTimeout(function(){
        $('#meteor').css('animation','ryusei 1s forwards');
      },2000);
      setTimeout(function(){
        $('#shutter2').fadeOut(1000);
      },4750)
    },3000);
});
