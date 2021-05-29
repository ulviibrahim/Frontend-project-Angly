// $('header').addClass('fixed-top')
// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > 90) {
//         $('header').addClass('fixed-top')
//         console.log("ds;kfmcdkfm");
//     } else {
//         $('header').removeClass('fixed-top');
//     }
// });

$("li").hover(function () {
    $(this).find(".dropdown-menu").toggleClass("show")
    $(this).find(".show").toggleClass("animated fadeIn")
})






setInterval(toggle, 1100);





function toggle() {


    if ($(".Designs").text() == 'Designs') {
        $(".Designs").text('Business')
    }
    else {
        $(".Designs").text('Designs')
    };

}

$(".plusblue .img").click(function(){
    $('.corusel1').removeClass("d-none")
    // $(".plusblue").addClass("d-none")

})
$(".corusel1").click( function(e){
   
    if($(e.target).hasClass("items")&&$(e.target).is("div")){
        $('.corusel1').addClass("d-none")
    }

})

$(".close").click( function(e){
   e.preventDefault()
   
    $('.corusel1').addClass("d-none")
    console.log("fhnfdmnj")

 
 })

 $('.corusel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  });

 $('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

 let play='<span class="play">Play</span>'
 let item='<i class="fas fa-play" aria-hidden="true"></i>'

$(".imageShadow .after").hover(function(){
   
       if( $(".imageShadow .after").html()==item){
       

      $(".imageShadow .after").html(play)
        
    
      
      $(".imageShadow .after span").toggleClass("animated fadeIn")

        
     }
       else{
        $(".imageShadow .after").html(item)
      


     }
      
})
var video = $("#playerid").attr("src");

  
let aboutvideoclick= $(".imageShadow .after")

 let aboutvideo =$("#videoshow .createvideo iframe")

aboutvideoclick.click(function(){
    aboutvideo.show()
    $(".imageShadow").hide()
    $("#videoshow .createvideo").css("z-index","999")
    $("#playerid").attr("src",video);
})

$("#videoshow").click( function(e){
   
    if($(e.target).is("div")&&$(e.target).hasClass("row")){
    console.log(video)
    $("#playerid").attr("src","");
    aboutvideo.hide()
        // $("#videoshow .createvideo iframe").remove()
        // $("#videoshow .createvideo").html("<iframe class='items' width='100%' height='550' src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1'></iframe><div class='imageShadow'><div class='after'><i class='fas fa-play'></i></div></div>")   }

        $(".imageShadow").show();
    }  

})

   
// var video1= document.getElementById("video1")
// video1.addEventListener("click",function(){
//   video1.play()
// })

