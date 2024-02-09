(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // mobilecarousel
    $(".mobile-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

    // Array to store products added to cart
    var cartProducts = [];

    // Select all "Add to cart" links
    var addToCartLinks = document.querySelectorAll('#addToCartLink');

    // Select the cart item count span
    var cartItemCount = document.querySelector('#cartItemCount');

    // Initialize cart count
    var count = 0;

    // Add event listener to each "Add to cart" link
    addToCartLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of the link (e.g., navigating to another page)
            event.preventDefault();

            // Get product details
            var productDetails = {
                name: link.dataset.name, // You can add other details as needed
                price: link.dataset.price
            };

            // Add the product to the cart
            cartProducts.push(productDetails);

            // Increment the cart count
            count++;

            // Update the content of the cart item count span
            cartItemCount.textContent = count;

            // Log a message to indicate that the event listener is triggered
            console.log('Add to cart button clicked');
            console.log('Product added to cart:', productDetails);
        });
    });
    

    // Function to display ads
    function displayAds(){
        var randomLocation = [ /* Your array of locations */ ];
        var randomAmount = [ /* Your array of amounts */ ];
        var randomImg = [ /* Your array of image URLs */ ];

        let randomLocIndex = randomLocation[Math.floor(Math.random()* randomLocation.length)];
        let randomAmountIndex = randomAmount[Math.floor(Math.random()* randomAmount.length)];
        let randomImgIndex = randomImg[Math.floor(Math.random()* randomImg.length)];

        adLocation.innerHTML = randomLocIndex;
        amountOfProduct.innerHTML = randomAmountIndex;
        adImg.src = randomImgIndex;
    }

    displayAds();
    setInterval(displayAds, 1000);

})(jQuery);

