//スクロールに応じてヘッダーにactiveクラスを付与
$(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  });
});

//カーテンが開くアニメーション
window.addEventListener('load', () => {
  const masks = document.querySelectorAll('.text-mask');
  masks.forEach((mask, index) => {
    setTimeout(() => {
      mask.classList.add('open');
    }, index * 0); // 順番に開く
  });
});

//スムーススクロール
$('a[href^="#"]').on('click', function () {
  var speed = 300;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;
});

//ページトップへ戻る
var $pageTop = $('#page-top');
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
  } else {
    $pageTop.fadeOut();
  }
});
$pageTop.on('click', function () {
  $('body,html').animate({
  scrollTop: 0
  }, 300);
  return false;
});

//スクロールエフェクト
function fadeUpEffect() {
  $('.fadeUpEffect').each(function () {
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    }
  });
}
$(window).scroll(function () {
  fadeUpEffect();
});

// タブメニュー
$(function () {
  const $tabs = $('.tab__menu');
  const $contents = $('.content__box');
  $contents.hide().first().addClass('show').show();
  $tabs.on('click', function () {
    $('.tab--active').removeClass('tab--active');
    $(this).addClass('tab--active');
    const index = $tabs.index(this);
    $contents.removeClass('show').hide().eq(index).addClass('show').fadeIn(300);
  });
});

//slider
const swiper = new Swiper("#js-slider-swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: "#js-slider-pagination",
  },
  navigation: {
    nextEl: "#js-slider-next",
    prevEl: "#js-slider-prev",
  },
});

// スクロールイベント
$(".price__container").scroll(function(){
  if ($(this).scrollLeft() > 20) {
    $(".price__scroll").fadeOut();
  }
});

//qa
$(document).ready(function ($) {
  $(".qa__box-a").hide();
  $(".qa__box-a").eq(0).show();
  $(".qa__box-icon").eq(0).addClass("is-open");

  $(".qa__box-q").click(function () {
    $(this).next(".qa__box-a").slideToggle();
    $(this).children(".qa__box-icon").toggleClass("is-open");
    // $(".qa__box-a").not($(this).next()).slideUp();
    // $(".qa__box-icon").not($(this).children()).removeClass("is-open");
  });
});


