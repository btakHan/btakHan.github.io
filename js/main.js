$(document).ready(function(){
    var index=1;
    // 로고부위 브랜드 다음버튼 클릭 시 이미지변경 
    $(".onChangeBrandRight").on('click',function(){
        var index2= index+1;
        if(index2==4){
            index2=1;
        }
        $(".logo:nth-child("+index+")").removeClass("fadeIn animated");
        $(".logo:nth-child("+index+")").css({"display":"none"});
        $(".logo:nth-child("+index2+")").addClass("fadeIn animated");
        $(".logo:nth-child("+index2+")").css({"display":"block"});
        
        $(".slide:nth-child("+index+")").css({"display":"none"});
        $(".slide:nth-child("+index2+")").css({"display":"block"});
        
        $(".bookItem:nth-child("+index+")").css({"display":"none"});
        $(".bookItem:nth-child("+index+")").removeClass("flipInX animated");
        $(".bookItem:nth-child("+index2+")").css({"display":"block"});
        $(".bookItem:nth-child("+index2+")").addClass("flipInX animated");
        
        
        $(".right:nth-child("+index+")").css({"display":"none"});
        $(".right:nth-child("+index+")").removeClass("fadeIn animated");
        $(".right:nth-child("+index2+")").css({"display":"block"});
        $(".right:nth-child("+index2+")").addClass("fadeIn animated");
        
        index +=1;
        if(index==4){
            index=1;
        }
    })
    // 로고부위 브랜드 다음버튼 클릭 시 이미지변경 
    $(".onChangeBrandLeft").on('click',function(){
        var index2= index-1;
         if(index2==0){
            index2=3;
            index=1;
        }
        $(".logo:nth-child("+index+")").removeClass("fadeIn animated");
        $(".logo:nth-child("+index+")").css({"display":"none"});
        $(".logo:nth-child("+index2+")").addClass("fadeIn animated");
        $(".logo:nth-child("+index2+")").css({"display":"block"});
        
        
        $(".slide:nth-child("+index+")").css({"display":"none"});
        $(".slide:nth-child("+index2+")").css({"display":"block"});
        
        
        $(".bookItem:nth-child("+index+")").css({"display":"none"});
        $(".bookItem:nth-child("+index+")").removeClass("flipInX animated");
        $(".bookItem:nth-child("+index2+")").css({"display":"block"});
        $(".bookItem:nth-child("+index2+")").addClass("flipInX animated");
        
        
        $(".right:nth-child("+index+")").css({"display":"none"});
        $(".right:nth-child("+index+")").removeClass("fadeIn animated");
        $(".right:nth-child("+index2+")").css({"display":"block"});
        $(".right:nth-child("+index2+")").addClass("fadeIn animated");
        
        
        index -=1;
        if(index==0){
            index=3;
        }
    })
    
    // 좌측 케러셀 이미지 변경 시 중앙과 우측 이미지 동시 변경
     $(".right").on('click',function(){
         var a = $(this).attr("data-id");
         var bookIndex= $(this).parent().find("ol").find(".active").attr("data-slide-to");
         var cal1 = 0;
         var cal2 = 0;
         cal1=parseInt(bookIndex)+1;
         cal2=parseInt(bookIndex)+2;
         if(cal1==5){
           cal2=1;
        }
        $("."+a+"_book:nth-child("+cal1+")").css({"display":"none"});
        $("."+a+"_book:nth-child("+cal2+")").css({"display":"block"});
        $("."+a+"_book:nth-child("+cal2+")").addClass("fadeIn animated");
     });
    $(".left").on('click',function(){
         var a = $(this).attr("data-id");
         var bookIndex= $(this).parent().find("ol").find(".active").attr("data-slide-to");
         var cal1 = 0;
         var cal2 = 0;
         cal1=parseInt(bookIndex)+1;
         cal2=parseInt(bookIndex);
        if(cal1==0){
           cal2=4;
        }
        $("."+a+"_book:nth-child("+cal1+")").css({"display":"none"});
        $("."+a+"_book:nth-child("+cal2+")").css({"display":"block"});
        $("."+a+"_book:nth-child("+cal2+")").addClass("fadeIn animated");
     });
    
    $(".hamburger").on("click",function(){
        $(".miniNavBox").css({"display":"block"});
    })
    $(".close").on("click",function(){
        $(".miniNavBox").css({"display":"none"});
    })
    
    
    
})  
    