$(document).ready(function() {

    $('a[href="#home"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 750);
        }
    });

    $('a[href="#firstBlock"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 750);
        }
    });

    $('a[href="#secondBlock"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 750);
        }
    });

    $('a[href="#thirdBlock"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 750);
        }
    });


    $(window).scroll(function() {
        var offset = $('h1').offset().top;
        if(offset<450) {
            $('.active').removeClass('active');
            $('li#1').addClass('active');
        } else if(offset > 450 && offset<1050) {
            $('.active').removeClass('active');
            $('li#2').addClass('active');
        } else if(offset > 1100 && offset < 1650) {
            $('.active').removeClass('active');
            $('li#3').addClass('active');
        } else if(offset > 1650) {
            $('.active').removeClass('active');
            $('li#4').addClass('active');
        }
    });

    $('.fa-chevron-right').on('click', function() {
        var id = $('.active-prompt').index() - 1;

        if($('.prompt-container').length - 1 > id) {
            $('.active-prompt').removeClass('active-prompt');

            $('.prompt-container').eq(id + 1).addClass('active-prompt');

            var index = $('.active-dot').index();

            $('.active-dot').removeClass('active-dot');

            $('.dot').eq(index + 1).addClass('active-dot');
        } else {
            $('.active-prompt').removeClass('active-prompt');
            $('.prompt-container').eq(0).addClass('active-prompt');
            $('.active-dot').removeClass('active-dot');
            $('.dot').eq(0).addClass('active-dot');
        }

    });

    $('.fa-chevron-left').on('click', function() {
        var id = $('.active-prompt').index() - 1;

        if(id > 0) {
            $('.active-prompt').removeClass('active-prompt');

            $('.prompt-container').eq(id - 1).addClass('active-prompt');

            var index = $('.active-dot').index();

            $('.active-dot').removeClass('active-dot');

            $('.dot').eq(index - 1).addClass('active-dot');
        } else {
            $('.active-prompt').removeClass('active-prompt');
            $('.prompt-container').eq($('.prompt-container').length - 1).addClass('active-prompt');
            $('.active-dot').removeClass('active-dot');
            $('.dot').eq($('.prompt-container').length - 1).addClass('active-dot');
        }

    });

    for(var i=1; i < $('.prompt-container').length; i++) {
        $('.nav-dots').append('<div class="dot"></div>');
    }

    $('.read-more').on('click', function() {
        var essay = $(this).attr('id');
        $('.more-content').fadeIn();
        if(essay == 1) {
            $('.more-content h1').html('Term 1: Reflection--Oral Communication');
            $('.paragraph-container p').html("Before GBP my oral communications skills weren’t too bad. I was never deathly afraid of presenting in front of crowds yet I still knew my presentation skills could be much improved. Although I wasn’t too bad with presenting I noticed that I also haven’t improved at all over my high school career. I think this is because if I did ever have a presentation it would be a one time thing and I would be able to just get it over with and never think about it again. The Greater Boston Project however changed that. While presentations come up all the time in the class, it is the recurring Current Event Discussions that have forced me to reflect and improve on my presentation skills. Since we have them every couple of weeks or so, if we want our grade to improve each time we have to actually figure out why we got points taken off and fix them for next time. More importantly however, is that each one is recorded and then sent back to us. Never before have I been recorded while presenting, and it was every bit as awkward and terrible as I imagined. Seeing all the mistakes I make when speaking and the vocal tics such as “uhm” and “like” which I never notice while presenting at the time really showed me how much could be improved. Now that two of the CED’s are done with, I have gotten much more used to seeing myself present on video. Now just 1 term through, I already am seeing the videos as a great opportunity to learn from my mistakes. For the next 3 terms, my goal is to keep improving on my presentation skills and become an even more fluid speaker. Specifically, I have noticed I tend to look down a lot, even if not reading off my computer and I hope to learn to keep my head up through the whole presentation. ");
        } else if(essay == 2) {
            $('.more-content h1').html('Term 1: Reflection--Data Analysis');
            $('.paragraph-container p').html("Google sheets must have one of the steepest learning curves out of anything I’ve done in school. Whenever I used to open a sheet, the vast sea of cells and settings would overwhelm me and I would have no idea where to start. Even throughout most of the lesson on google sheets I was still mostly stuck. Eventually however I was starting to get it and was soon manipulating the data at ease. I was especially excited because just a few weeks later what I learned in class came into use in my physiology lab. We had to sort things by 2 different variables at the same time, which before would have been a borderline impossible task. After learning how to sort first by one thing and then by another in GBP however I was actually able to figure it out. Through research for the immigration project and the survey infographic, I also got much better at analyzing graphs and tables given to me. For the future my goal is to now try and learn one useful thing on google sheets every week. By the end of the year I hope to be a sheet wizard!");
        } else if(essay == 3) {
            $('.more-content h1').html('Term 1: Reflection--Visual Communication');
            $('.paragraph-container p').html("Coming into GBP, I never really thought about the visual design of my presentations. Sure I picked a theme after a 30 second scan and used that but I never sat down and thought about how the information in my project would be conveyed by an audience and the impact it could have. The main reason is I don’t consider myself an art person or someone who is good with design. While GBP hasn’t increased my skill as an artist obviously, it has given me the resources to make it seem like I do. Through things like slides carousel the ability to create visually appealing presentations has increased dramatically. Also getting direct feedback on every presentation has helped immensely. On every project we do we get a specific grade for our visual communication which allows me to see exactly what mistakes I’m making and rectify them for the next one. Since I struggled with keeping consistent fonts, sizes, and colors, my goal is to try and keep those things consistent throughout a project for the rest of the year.");
        }
        $('body').addClass('modal');
    });

    $('.fa-close').on('click', function() {
        $('.more-content').hide();
        $('body').removeClass('modal');
    });

    $('.navbar').on('click', function() {
        $(this).css('display', 'none');
    });

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        autoControls: false,
        stopAutoOnClick: false,
        pager: false,
        slideWidth: 500
    });

    $('.term').on('click', function() {
        var id = $(this).attr('id');
        $('.term').removeClass('back').addClass('gone');
        setTimeout(function() {
            $('.term-container').addClass('gone');
            $('.project-container').addClass('back');
            $('.project-container').css('display', 'block');
            $('.project#' + id).css('display', 'flex');
            $('.project-container').removeClass('gone');

        }, 1500);
        $('.section-projects h1').html('Term ' + id);
    });

    $('p.back').on('click', function() {
        $('.project-container').addClass('gone');
        setTimeout(function() {
            $('.term').removeClass('gone').addClass('back');
            $('.term-container').removeClass('gone');
            $('.term').removeClass('back');
            $('.project').css('display', 'none');
        }, 750);
        $('.section-projects h1').html('Projects');
    });

});
