$(function(){
    var mySwiper = new Swiper ('.swiper', {
        loop: true,
        autoplay: {
            delay: 3500,
        },
        speed: 500,
        effect: 'fade',
        fadeEffect: { 
            crossFade: true
        },
        // ページネーション
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // クリック有効化
        },
    });
});

function fadeAnime(){

  $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fade');
    // 画面内に入ったらfadeというクラス名を追記
    }
  });

}

// 画面をスクロールをしたら動かしたい場合
$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});
