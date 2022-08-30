$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;

        
    });
});






































// jQuery('document').ready(function($){

// var menuBtn = $('.menu-icon'),
//     menu = $('.navigation ul');

// menuBtn.click(function() {

//   if( menu.hasCass('show') ) {

//     menu.removeClass('show');
//   } else{

//     menu.addClass('show');
//   }

// });

// });

