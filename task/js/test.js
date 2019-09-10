/*

$(".test").hide(2000);
$(".test").show(2000);
$(".test").toggle(2000);


$(".test").slideUp(2000);
$(".test").slideDown(2000);
$(".test").slideToggle(2000);

$(".test").fadeIn(2000);
$(".test").fadeOut(2000);
$(".test").fadeToggle(2000);
$(".test").fadeTo(2000,0.5);

//callback function
*/



$("#btn").click(function(){
    $(".test").slideDown(2000,function(){
        $("#btn").css("backgroundColor","red");
    })
});


/*
$("#btn").click(function(){
    $(".test").animate({width:'100%',height:'+=100px',borderRadius:'50%'},2000)
})*/



/*

$("#btn").click(function(){
    $(".test").animate({width:'2000px',height:'1000px'},3000)
});

$("#btn1").click(function(){
    $(".test").stop(true,false);
})



*/
/*

$("header").animate({width:'100%'},2000);
$("header").animate({height:'100%'},1000,function(){
    $("h2").fadeIn(2000);
    $(".container").fadeIn(4000);
    });


*/

/*

html()  //tags
text()  //text Only
val()   //for input Only
css()

*/

/*

$(".test1").click(function(){
    $(".demo").html("<pan>hambozo</span>")
})
*/

/*
$(".test1").click(function(){
    $(".demo").text("pop no so");
})
*/


/*

$("#demo").click(function(){
    alert($("#demo").val())
})
*/
/*
$("#demo").click(function(){
    $("#demo").val("mostafa");
})
*/

/*
$(".test1").click(function(){
   // $(".test1").css({"backgroundColor":"red"});
    alert($(".test1").css("backgroundColor"));
})
*/



/*
parents()
parent()  btgeb el ab elmobasher

parentsUntil("section)
children()   btgeb el abn elmobasher

find()
*/

/*
$("h2").parents("div").css({"border":'1px solid gray'});
$("section").parent("div").css({"border":'1px solid gray'});
$("section").parentsUntil("div").css({"border":'1px solid gray'});
$("section").find("*").css({"border":'1px solid gray'});

*/



/*
let colors=["red","green","blue"];

$(".x").click(function(){
    let y=Math.round(Math.random()*3);
    $(this).css({"color":"black"});
    $(this).siblings().css({"color":colors[y]});
})

*/

/*
$(".x").click(function(){
    $(".y").fadeToggle();
    $(".y").siblings.fadeOut();
});

*/






/*
addClass()
removeClass()
toggleClass()

*/






/*
$(".no").click(function(){
    $(".no").toggleClass("hambozo");
})
*/


/*
$(".no").click(function(){
    $(".no").remove();
})
*/


/*
$(".no").click(function(){
    $(".no").empty("h2");
})
*/

/*

$("ul li").eq(5).css({"color":"red"})

*/
/*

$("p").not(".test");   //kda hay3ml select 3la kol el p el mesh ma5den class test

*/


/*

let links=document.getElementsByClassName("nav-link");
let catogery=`general`;
let country=`eg`;
let news;


for(let i=0;i<links.length;i++)
    {
        links[i].addEventListener("click",function(e){
            catogery=e.target.innerHTML;
            getNews(catogery)
        })
    }



getNews();
function getNews(cat)
{
    let req=new XMLHttpRequest();

    let url=`https://newsapi.org/v2/top-headlines?country=`+country+`&category=`+cat+`&apiKey=6aba64583ba8471e92ae0b53d6884d85`;
    req.open("get",url);

req.onreadystatechange=function()
{
    if(req.readyState==4&&req.status==200)
        {
           news=JSON.parse(req.response);
            news =news.articles;
            display();
        }
}

req.send();

}


function display()
{
    let col="";
for(let i=0;i<news.length;i++)
    {
        col+=`<div class="col-md-4">
                <div class="news">
                    <img class="img-fluid" src=`+news[i].urlToImage+`>
                   <h5>`+news[i].author+`</h5>
                   <p class="text-muted">`+news[i].content+`</p>
                    <p class="text-muted">`+news[i].description+`</p>
                    <p class="text-muted">`+news[i].publishedAt+`</p>
                    </div>
            </div>`
    }

rowData.innerHTML=col;
}



*/






/*
let links=document.getElementsByClassName("nav-link");
let catogery='general';
let news;

getNews();
for(let i=0;i<links.length;i++)
    {
        links[i].addEventListener("click",function(e){
            catogery=e.target.innerHTML;
            getNews();
        })
    }

function getNews()
{
        let url=`https://newsapi.org/v2/top-headlines?country=eg&category=`+catogery+`&apiKey=6aba64583ba8471e92ae0b53d6884d85`;
        let req=new XMLHttpRequest();
        req.open("get",url);
        req.onreadystatechange=function()
        {
            if(req.status==200&&req.readyState==4)
                {
                   news=JSON.parse(req.response);
                    news=news.articles;
                    display();
                }
        }

        req.send();
}


function display()
{
    let col="";
    for(let i=0;i<news.length;i++)
        {
            col+=`<div class="col-md-4">
                <div class="news">
                    <img class="img-fluid" src=`+news[i].urlToImage+`>
                   <h5>`+news[i].author+`</h5>
                   <p class="text-muted">`+news[i].content+`</p>
                    <p class="text-muted">`+news[i].description+`</p>
                    <p class="text-muted">`+news[i].publishedAt+`</p>
                    </div>
            </div>`
        }
    rowData.innerHTML=col;
}
*/











