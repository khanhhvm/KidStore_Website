$(window).on('load', function(){
    displayTableCart();
});

function displayTableCart(){

    var subtotal = 0;
    var endtotal = 0;
    if (CheckBrowser() && localStorage.length > 0) {
        for(var i =0; i < localStorage.length; i++)
        {
            var index = data.find(element => element.id == localStorage.key(i));
            var number = localStorage.getItem(index.id);
            var total = number*index.price;
            subtotal += total;

            var td_img = '<td class="thumbnail-img"><a href="detail.html?id='+ index.id +'"><img class="img-fluid"';
            td_img += 'src="' + index.small + '" alt="" /></a></td>';

            var td_title = '<td class="name-pr"><a href="detail.html?id='+ index.id +'">' + index.title + '</a></td>';
            var td_price = '<td class="price-pr"><p>$' + index.price + '</p></td>';
            var td_number = '<td class="quantity-box"><input id="input_'+ index.id + '" type="number" size="4" value="'+ number +'" min="0" step="1" onchange="changeSingleTotal(' + index.id + ',this.value)" class="c-input-text qty text"></td>';
            var td_total = '<td class="total-pr"><p id="price_' + index.id + '">$' + total + '</p></td>';
            var td_remove = '<td class="remove-pr"><a style="cursor:pointer;" onclick="removeRow('+ index.id +')"><i class="fas fa-times"></i></a></td>';
            $('#table_cart').append('<tr id="r_'+ localStorage.key(i) +'">'+ td_img + td_title +td_price + td_number + td_total + td_remove +'</tr>');
        }
    }
    else{
        $('#table_cart').append('<tr><td colspan="6" style="text-align:center;">Shopping Cart is Empty!</td></tr>');
    }
    if(subtotal > 2) endtotal = subtotal - 2; 
    $('#Sub_Total').text('$ ' + subtotal);
    $('#End_Total').text('$ ' + endtotal);
}

function removeRow(id)
{
    $('#r_' + id).remove();
    RemoveItems(id);
    if (localStorage.length == 0) {
        $('#table_cart').empty();
        $('#table_cart').append('<tr><td colspan="6" style="text-align:center;">Shopping Cart is Empty!</td></tr>');
    }
}

function changeSingleTotal(id,value)
{
    var index = data.find(element => element.id == id);
    var total = value * index.price;
    $('#price_' + id).text("$" + total);
}

function updateCart()
{
    var subtotal = 0;
    var endtotal = 0;
    if (CheckBrowser() && localStorage.length > 0) {
        for(var i =0; i < localStorage.length; i++)
        {
            var index = data.find(element => element.id == localStorage.key(i));
            var number = $('#input_' + index.id).val();

            if(number <= 0) 
            {
                $('#input_' + index.id).text(1);
                number = 1;
            }
            localStorage.setItem(index.id,number);

            var total = number*index.price;
            subtotal += total;
        }
        if(subtotal > 2) endtotal = subtotal - 2; 
        $('#Sub_Total').text('$ ' + subtotal);
        $('#End_Total').text('$ ' + endtotal);

        // update side cart
        displayMiniCart();
    }
    else
    {
        $('#table_cart').empty();
        $('#table_cart').append('<tr><td colspan="6" style="text-align:center;">Shopping Cart is Empty!</td></tr>');
        $('#Sub_Total').text('$ 0');
        $('#End_Total').text('$ 0');

    }
}