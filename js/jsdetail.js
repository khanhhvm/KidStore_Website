window.onload = function(){
    // get id
    var params = new URLSearchParams(location.search);
    var id = params.get('id');
    
    //get value
    var index = data.find(element => element.id == id);

    // create parameters
    var p_img = document.getElementById("p_img");
    var imgdiv = document.createElement('div');
    imgdiv.className += "carousel-item active";

    var img = document.createElement('img');
    img.className += "d-block w-100";
    img.alt = index.title;
    img.src = index.small;

    imgdiv.appendChild(img);
    p_img.appendChild(imgdiv);

    //---------detail on right side-----------
    var p_title = document.getElementById("p_title");
    p_title.textContent = index.title;

    var p_price = document.getElementById("p_price");
    p_price.textContent = "$" + index.price;

    var p_descript = document.getElementById("p_descript");
    p_descript.textContent = index.description;

    var add_button = document.getElementById("add_button");
    add_button.setAttribute("onclick", "AddDetailItems("+ index.id +")");
}
    //-----------------Add Items to Cart --------------------
    function AddDetailItems(id){
        
        var num = $("#input_number").val();
        if(num > 0) localStorage.setItem(id,num);
        displayMiniCart();
    }