$(document).ready(function () {
    // Initialize Isotope
    let $grid = $('.project-area .grid').isotope({
        itemSelector: '.element-item', // Items to filter
        layoutMode: 'fitRows'          // Layout mode
    });

    // Button click event for filtering
    let $btns = $('.project-area .button-group button');
    $btns.click(function (e) {
        // Remove 'active' class from all buttons
        $('.project-area .button-group button').removeClass('active');

        // Add 'active' class to the clicked button
        e.target.classList.add('active');

        // Get the filter value from the clicked button
        let selector = $(e.target).attr('data-filter');

        // Apply the filter to the grid
        $grid.isotope({ filter: selector });

        return false; // Prevent default behavior
    });
    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}

    });
        $('.about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{

            },
            544:{
                items:2
            }
        }
        })

        //Sticky Navigation Menu
        
        let nav_offset_top = $('.header_area').height()+50;

        function navbarFixed(){
            if($('.header_area').length){
                $(window).scroll(function(){
                    let scroll=$(window).scrollTop();
                    if(scroll>=nav_offset_top){
                        $('.header_area .main_menu').addClass('navbar_fixed');
                    }else{
                        $('.header_area .main_menu').removeClass('navbar_fixed');
                    }
                })
            }
        }

        navbarFixed();

});
