$(function ()
 {
    
//    $("body").css("paddingTop",$(".nav").innerHeight());
   // code to go a head for any nav icon 
    $(".nav li a").click(function (e) 
            {
                    $(".nav a").removeClass('active');
                    $(this).addClass('active');
                    e.preventDefault();
                    // $(this).addClass('active').parent().siblings().find('a').removeClass('active');
                    $("body,html").animate({
                        scrollTop : $('#'+$(this).data('scroll')).offset().top - 100
                    },2000);
                    
        
            });
    //code t contribute with every icon and scroll
                    $(window).scroll(function ()
                    {
                        $('.block').each(function () {
                            if($(window).scrollTop() > $(this).offset().top-130){
                                $(".nav a").removeClass('active');
                                var blockID = $(this).attr('id');
                                //" '+blockID+' "
                                $('.nav li a[data-scroll="'+blockID+'"]').addClass('active');
                            }
                        
                        });

                        // up click 
                        if($(window).scrollTop() > 500){
                            $('.up').fadeIn(400);
                        }else{
                            $('.up').fadeOut(400);
                        }
                    });
                                $(".up").click(function (event) {
                                    event.preventDefault();
                                    $('html,body').animate({
                                        scrollTop : 0
                                    },1000);
                                    
                                });
    //------------------------press
    
   
    

    function repeat(selector,time,speed,distance) {
        for(var i = 0; i < time ; i=i+1 ){
        $(selector).on('click',function () {
            $(this).animate({
                top : '-='+distance
            },speed).animate({
                top : '+='+distance
            },speed);
        });}
    }
    repeat($('.button-effects .bounceOne'),3,500,20);
    repeat($('.button-effects .bounceTow'),5,500,25);
    repeat($('.button-effects .bounceThree'),7,500,30);
    
    $('.from-left ,.border-left').hover(function() {$(this).find('span').eq(0).animate({width : '100%'},300);},
                          function() {$(this).find('span').eq(0).animate({width :  0    },300);});
    $(".from-top").hover(function ()  {$(this).find('span').eq(0).animate({height: '100%'},300);},
                        function ()  {$(this).find('span').eq(0).animate({height:   0   },300);});
    $(".border-left").hover(function ()  {$(this).find('span').eq(1).animate({width: '100%'},300);},
                          function ()  {$(this).find('span').eq(1).animate({width:   0   },300);});
    $(".border-left ").hover(function ()  {$(this).find('span').eq(2).animate({height: '100%'},300);},
                          function ()  {$(this).find('span').eq(2).animate({height:   0   },300);});
    $(".border-left").hover(function ()  {$(this).find('span').eq(3).animate({height: '100%'},300);},
                          function ()  {$(this).find('span').eq(3).animate({height:   0   },300);});
    // --------------------------------------
    $('.animate-prog span').each(function () {$(this).animate({width:$(this).attr('data-color')+'%'},1000,function () {$(this).text($(this).attr('data-color')+'%')})});
    
    $('.fixed-menu .gear').on('click',function () {
        $(this).parent('.fixed-menu').toggleClass('is-visible');
        if($(this).parent('.fixed-menu').hasClass('is-visible'))
        {$(this).parent('.fixed-menu').animate({left : 0},1000);
         $('body').animate({paddingLeft : "230px"},1000);}
        else
        {$(this).parent('.fixed-menu').animate({left : "-230px"},1000);
         $('body').animate({paddingLeft : 0 },1000);}});
    //-------------------------------------------------------change colors
    $('div.fixed-menu ul.change-color li').on('click',function () {
        $('body').attr("data-default-color",$(this).attr('data-col'));
    })
    //SELECTED PHOTOES 
    var num_img = $('div.gellary div.album img').length,
        margine_between_img ='.5',
        total_margine_num = num_img -1,
        total_margine = margine_between_img * total_margine_num;
        img_width =  (100 - total_margine)/ num_img;
        $('div.gellary div.album img').css({
           'width' : img_width+'%',
           'margin-right' : margine_between_img+'%'
        });
        $('div.gellary div.album img:last').css('margin-right','0')
    $('div.gellary div.album img').on('click',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('div.gellary div.master img').hide().attr('src',$(this).attr('src')).fadeIn(300);
        });
    $('div.master span.right').on('click',function () {
        if($(' div.album img.selected').is(":last-of-type")){
           
            $(' div.album img').eq(0).click();
        }else
        {$('div.gellary div.album img.selected').next().click();}
        
        
    });
    $('div.master span.left').on('click',function () {
        if($(' div.album img.selected').is(":first-of-type")){
           
            $('div.album img:last').click();
            // $(' div.album img').eq(($('div.album img').length-1)).click();
        }else{$('div.album img.selected').prev().click();}
         
        
    });
    //  + paragraph
    $('div.products div.product div').on('click',function () {
    
        $(this).toggle();
        $(this).siblings('div').toggle();
        $(this).siblings('.description').slideToggle();
        
    })
    $('div.items div.item div').on('click',function () {
        
        $(this).toggle();
        $(this).siblings('div').toggle();
        $(this).siblings('.description').slideToggle();
        
    })
    ///switch list <==>grid 
    $('.items .option-view div').on('click',function () {
        console.log($(this).data('class'));
        $('.items').removeClass("list-view grid-view").addClass($(this).attr("data-class"));
        $(this).addClass('active').siblings().removeClass('active');
    })
    // ERROR MESSAGE 
    $('div.error-message').each(function () {
        $(this).animate({
            right : 0
        },2000,function () {
            $(this).delay(3000).fadeOut();
        })
    });
    // form 
    var orginal_val = '';
    $('[placeholder]').focus(function () {
       orginal_val = $(this).attr('placeholder');
       $(this).attr('placeholder','');
    }).blur(function () {
        $(this).attr('placeholder',orginal_val); 
    });
    ///show message when feild emplty ??????????????????????????????????????????????
    // $('[required]').blur(function () {
        // $(this).insertAfter("<span>");
        // $(this).next('span').text('this feild is required'); });/// add the value "this field is required to the form"
    
      
    $('[required]').blur(function () {
        if($(this).val() == ''){
        $('<span >This field is required</span>').insertAfter($(this)).fadeIn().delay(2000).fadeOut();
        }
        
    });
    $('<span class="asterisk">*</span>').insertBefore('input[required]');
    // add asterisk to all required feild
    $('.asterisk').parent('div').css("position","relative");
    $('.asterisk').each(function () {
        $(this).css({
            'position': 'absolute',
            'color' : 'Red',
            'top': '35%',
            'left': $('.asterisk').parent('div').find('input[required]').width(),
            
            

        }); });
    // creat a upload button
    $('div.our-form form input[type = "file"]').wrap('<div class ="upload-press"></div>');
    $('div.our-form form div.upload-press').prepend('<span>UPLOAD YOUR FILE</span>');
    $('div.our-form form input[type = "file"]').change(function () {
        $(this).prev('span').text($(this).val());
    });
    ///  detect unicode of keyboard keys
    $('.our-form form .detect-unicode').on('keyup',function (event) {
        var uni = event.keyCode || event.which;
        $('.unicode').html(uni);
    })
    /// change the direction depend on language
    $('div.our-form form .auto-direction').on('keyup',function () {
       if($(this).val().charCodeAt(0) < 200) {
           $(this).css("direction","ltr");
       }else{
        $(this).css("direction","rtl");
       }
    });
   // covert input to tage
    $('.add-tag').on('keyup',function (event) {
        var uni = event.keyCode || event.which;
        if(uni == 188){
            var x = $(this).val().slice(0,-1),
               checked = false;
            for(var i = 0 ; i < $('.tags span').length;i+=1){
                if($('.tags span').eq(i).text() == x){
                    checked = true;
                    $('.add-tag').val('');}}
            
            if(checked === false){
            $('.our-form form div.tags').append('<span class = "span-tag">'+x+'</span>');
            $('.add-tag').val('');}}
           
        });
    function cutting(selector,max_length) {
            $(selector).each(function () {
                if($(this).text().length > max_length){
                    var x = $(this).text().substr(0,max_length);
                    $(this).text(x+"...");
                }
            });
        }
        cutting('p.one',100);
        cutting('p.two',50);
    Max_length = 0;
    $('.same-height div').each(function () {
        if($(this).height() > Max_length){
            Max_length = $(this).height();  
        }

    });
    $('.same-height div').height(Max_length);
    

    /// 
    var z_index = 0 ;
    $('.cards .card').on('click',function () {
        
        $(this).animate({
            left : '10%',
            marginTop : '-10%'
        },400,function () {
            z_index --,
            $(this).css('z-index',z_index)  
        }).animate({
            left : $(this).css("left"),
            marginTop : $(this).css("marginTop") 
        },400);
    });

    
    // loop();
    function loop() {
        $('.container .loop').fadeOut(400,function () {
           $(this).fadeIn(600);
           loop();
        });
    }

    $('.form-task').on('submit',function (e) {
        e.preventDefault();
        if($('.form-task .done').val() != ''){
            $('<li>'+$('.form-task .done').val()+'</i>').appendTo($('.tasks .courses'));
            $('.form-task .done').val('');
        }
    });

    $('.courses').on('click','li',function () {
        // console.log('hello');
        $(this).css("text-decoration","line-through").delay(200).fadeOut(400,function () {
            $(this).remove();
        
        })
    });





    function typing(selector , speed) {
        var my_text = $(selector).data('text'),
        counter = my_text.length,
        n = 0 , 
        my_printer = setInterval(function () {
            $(selector).each(function () {
                $(this).html($(this).html()+ my_text[n]); 
                n += 1; 
            })
            
            
            if(n === counter){
                clearInterval(my_printer);
            }
    },speed);
        
    }
    typing($('.container .typer'), 10);
    
   
    (function autoCounter(){
        $('.ten-to-zero-list .active').each(function () {
                        if( ! $(this).is(':last-child') )
                        {
                            $(this).delay(500).fadeOut(1000,function () {
                            $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                            autoCounter()
                            });
                        
                        }
                        else{
                                 $(this).delay(500).fadeOut(1000,function () {
                                    $(this).removeClass('active');
                                     $('.ten-to-zero-list li').eq(0).addClass('active').fadeIn(1000);
                                     autoCounter();

                                                    });
                              }
        });   
    }());

     $('.choosy-list li ').on('click',function () {
         $(this).addClass('active').siblings().removeClass('active');
         $('.choosy-content > div').hide();
         $($(this).data('content')).fadeIn();

     });
    
    $('.email-suggest').on('keyup',function () {
        var email_array = ["gmail.com","hotmail.com","yahoo.com","outlook.com","edu.org"];
        sentence = "";
        if(! $(this).next().is('.email-box')){
           $('<ul class = "email-box"></ul>').insertAfter($('.email-suggest'));
       
        }
        for(var i = 0; i< email_array.length;i+=1){
            var y = $(this).val();
            if(y.includes('@') === true){
                sentence += " <li>"+y+"</li>";
            }else{
                sentence += " <li>"+y+'@'+email_array[i]+"</li>";
            }
            
        }
    
        $(".email-box").html(sentence);
        $("body").on("click",".email-box li",function () {
            $('.email-suggest').val($(this).text());
            $(this).parent(".email-box").remove();
            
        })
    });
    // var x ="osmankaheel@gmail.com";
    // console.log(x.includes('@'));
    // if(x.includes('@')===true){
    //     console.log('hello')
    //     console.log(x.slice(0,x.indexOf('@')));
    // }
    
    
});
