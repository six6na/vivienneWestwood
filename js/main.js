const toggleBtn = document.querySelector('.toggleBtn');

        toggleBtn.addEventListener("click", (event) => {
            event.currentTarget.classList.toggle('active');
        });

        $(document).ready(function(){

        $(".toggleBtn").click(function(){
        $(".toggleMenu").stop().slideToggle(300);
        })
  
        
        });


const toggleMenu = document.querySelector('.depth1');

        toggleMenu.addEventListener("click", (event) => {
            event.currentTarget.classList.toggle('');
        });

        $(document).ready(function(){
            $(".navi > .depth1").click(function(){
            $(this).find(".depth2").stop().slideToggle(300);
            });
            $('.depth1').click(function(){
                $(this).toggleClass("on");
            });
        });

$(document).ready(function(){
    $(".bi-bag").mouseover(function(){
        $(".bi-bag-fill").addClass("check");
    });
    $(".bi-bag").mouseover(function(){
        $(".bi-bag").addClass("check");
    });
    $(".bi-bag-fill").mouseout(function(){
        $(".bi-bag-fill").removeClass("check");
    });
    $(".bi-bag-fill").mouseout(function(){
        $(".bi-bag").removeClass("check");
    });
})