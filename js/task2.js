



$(".catBtn").click(function(){
    $(".categoriesDiv").slideToggle(1500);
})
$(".recBtn").click(function(){
    $(".recipientDiv").slideToggle(1500);
})
$(".ocaBtn").click(function(){
    $(".ocassionDiv").slideToggle(1500);
})
$(".insBtn").click(function(){
    $(".inspirationDiv").slideToggle(1500);
})
$(".dt1").click(function(){
    $(".dm1").slideToggle(1000);
})
$(".dt2").click(function(){
    $(".dm2").slideToggle(1000);
})
$(".dt3").click(function(){
    $(".dm3").slideToggle(1000);
})
$(".dt4").click(function(){
    $(".dm4").slideToggle(1000);
})

var w = 1
$(".firstTog").click(function(){

    
    if (w==1){
        $("body").css("overflow","hidden")
        $(".back").toggle(1000);
     $(".webSite").animate({left:"17.5%"},1000)
    $(".hiddenList").animate({width:"17.5%"},1000,function(){
     w2 = $(".hiddenList").css("width");
     $(".hiddenList ul").fadeIn(800);
    });
   w++;
}
else if(w != 1){
    $(".hiddenList ul").fadeOut(800 ,function(){
     $(".hiddenList").animate({width:"0%"},1000)
        $(".webSite").animate({left:"0%"},1000,function(){ $("body").css("overflow","auto")
        $(".back").show(500);
    })
       
     w=1;
    });
}
})
















$(".borde").click(function(){
    $(this).css("backgroundColor","#008BFF");
    $(this).siblings().css("backgroundColor","transparent");
})

$(".order").click(function(){
    /*$(".one").children.css("display","none");*/
    $(".desc-order").css("display","block");
    $(".desc-shiping, .desc-wish, .desc-recommend, .desc-setting").css("display","none");
})
$(".ship").click(function(){
    $(".desc-shiping").css("display","block");
    $(".desc-order, .desc-wish, .desc-recommend, .desc-setting").css("display","none");
})
$(".wish").click(function(){
    $(".desc-wish").css("display","block");
    $(".desc-order, .desc-shiping, .desc-recommend, .desc-setting").css("display","none");
})
$(".recommend").click(function(){
    $(".desc-recommend").css("display","block");
    $(".desc-order, .desc-shiping, .desc-wish, .desc-setting").css("display","none");
})
$(".setting").click(function(){
    $(".desc-setting").css("display","block");
    $(".desc-order, .desc-shiping, .desc-wish, .desc-recommend").css("display","none");
})














/*
$(".fo").click(function(){
    $(this).next().slideToggle(1000);
    $(".garab").not($(this).next()).slideUp(1000);
})
*/