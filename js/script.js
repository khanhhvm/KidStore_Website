/** Add any JavaScript you need to this file. */
function displayOrder()
{
    if (document.getElementById('rproblem').checked) {
        document.getElementById('order').style.display = 'block';
    } else {
        document.getElementById('order').style.display = 'none';
    }
}

/* --------------- Shopping Cart ----------------------*/
//--------------Display Mini Cart---------------
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// localStorage object is available to store data
		return true;
	} else {
			return false;
	}
}

function displayMiniCart(){
    $('.badge').text(localStorage.length);
    $('.cart-list').empty();
    var total = 0;
    if (CheckBrowser() && localStorage.length > 0) {
        
        for (i = 0; i < localStorage.length; i++)
        {
            //get value
            var index = data.find(element => element.id == localStorage.key(i));
            var number = localStorage.getItem(index.id);
            total += (index.price * number);

            var mn_pic = '<a href="detail.+.html?id=' + index.id + '" class="photo"><img src="' + index.small + '" class="cart-thumb" alt="" /></a>';
            var mn_title = '<h6><a href="detail.html?id=' + index.id + '">' + index.title + '</a></h6>';
            var mn_price = '<p>' + number +'x - <span class="price">$'+ index.price + '</span></p>';
            $('.cart-list').append('<li>' + mn_pic + mn_title + mn_price + '</li>');
        }
    }
    else $('.cart-list').append('<li>Shopping Cart is empty!</li>');
    
    // add View Cart button
    $('.cart-list').append('<li class="total"></li>');
    $('.total').append('<a class="btn btn-default hvr-hover btn-cart" href="cart.html">VIEW CART</a>');
    var temptext = '<span class="float-right"><strong>Total</strong>: $' + total + '</span>';
    $('.total').append(temptext);
}

$(window).on('load', function(){
    displayMiniCart();
});

//-----------------Add Items to Cart --------------------
function AddSingleItem(id){
    if (localStorage.getItem(id) !=null)
    {
        var num = parseInt(localStorage.getItem(id)) + 1;
        localStorage.setItem(id,num);
    }
    else localStorage.setItem(id,1);
    displayMiniCart();
}

function RemoveItems(id)
{
    if (localStorage.getItem(id) !=null)
    {
        localStorage.removeItem(id)
    }
    displayMiniCart();
}
