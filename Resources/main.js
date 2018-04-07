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
        } else if(essay == 4) {
            $('.more-content h1').html('Term 2: Reflection--Personal');
            $('.paragraph-container p').html('<b>Was there an activity or assignment that has helped you understand how to collaborate better? What was it? How did it improve your understanding of working with others and achieving a common goal?</b> <br> <br> As the neighborhood project began, the project seemed to be just like the many others I have done in GBP. My group mates and I created a group chat as well as shared a google drive folder where all our work would be done, and the first days of the project went smoothly. When it was time to go into Beacon HIll and do our interviewers, I got a back injury that made me miss it. This meant that I had to communicate with my group mates really well to make sure everything ran smoothly. The night before I let them know I may not be able to come to school and we figured out what was the best way to go from there. We then had to keep adjusting as the project progressed and this was dealt with very well by constant communication in our group chat and in person during class. This project taught me so much about communication and collaboration because it was the first time that something went wrong during it. This project taught me that collaboration isn’t just a series of checkboxes to check in order for a grade, but instead something necessary for a project to be successful, especially in the face of adversity. The project also taught me that others are willing to help cover for people as long as clear communication is held throughout and everyone is on the same page and working their hardest and for the good of the group.');
        } else if(essay == 5) {
            $('.more-content h1').html('Term 2: Reflection--Content Based');
            $('.paragraph-container p').html('<b>Was there an assignment / activity that pushed you out of your comfort zone?  What was it and why did you feel uncomfortable?  How did you cope with the fact that you felt uncomfortable? What did you learn anything from this experience?</b> <br> <br> Conventional writing assignments have never been my strong suit which is one of the reasons that I chose GBP as a class instead of regular English. We do still sometimes have conventional essays however and in term 3 this came in the form of our research paper. The research paper was on something that has to do with the Boston economy and I chose to do mine on the effect of technology on it. I don’t have much experience with these types of papers but writing it was a good experience. After writing it and receiving feedback I was able to see where I need to improve. One main area is in my research skills and in being able to weave together multiple sources instead of just relying on one source. For the future this will be good to know that it is a weak point and I can make a conscious effort to improve on it.');
        } else if(essay == 6) {
            $('.more-content h1').html('Term 2: Reflection--Skills Based');
            $('.paragraph-container p').html('In term 2 there was a large focus on proposals. The first project where this was introduced was the shaping the era project. In this project I wrote and presented a proposal on how to fix the problem of the Lowell Mill working conditions as if I were in the time period. This assignment forced me to write in a totally new way and so improved my understanding and ability to communicate through writing. I have had to ask for things formally before, however I was never taught the proper way to write a proposal. Doing this at first was hard for me. I wasn’t used to how it was structured and the style of writing required. It was especially hard for me to try and write persuasively while still remaining professional. After we did several of the proposal writings however I started to get better at them and now although I am still not great, I at least feel comfortable writing one. This will be very useful for me in the future if I ever want to enact change somewhere. The skill to write a good persuasive proposal makes turning an idea into a reality much easier.');
        } else if(essay == 7) {
            $('.more-content h1').html('Term 3: Reflection--Personal');
            $('.paragraph-container p').html('<b>Was there an assignment / activity that pushed you out of your comfort zone?  What was it and why did you feel uncomfortable?  How did you cope with the fact that you felt uncomfortable? What did you learn anything from this experience?</b> <br> <br> 	Conventional writing assignments have never been my strong suit which is one of the reasons that I chose GBP as a class instead of regular English. We do still sometimes have conventional essays however and in term 3 this came in the form of our research paper. The research paper was on something that has to do with the Boston economy and I chose to do mine on the effect of technology on it. I don’t have much experience with these types of papers but writing it was a good experience. After writing it and receiving feedback I was able to see where I need to improve. One main area is in my research skills and in being able to weave together multiple sources instead of just relying on one source. For the future this will be good to know that it is a weak point and I can make a conscious effort to improve on it.');
        } else if(essay == 8) {
            $('.more-content h1').html('Term 3: Reflection--Content Based');
            $('.paragraph-container p').html('<b>What did you learn about the intended and unintended consequences (effects) of an event or change in the community? How does that impact your thought process about making decisions or other people’s perspectives?</b> <br> <br> All Souls has been a really captivating book for me and has given me a lot of insight of the history and culture of Boston, in particular in South Boston. Through both in class learning and this book I have learned a lot about the Boston busing. When it was done the intended consequences were to end segregation in the school system however this failed in spectacular fashion. Instead the busing caused mass riots and even furthered the divide between black and white in Boston. This drastic difference in the intended and unintended consequences of this action have made me realize just how much actions by the government can affect the fabric of a community, whether good or bad. Learning about the busing has caused me to question government action much more and try to think of how their policies and rules can affect the lives of ordinary people in ways perhaps not thought of at the time. To me the Boston busing problem also highlights the need for government to listen to the voices of the governed because if they did they would know how poorly this idea would work out.');
        } else if(essay == 9) {
            $('.more-content h1').html('Term 3: Reflection--Skill Based');
            $('.paragraph-container p').html('During term 3 we did looked at Needham through economic data points. This activity drastically improved my skills in data gathering, data analyzing, and google sheets. In this activity we were given a large table of cities in Massachusetts as well as a bunch of economic stats on them. We then were told to make several different types of graphs as well as use statistics to analyze what it means. Over the year I have gotten pretty good with google sheets however I noticed my achilles heel in sheets was creating graphs. This activity forced me to learn how to create multiple different styles of graphs, the main one being histograms. Histograms have always confused me since they are similar to bar graphs but have a few key differences that I always forget. After spending lots of time with them however I now feel a lot more comfortable both making and reading them. This activity also helped me learn how to analyze data much better. In class we learned about skew, outliers, and z-score and these tools now allow me to see data in a light I haven’t before and make sense of it. For the future this will be very helpful if I ever have large amounts of data that I need to compare in my life.');
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
