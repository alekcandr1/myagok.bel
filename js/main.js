$(function(){

    $("input[name=body]").tooltipster({
        animation: 'grow',
        theme: 'tooltipster-shadow',
        position:'top',
        content:"Введите телефон"
    });
    $("input[name=body]").tooltipster('disable');

    $("input[name=name]").tooltipster({
        animation: 'grow',
        theme: 'tooltipster-shadow',
        position:'top',
        content:"Введите имя"
    });
    $("input[name=name]").tooltipster('disable');

    $("input[name=body]").mask("+375 (99) 999-99-99");

    $('a[href="#zvonok"],a[href="#konsult"],a[href="#001"],a[href="#002"],a[href="#003"],a[href="#004"],a[href="#005"],a[href="#006"],a[href="#007"],a[href="#008"],a[href="#009"],a[href="#010"],a[href="#011"],a[href="#012"],a[href="#013"],a[href="#014"],a[href="#015"],a[href="#016"],a[href="#017"],a[href="#018"],a[href="#019"],a[href="#020"],a[href="#021"],a[href="#022"],a[href="#023"],a[href="#024"],a[href="#025"]').on("click",function(e){
        e.preventDefault();
        var a=$(this).attr("href");
        $(a).find("form").css("display","block");
        $(a).find("form input[type=text]").val("");
        $(a).find(".otvet-show").css("display","none");
        $.fancybox({
            href:a
            }
        );
    })


   //Оставить заявку!
    var $f1=$("form[name=contact1]");
    $f1.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send1.php";
         validate_main_form(this,send)
    })

    //Две зеленые кнопки "Подробнее"
    var $f2=$("form[name=contact2]") ;
    $f2.each(function(){
        //адрес обработчика  отправки письма
        var send="php/send2.php";
        validate_main_form(this,send)
    })
    //Две кнопки "Получить консультацию!".
    var $f3=$("form[name=contact3]") ;
    $f3.each(function(){
        //адрес обработчика  отправки письма
        var send="php/send3.php";
        validate_main_form(this,send)
    })
    //Три зеленые кнопки "Заказать" под типовыми конструкциями окон
    var $f4=$("form[name=contact4]") ;
    $f4.each(function(){
        //адрес обработчика  отправки письма
        var send="php/send4.php";
        validate_main_form(this,send)
    })
     // Оранжевая кнопка в самом низу "Оставить заявку на замер окон".
    var $f5=$("form[name=contact5]") ;
    $f5.each(function(){
        //адрес обработчика  отправки письма
        var send="php/send5.php";
        validate_main_form(this,send)
    })

	//Партнер!
    var $f6=$("form[name=contact6]");
    $f6.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send6.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f7=$("form[name=contact7]");
    $f7.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send7.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f8=$("form[name=contact8]");
    $f8.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send8.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f9=$("form[name=contact9]");
    $f9.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send9.php";
         validate_main_form(this,send)
    })

	//Партнер!
    var $f10=$("form[name=contact10]");
    $f10.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send10.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f11=$("form[name=contact11]");
    $f11.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send11.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f12=$("form[name=contact12]");
    $f12.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send12.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f13=$("form[name=contact13]");
    $f13.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send13.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f14=$("form[name=contact14]");
    $f14.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send14.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f15=$("form[name=contact15]");
    $f15.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send15.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f16=$("form[name=contact16]");
    $f16.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send16.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f17=$("form[name=contact17]");
    $f17.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send17.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f18=$("form[name=contact18]");
    $f18.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send18.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f19=$("form[name=contact19]");
    $f19.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send19.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f20=$("form[name=contact20]");
    $f20.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send20.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f21=$("form[name=contact21]");
    $f21.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send21.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f22=$("form[name=contact22]");
    $f22.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send22.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f23=$("form[name=contact23]");
    $f23.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send23.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f24=$("form[name=contact24]");
    $f24.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send24.php";
         validate_main_form(this,send)
    })
	//Партнер!
    var $f25=$("form[name=contact25]");
    $f25.each(function(){
        //адрес обработчика  отправки письма
         var send="php/send25.php";
         validate_main_form(this,send)
    })
    function validate_main_form(el,send){
        var self=el;
        $(el).find("input[type=image]").on("click",function(e){
            e.preventDefault();
            var $name= $($(self).find("input[name=name]"));
            var n=$name.val();
            var $tel=$($(self).find("input[name=body]"));
            var t=$tel.val();
            var $kom=$($(self).find("input[name=kom]"));
            var k=$kom.val();
            var bol=true;
            if(n=="")
            {
                $name.tooltipster('enable');
                $name.tooltipster('show',function(){
                    setInterval(function(){ $name.tooltipster('disable');},2000)
                });
                bol=false;
            }
            if(t==""&&bol){
                $tel.tooltipster('enable');
                $tel.tooltipster('show',function(){
                    setInterval(function(){ $tel.tooltipster('disable');},2000)
                });
                bol=false;
            }
            if(bol){
                var data="name="+n+"&tel="+t+"&kom="+k;
                $.ajax({
                    type:"POST",
                    data:data,
                    url:send
                }).done(function(data){
                        console.log(data)
                        $(self).slideUp(function(){
                            $(self).next().slideDown()
                        })
                    })
            }
        })

    }


})
