 /* ..............................................
    Slider Range
    ................................................. */
    (function($) {

    $("#slider-range").slider({
    range: true,
    min: 0,
    max: 4000,
    values: [1000, 3000],
    slide: function(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

    /* ..............................................
        NiceScroll
        ................................................. */

    $(".brand-box").niceScroll({
        cursorcolor: "#9b9b9c",
    });}(jQuery));

    /*================== Display list =======================*/
    $(window).on('load', function(){
        displayList();
        CountMenu();
    });
    
    function displayList(){
        
        for(var i = 0; i < cate_list.length; i++)
        {
            // add row
            $('.tab-content').append('<div role="tabpanel" class="tab-pane fade show" id="figure-'+ cate_list[i] +'"><div class="row" id="row_'+cate_list[i]+'"></div></div>');
            var tempArray = data.filter(word => word.list == cate_list[i]);
            for(var t in tempArray)
            {
                var firstText = '<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4"><div class="products-single fix">';
                firstText += '<div class="box-img-hover"><div class="type-lb">';
                if(tempArray[t].type == "New") firstText += '<p class="new">'+ tempArray[t].type +'</p></div>';
                else firstText += '<p class="sale">'+ tempArray[t].type +'</p></div>';

                var secondText = '<img src="'+ tempArray[t].small +'" class="img-fluid" alt="Image"><div class="mask-icon"><ul><li>';
                secondText += '<a href="detail.html?id='+ tempArray[t].id +'" data-toggle="tooltip" data-placement="right" title="View">';
                secondText += '<i class="fas fa-eye"></i></a></li></ul><a class="cart" style="cursor:pointer;" onclick="AddSingleItem('+ tempArray[t].id +')">Add to Cart</a></div></div>';

                var thirdText = '<div class="why-text"><h4>'+ tempArray[t].title +'</h4><h5> $'+ tempArray[t].price +'</h5></div></div></div>';

                $('#row_' + cate_list[i]).append(firstText + secondText + thirdText);
            }
        }
        $('#figure-1').addClass('active');
    }

    /*================== Display Menu number list =======================*/
    function CountMenu(){
        // Count total menu
        var figureArray = data.filter(word => word.category == "figures");
        $('#number_figure').text('(' + figureArray.length + ')');
        
        var consoleArray = data.filter(word => word.category == "console");
        $('#number_console').text('(' + consoleArray.length + ')');

        // Count single list
        var mario = data.filter(i => i.list == 1);
        $('#no_figure_1').text('('+mario.length+')');

        var fox = data.filter(i => i.list == 2);
        $('#no_figure_2').text('('+fox.length+')');

        var zel = data.filter(i => i.list == 3);
        $('#no_figure_3').text('('+zel.length+')');

        var final = data.filter(i => i.list == 4);
        $('#no_figure_4').text('('+final.length+')');

        var street = data.filter(i => i.list == 5);
        $('#no_figure_5').text('('+street.length+')');

        var nin = data.filter(i => i.list == 21);
        $('#no_console_21').text('('+nin.length+')');

        var mic = data.filter(i => i.list == 22);
        $('#no_console_22').text('('+mic.length+')');

        var sony = data.filter(i => i.list == 23);
        $('#no_console_23').text('('+sony.length+')');
    }