$(function(){
    
    // Only animate elements when using non-mobile devices
    if (jQuery.browser.mobile === false){
        
        /*-------------------------------------------------------------------*/
        /*  1. Section subtitle
        /*-------------------------------------------------------------------*/
        /*$('.section-subtitle').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInLeft').css('opacity', 1);}
        });*/
        
        
        /*-------------------------------------------------------------------*/
        /*  2. Section - Profile
        /*-------------------------------------------------------------------*/
        $('.profile-text', '#profile').find('p:not(:first)').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated bounceInUp').css('opacity', 1);}
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  3. Section - Services
        /*-------------------------------------------------------------------*/
        $('.inner-content', '#services').find('h4').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInUp').css('opacity', 1);}
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  5. Section - Resume
        /*-------------------------------------------------------------------*/
        $('#education').find('.resume-item:not(:first)').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    } , itemsDelay * (i * 1.5));
                }
            });
        });
        
        $('#work').find('.resume-item:not(:first)').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    } , itemsDelay * (i * 1.5));
                }
            });
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  6. Section - Accolades
        /*-------------------------------------------------------------------*/
        $('.accolades').find('.item:not(:first)').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    } , itemsDelay * (i * 1.5));
                }
            });
        });
        
        
        /*-------------------------------------------------------------------*/
        /*  7. Section - Work Process
        /*-------------------------------------------------------------------*/
        $('#work-process').find('.title').each(function(i){            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView){
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
        
    }
});