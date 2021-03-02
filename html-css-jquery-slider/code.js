jQuery(document).ready(function ($) {
  
  $('#checkbox').change(function(){
    setInterval(function (){
     moveRight(); 
    }, 3000);
  });
  
  var slideCount = $('#slider ul li').length;
    console.log("uzunluk : "+slideCount);
  var slideWidth = $('#slider ul li').width();
  console.log("slideWidth : "+slideWidth);
  var slideHeight = $('#slider ul li').height();
    console.log("slideHeight : "+slideHeight);
  var sliderUIWidth = slideCount  * slideWidth;
    console.log("sliderUlWidth : "+slideWidth);
  
  $('#slider').css({ width: slideWidth, height: slideHeight});
  $('#slider ul').css ({width : sliderUIWidth , margnLeft: slideWidth});
  $('#slider ul li:last-child').prependTo('#slider ul');
  
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 600, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 600, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

  $('a.control_prev').click(function () {
    moveLeft();
  });
  
    $('a.control_next').click(function () {
    moveRight();
  });
  
});

