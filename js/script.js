// 헤더 애니메이션
$(function(){
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if((st > lastScrollTop) && (lastScrollTop>0)) {
            $("header").css("top","-60px");
        } else {
            $("header").css("top","0px");
        }
            lastScrollTop = st;
        });
    });

for (var i=1; i <= 9; i++) {
    $('#cont' + i ).click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
        });
}

// 탑버튼
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.topbutton').fadeIn();
        } else {
            $('.topbutton').fadeOut();
        }
    });
    
    $(".topbutton").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});


출처: https://cofs.tistory.com/188 [CofS]

// 메세지 

$(document).ready(function() {
    $(window).scroll( function(){
        $('#message1').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','left':'54px'},800);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.messages').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window+100 > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0'},800);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.slidetop').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window+200 > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'0px'},1000);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.slideright').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','left':'0px'},1200);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        for (var i = 1; i <= 3; i++){
            $('#design_r'+i).each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','left':'0px'},1500);
                }
            });
        }
    });
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('.slideup').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'0px'},1000);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.otherservice').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window + 800 > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'0px'},400);
            }
        }); 
    });
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('#line1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).addClass('line1');
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('#line2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).addClass('line2');
            }
        }); 
    });
});

var persona1El = document.getElementById("persona1");
var persona1ElBox = document.getElementById("persona1box");

var persona2El = document.getElementById("persona2");
var persona2ElBox = document.getElementById("persona2box");

// 화살표
var goclick1El = document.getElementById("click1");
var goclick2El = document.getElementById("click2");

// 페르소나1


persona1El.addEventListener("mouseover", onMouseOverpersona1);
persona1El.addEventListener("mouseout", onMouseOutpersona1);

function onMouseOverpersona1(e) {
    // console.log("마우스 오버");
    e.stopPropagation()

    persona1ElBox.classList.add("Overpersona1");

    persona1ElBox.classList.remove("Outpersona1");    

    persona2El.classList.add("Overpersona1_2");
    persona2ElBox.classList.add("Overpersona1_2");

    persona2El.classList.remove("Outpersona1_2");
    persona2ElBox.classList.remove("Outpersona1_2");

    persona1El.classList.remove("Outpersona2_2");
    persona1ElBox.classList.remove("Outpersona2_2");
    persona2ElBox.classList.remove("Outpersona2");

    // 화살표
    goclick1El.classList.add("goclick1");
    goclick1El.classList.remove("goclick1_2");

    
    
}

function onMouseOutpersona1(e) {
    // console.log("마우스 아웃");
    e.stopPropagation()

    persona1ElBox.classList.add("Outpersona1");
    persona1ElBox.classList.remove("Overpersona1");

    persona2El.classList.remove("Overpersona1_2");
    persona2ElBox.classList.remove("Overpersona1_2");

    persona2El.classList.add("Outpersona1_2");
    persona2ElBox.classList.add("Outpersona1_2");

    // 화살표
    goclick1El.classList.remove("goclick1");
    // 화살표
    goclick1El.classList.add("goclick1_2");


        // 왼쪽 박스 확장 삭제
        persona1ElBox.classList.remove("Uppersona1");

        // 오른쪽 박스 밀림 삭제
        persona2El.classList.remove("Uppersona1_2");
        persona2ElBox.classList.remove("Uppersona1_2");

        gsap.to(perul1, {
            "opacity" : 0,
            "duration" : 0.1,
            "ease" : "sine.out"
         });
}

// 페르소나2

persona2El.addEventListener("mouseover", onMouseOverpersona2);
persona2El.addEventListener("mouseout", onMouseOutpersona2);

function onMouseOverpersona2(e) {
    // console.log("마우스 오버2");
    e.stopPropagation()
    // 초기화 제거
    persona1ElBox.classList.remove("Outpersona1");
    persona2El.classList.remove("Outpersona1_2");
    persona2ElBox.classList.remove("Outpersona1_2");

    persona1El.classList.remove("Outpersona2_2");
    persona1ElBox.classList.remove("Outpersona2_2");

    persona2ElBox.classList.remove("Outpersona2");

    // 추가
    persona2ElBox.classList.add("Overpersona2");

    // 왼쪽 박스 밀림
    persona1El.classList.add("Overpersona2_2");
    persona1ElBox.classList.add("Overpersona2_2");

    // 화살표
    goclick2El.classList.add("goclick2");
    goclick2El.classList.remove("goclick2_2");

    gsap.to(perul2, {
        "display" : "none",
        "opacity" : 0,
        "duration" : 0.1,
        "ease" : "sine.out"
     });

}

