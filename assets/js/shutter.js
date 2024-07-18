jQuery(function(){
    //shutter1がフェードアウトしてから300ミリ秒後にshutter2のアニメーション(lazer)実行
      $('#lazer').css('animation','lazer forwards 4.0s');
    //lazerアニメーションが終わりそうなときにshutter2自体をフェードアウトさせる
      setTimeout(function(){
        $('#shutter1').fadeOut(1000);
      },3000);
    setTimeout(function(){
      $('shutter#1').remove();
    },4500);
});
