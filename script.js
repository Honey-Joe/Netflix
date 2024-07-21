$("#close4").hide()
$("#close1").hide()
$("#close3").hide()
$("#close2").hide()
$("#close5").hide()
$("#close6").hide()

$("#headingOne").on("click",function(){
    $("#open1").toggle()
    $("#close1").toggle()
})
$("#headingTwo").on("click",function(){
    $("#open2").toggle()
    $("#close2").toggle()
})
$("#headingThree").on("click",function(){
    $("#open3").toggle()
    $("#close3").toggle()
})

$("#headingFour").on("click",function(){
    $("#open4").toggle()
    $("#close4").toggle()
})
$("#headingFive").on("click",function(){
    $("#open5").toggle()
    $("#close5").toggle()
})
$("#headingSix").on("click",function(){
    $("#open6").toggle()
    $("#close6").toggle()
})
$('.responsive').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }

    ]
  });

  $('.language-silder').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
    ]
  });

$(window).load(()=>{
  setTimeout(()=>{
    if(document.getElementById("car_video").paused){
      document.getElementById("car_video").play()
    }
    
  },2000)
})

  

