// HTMLドキュメント読み込み完了時
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

$(function() {
  //画面スクロール時 
  $(window).on('scroll', function() {
    console.log('scrollイベントが発生しました');
  });
});