function onMouseOutpersona2(e) {
    e.stopPropagation()
    // 초기화 제거
    persona2ElBox.classList.remove("Overpersona2");
    persona1El.classList.remove("Overpersona2_2");
    persona1ElBox.classList.remove("Overpersona2_2");

    // 추가
    persona2ElBox.classList.add("Outpersona2");

    // 왼쪽 박스 복귀
    persona1El.classList.add("Outpersona2_2");
    persona1ElBox.classList.add("Outpersona2_2");

    // 화살표
    goclick2El.classList.remove("goclick2");
    // 화살표
    goclick2El.classList.add("goclick2_2");

            // 오른쪽 박스 확장 삭제
            persona2ElBox.classList.remove("Uppersona2");

            // 왼쪽 박스 밀림 삭제
            persona1El.classList.remove("Uppersona2_2");
            persona1ElBox.classList.remove("Uppersona2_2");
    
}

// 페르소나 박스 확장

goclick1El.addEventListener("mouseup", onMouseUppersona1)

function onMouseUppersona1(e) {
    console.log("클릭");
    // 왼쪽 박스 확장
    e.stopPropagation()
    persona1ElBox.classList.add("Uppersona1");

    // 오른쪽 박스 밀림
    persona2El.classList.add("Uppersona1_2");
    persona2ElBox.classList.add("Uppersona1_2");
}

// 페르소나2 박스 확장
goclick2El.addEventListener("mouseup", onMouseUppersona2)

function onMouseUppersona2(e) {
    console.log("클릭");
    e.stopPropagation()
    // 왼쪽 박스 확장
    persona2ElBox.classList.add("Uppersona2");

    // 오른쪽 박스 밀림
    persona1El.classList.add("Uppersona2_2");
    persona1ElBox.classList.add("Uppersona2_2");
}

// 페르소나 텍스트

var btn1 = document.querySelector("#click1"),
    btn2 = document.querySelector("#click2"),
    perul1 = document.querySelector("#perul1"),
    perul2 = document.querySelector("#perul2");


btn1.addEventListener("mouseup", btn1click);
btn2.addEventListener("mouseup", btn2click);


function btn1click(e) {
    e.preventDefault();
    e.stopPropagation()
        gsap.to(perul1, {
            "opacity" : 1,
            "duration" : 1,
            "ease" : "sine.out"
         });
}

function btn2click(e) {
    // console.log("click");
    e.preventDefault();
    e.stopPropagation()
        gsap.to(perul2, {
            "display" : "block",
            "opacity" : 1,
            "duration" : 1,
            "ease" : "sine.out"
         });
}

// 가로스크롤 버튼
// var horbtnnext = document.querySelector("#next"),
//     horbtnprev = document.querySelector("#prev"),
//     ("#horizontal-scroll-wrapper");

// horbtnnext.addEventListener("mouseup", btnnextclick);
// horbtnprev.addEventListener("mouseup", btnprevclick);


// var i = 1;
// function btnnextclick(e) {
//     e.preventDefault();
//     horzentalwrapper.scrollTo(0, 1400 * i);
//     i++;
//     if (i == 4) {
//         i = 0;
//     }
//     console.log(horzentalwrapper.scrollTop);
// }

// function btnprevclick(e) {
//     e.preventDefault();
//     console.log("click");
//     if (horzentalwrapper.scrollTop > 3000) {
//         horzentalwrapper.scrollTo(0, 2800);
//     }
//     if (horzentalwrapper.scrollTop > 1500 && horzentalwrapper.scrollTop <= 2800) {
//         horzentalwrapper.scrollTo(0, 1400);
//     }
//     console.log(horzentalwrapper.scrollTop);

// }

var serv_1 = document.querySelector("#serv_1"),
    serv_2 = document.querySelector("#serv_2"),
    serv_3 = document.querySelector("#serv_3"),
    serv_4 = document.querySelector("#serv_4"),
    horzentalwrapper = document.querySelector("#horizontal-scroll-wrapper");

serv_1.addEventListener("mouseup", serv1click),
serv_2.addEventListener("mouseup", serv2click),
serv_3.addEventListener("mouseup", serv3click),
serv_4.addEventListener("mouseup", serv4click);


function serv1click (e) {
    console.log("click");
    horzentalwrapper.scrollTo(0, 0);
}
function serv2click (e) {
    console.log("click");
    horzentalwrapper.scrollTo(0, 1400);
}
function serv3click (e) {
    console.log("click");
    horzentalwrapper.scrollTo(0, 2800);
}
function serv4click (e) {
    console.log("click");
    horzentalwrapper.scrollTo(0, 4200);
}