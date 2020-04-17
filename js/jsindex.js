window.onload = function(){
    var maindiv = document.getElementById("id_items");
    for(var i in data)
    {
        var text;

        // create col div
        var coldiv = document.createElement('div');
        coldiv.className += "col-lg-3 col-md-6 special-grid";
        if(data[i].category == "figures") coldiv.className += " figures";
        else coldiv.className += " console";

        // create product div
        var prodiv = document.createElement('div');
        prodiv.className +="products-single fix";
        
        // create box div
        var boxdiv = document.createElement('div');
        boxdiv.className +="box-img-hover";

        // create type div
        var typediv = document.createElement('div');
        typediv.className +="type-lb";

        // create type p
        var typep = document.createElement('p');
        typep.className +="type-lb";
        if(data[i].type == "New")
        {
            text = document.createTextNode("New");
            typep.className +=" new";
        }
        else{
            text = document.createTextNode("Sale");
            typep.className +=" sale";
        }
        typep.appendChild(text);
        typediv.appendChild(typep);

        boxdiv.appendChild(typediv);
        // create image
        var imgdiv = document.createElement('img');
        imgdiv.className +="img-fluid";
        imgdiv.alt = "Image";
        imgdiv.src = data[i].small;

        boxdiv.appendChild(imgdiv);

        // create div icon
        var icondiv = document.createElement('div');
        icondiv.className +="mask-icon";
        var iconul = document.createElement('ul');
        var iconli = document.createElement('li');
        var icona = document.createElement('a');
        var iconi = document.createElement('i');
        iconi.className += "fas fa-eye";
        icona.appendChild(iconi);
        icona.setAttribute("data-toggle","tooltip");
        icona.setAttribute("data-placement", "right");
        icona.setAttribute("title","View");
        icona.href = "detail.html?id=" + data[i].id;
        iconli.appendChild(icona);
        iconul.appendChild(iconli);
        var acart = document.createElement('a');
        acart.className += "cart";
        acart.style.cursor = "pointer";
        acart.setAttribute("onclick", "AddSingleItem("+ data[i].id +")");
        acart.text = "Add to Cart";
        
        icondiv.appendChild(iconul);
        icondiv.appendChild(acart);
        boxdiv.appendChild(icondiv);
        
        prodiv.appendChild(boxdiv);

        // create why div
        var whydiv = document.createElement('div');
        whydiv.className +="why-text";
        var h4title = document.createElement('h4');
        h4title.textContent = data[i].title;
        var h3price = document.createElement('h3');
        h3price.textContent = "$" + data[i].price;
        whydiv.appendChild(h4title);
        whydiv.appendChild(h3price);

        prodiv.appendChild(whydiv);

        // add everything
        coldiv.appendChild(prodiv);
        maindiv.appendChild(coldiv);
    }
}