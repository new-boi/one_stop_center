
var page = 0;

var main_img = document.getElementById('main_img');
document.getElementById("btn1").onclick=function(){
    
   
    page = 2;
    document.getElementById("bg_img1").style.opacity = 0;
    document.getElementById("bg_img2").style.opacity = 1;
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("home_btn").style.visibility = "visible";

    btn_content1.classList.toggle('fade');
    btn_content2.classList.toggle('fade');
    btn_content3.classList.toggle('fade');

}

var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function logout() {
        if(page==2){
            btn_content1.classList.toggle('fade');
            btn_content2.classList.toggle('fade');
            btn_content3.classList.toggle('fade');
        
    
        }
        document.getElementById("bg_img1").style.opacity = 0;
        document.getElementById("bg_img2").style.opacity = 0;
    
    
        document.getElementById("btn1").style.visibility = "visible";
        document.getElementById("content").style.visibility = "hidden";
        document.getElementById("minimize_btn").style.visibility = "hidden";
        document.getElementById("next_btn").style.visibility = "hidden";
        document.getElementById("home_btn").style.visibility = "hidden";
    
        
     
    
    
        if(page == 2){
            document.getElementById("bg_img2").style.opacity    = 0;
            document.getElementById("bg_img1").style.opacity = 1;
        }
        if(page == 3){
            document.getElementById("bg_img3").style.opacity = 0;
            document.getElementById("bg_img1").style.opacity = 1;
            document.getElementById("main_img1").style.visibility="hidden"
            main_img1.classList.toggle('fade');
        }
        if(page == 4){
            document.getElementById("bg_img4").style.opacity = 0;
            document.getElementById("bg_img1").style.opacity = 1;
            document.getElementById("main_img2").style.visibility="hidden"
            main_img2.classList.toggle('fade');
        }
        if(page >= 5){
            document.getElementById("bg_img5").style.opacity = 0;
            document.getElementById("bg_img1").style.opacity = 1;
            document.getElementById("main_img3").style.visibility="hidden"
            main_img3.classList.toggle('fade');
        }
    
        bg_img1.classList.toggle('fade');
    
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 100000)
        // 1000 milliseconds = 1 second
    }
};


window.onload = function() {
    inactivityTime();
  }




document.getElementById("btn_content1").onclick=function(){
    btn_content1.classList.toggle('fade');
    btn_content2.classList.toggle('fade');
    btn_content3.classList.toggle('fade');



    page = 3;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("bg_img3").style.opacity = 1;
    document.getElementById("next_btn").style.visibility = "visible";
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("minimize_btn").style.visibility = "visible";

    document.getElementById("main_img1").style.visibility="visible"

    main_img1.classList.toggle('fade');




}
document.getElementById("btn_content2").onclick=function(){
    btn_content1.classList.toggle('fade');
    btn_content2.classList.toggle('fade');
    btn_content3.classList.toggle('fade');

    page = 4;
    document.getElementById("bg_img3").style.opacity = 0;
    document.getElementById("bg_img4").style.opacity = 1;
    document.getElementById("next_btn").style.visibility = "visible";
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("minimize_btn").style.visibility = "visible";
    document.getElementById("main_img2").style.visibility="visible"
    main_img2.classList.toggle('fade');
}

document.getElementById("btn_content3").onclick=function(){
 

    page = 5;
    document.getElementById("bg_img4").style.opacity = 0;
    document.getElementById("bg_img5").style.opacity = 1;

    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("minimize_btn").style.visibility = "visible";
    document.getElementById("next_btn").style.visibility = "hidden";
    btn_content1.classList.toggle('fade');
    btn_content2.classList.toggle('fade');
    btn_content3.classList.toggle('fade');
    document.getElementById("main_img3").style.visibility="visible"
    main_img3.classList.toggle('fade');

}

document.getElementById("home_btn").onclick=function(){

    if(page==2){
        btn_content1.classList.toggle('fade');
        btn_content2.classList.toggle('fade');
        btn_content3.classList.toggle('fade');
    

    }
    document.getElementById("bg_img1").style.opacity = 0;
    document.getElementById("bg_img2").style.opacity = 0;


    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("minimize_btn").style.visibility = "hidden";
    document.getElementById("next_btn").style.visibility = "hidden";
    document.getElementById("home_btn").style.visibility = "hidden";

    
 


    if(page == 2){
        document.getElementById("bg_img2").style.opacity    = 0;
        document.getElementById("bg_img1").style.opacity = 1;
    }
    if(page == 3){
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("main_img1").style.visibility="hidden"
        main_img1.classList.toggle('fade');
    }
    if(page == 4){
        document.getElementById("bg_img4").style.opacity = 0;
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("main_img2").style.visibility="hidden"
        main_img2.classList.toggle('fade');
    }
    if(page >= 5){
        document.getElementById("bg_img5").style.opacity = 0;
        document.getElementById("bg_img1").style.opacity = 1;
        document.getElementById("main_img3").style.visibility="hidden"
        main_img3.classList.toggle('fade');
    }

    bg_img1.classList.toggle('fade');

}

document.getElementById("next_btn").onclick=function(){
    page++;
    if(page == 4){
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("bg_img4").style.opacity = 1;
        document.getElementById("main_img1").style.visibility="hidden"
        main_img1.classList.toggle('fade');
        document.getElementById("main_img2").style.visibility="visible"
        main_img2.classList.toggle('fade');
    }

    if(page == 5){
        document.getElementById("bg_img4").style.opacity = 0;
        document.getElementById("bg_img5").style.opacity = 1;
        document.getElementById("next_btn").style.visibility = "hidden";
        document.getElementById("main_img2").style.visibility="hidden"
        main_img2.classList.toggle('fade');
        document.getElementById("main_img3").style.visibility="visible"
        main_img3.classList.toggle('fade');
        
    }
 

}

document.getElementById("minimize_btn").onclick=function(){

    btn_content1.classList.toggle('fade');
    btn_content2.classList.toggle('fade');
    btn_content3.classList.toggle('fade');

    document.getElementById("content").style.visibility = "visible";
    document.getElementById("minimize_btn").style.visibility = "hidden";
    document.getElementById("next_btn").style.visibility = "hidden";
    document.getElementById("bg_img2").style.opacity = 1;


    if(page == 3){
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("main_img1").style.visibility="hidden"
        main_img1.classList.toggle('fade');
    }
    if(page == 4){
        document.getElementById("bg_img4").style.opacity = 0;
        document.getElementById("main_img2").style.visibility="hidden"
        main_img2.classList.toggle('fade');
    }
    if(page == 5){
        document.getElementById("bg_img5").style.opacity = 0;
        document.getElementById("main_img3").style.visibility="hidden"
        main_img3.classList.toggle('fade');
    }

    page=2;
}
