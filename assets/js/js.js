$('.img-first').hover(
    function(){
        $('.one').css('transform','translateX(-80px) translateY(-50px) rotate(-30deg)')
        $('.two').css('transform','translateX(0px) translateY(60px) rotate(-5deg)')
        $('.three').css('transform','translateX(100px) translateY(-20px) rotate(30deg)')
    },
    function(){
        $('.one').css('transform','translateX(0px) translateY(0px) rotate(0deg)')
        $('.two').css('transform','translateX(0px) translateY(0px) rotate(0deg)')
        $('.three').css('transform','translateX(0px) translateY(0px) rotate(0deg)')
});

$('.img-first').click(function(){
    $('.img-first').css('transition','4s cubic-bezier(0.175, 0.885, 0.32, 1.275)')
    hidden('.img-first');
    putImg();

    setTimeout(function(){
        let num_img = $('.list-img').length;
        for(let i=0;i<num_img;i++){
            setTimeout(function(){
                show('.list-img[img="'+i+'"]');
                $('.all-img-first').html('');
            },500 * (i+1));
        }
    },1000);
});

function show(el){
    $(el).css('opacity','1');
    $(el).css('visibility','visible');
}

function hidden(el){
    $(el).css('opacity','0');
    $(el).css('visibility','hidden');
}

/* Import all img for Javascript */

function putImg(){
    $.get('assets/img/',{},function(content){
        let ArrImg = [];
        let lines=content.split('\n');
        console.log(content);
        for(let i=11;i<lines.length;i++){
            if(true){
                let text = lines[i]
                let start = text.search(/href="/);
                let end = text.search(/jpg/);
                let textAll = '';
                for(let i=start+6;i<end+3;i++){
                    textAll = textAll+text[i];
                }
    
                if(textAll != ""){
                    ArrImg.push(textAll);
                }
            }
        }
        ShowImg(ArrImg);
    });
}

function ShowImg(array){
    for(let i=0;i<array.length;i++){    
        $('.image-list').append('<li class="list-img" img="'+i+'"></li>');
        $('.list-img[img="'+i+'"]').css('background-image','url(assets/img/'+array[i]);
    }
}

/*Block*/
/* JS 
document.addEventListener('contextmenu', event => event.preventDefault());

/* jQuary
$(document).on("contextmenu", function (e) {        
    e.preventDefault();
});

/*
$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 83) { // Prevent Ctrl+Shift+S        
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 88) { // Prevent Ctrl+Shift+X        
        return false;
    } else if (event.ctrlKey && event.keyCode == 83) { // Prevent Ctrl+Shift+X        
        return false;
    } else if (event.ctrlKey && event.keyCode == 80) { // Prevent Ctrl+Shift+X        
        return false;
    } else if (event.ctrlKey && event.keyCode == 85) { // Prevent Ctrl+Shift+X        
        return false;
    } 
});
*/

$(document).keydown(function (event) {
    console.log(event.keyCode);
});

let xhr = new XMLHttpRequest();
xhr.open('GET', 'assets/img',true);

console.log(xhr.send());
