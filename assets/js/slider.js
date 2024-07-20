$(function(){
  // 初期設定
  $("#slider-area li:last").prependTo("#slider-area ul");
  $("#slider-area ul").css({ marginLeft: "-405px" });
  // クリック時のイベント
  $(".btn").click(function(){
    var btnId = $(this).attr("id");
    // 戻るボタン
    if(btnId == "nextBtn"){
      $("#slider-area ul").animate({
        marginLeft: "-815px" //右側に隙間（空白）を作る
        },
        function(){
        $("#slider-area li:first").appendTo("#slider-area ul"); //できた隙間（一番右の画像が元々あった位置）に次に出てくる 画像（1番がもともとあったら、8番）をそこに移動させる
        $("#slider-area ul").css({ marginLeft: "-405px" }); //変な表示にならないために作った余分なmarginを、元のmargin(5px)も考えて元に戻す
      })
    // 次へボタン
    }else if(btnId == "prevBtn"){
      $("#slider-area ul").animate({
        marginLeft: "5px"
        },function(){
        $("#slider-area li:last").prependTo("#slider-area ul");
        $("#slider-area ul").css({ marginLeft: "-405px" });
      })
    }
  })
})