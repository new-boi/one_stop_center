
var page = 0;
document.getElementById("btn1").onclick=function(){
    console.log("1")
    page = 2;
    document.getElementById("bg_img1").style.opacity = 0;
    document.getElementById("bg_img2").style.opacity = 1;
    document.getElementById("btn1").style.opacity = 0;
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("home_btn").style.visibility = "visible";


}


document.getElementById("btn_content1").onclick=function(){
    console.log("2")
    page = 3;
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("bg_img3").style.opacity = 1;
    document.getElementById("next_btn").style.visibility = "visible";
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("minimize_btn").style.visibility = "visible";

}
document.getElementById("btn_content2").onclick=function(){
    console.log("3")
    page = 4;
    document.getElementById("bg_img3").style.opacity = 0;
    document.getElementById("bg_img4").style.opacity = 1;
    document.getElementById("next_btn").style.visibility = "visible";
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("minimize_btn").style.visibility = "visible";
}

document.getElementById("btn_content3").onclick=function(){
    console.log("4")
    page = 5;
    document.getElementById("bg_img4").style.opacity = 0;
    document.getElementById("bg_img5").style.opacity = 1;
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("minimize_btn").style.visibility = "visible";
    document.getElementById("next_btn").style.visibility = "hidden";
}

document.getElementById("home_btn").onclick=function(){
    document.getElementById("bg_img2").style.opacity = 0;
    document.getElementById("btn1").style.opacity = 1;
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
    }
    if(page == 4){
        document.getElementById("bg_img4").style.opacity = 0;
        document.getElementById("bg_img1").style.opacity = 1;
    }
    if(page >= 5){
        document.getElementById("bg_img5").style.opacity = 0;
        document.getElementById("bg_img1").style.opacity = 1;
    }

}

document.getElementById("next_btn").onclick=function(){
    page++;
    if(page == 4){
        document.getElementById("bg_img3").style.opacity = 0;
        document.getElementById("bg_img4").style.opacity = 1;
    }

    if(page == 5){
        document.getElementById("bg_img4").style.opacity = 0;
        document.getElementById("bg_img5").style.opacity = 1;
        document.getElementById("next_btn").style.visibility = "hidden";
        
    }
 
   console.log(page);
}

document.getElementById("minimize_btn").onclick=function(){
    console.log("131")
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("minimize_btn").style.visibility = "hidden";
    document.getElementById("bg_img2").style.opacity = 1;

    if(page == 3){
        document.getElementById("bg_img3").style.opacity = 0;
    }
    if(page == 4){
        document.getElementById("bg_img4").style.opacity = 0;
    }
    if(page == 5){
        document.getElementById("bg_img5").style.opacity = 0;
    }
}




