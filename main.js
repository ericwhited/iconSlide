$(document).ready(function() {
    $('.navList-item').eq(0).addClass('is-active');
    
    $('.navList-item').click(function(){
        $('.navList-item').removeClass('is-active');
        $(this).addClass('is-active');
    })

    console.log('hello')
})

