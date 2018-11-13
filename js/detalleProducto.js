    var section = document.querySelector('.product-details');
    var pathname = window.location.hash;
    var urlDetalle = pathname.split("#");
    console.log(urlDetalle);

   function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
    }

    loadJSON(function(response) {
        var actual_JSON = JSON.parse(response);
        DetalleProcu(actual_JSON);
    });

    function DetalleProcu(jsonObj) {
      var articulo = jsonObj;
      console.log(articulo);

      for(var i = 0; i < articulo.length; i++) {
            var _id = articulo[i]._id;
            var about = articulo[i].about;
            var category = articulo[i].category;
            var picture = articulo[i].picture;
            var registered = articulo[i].registered;
            var title = articulo[i].title;


            console.log(_id);

            var iDiv = document.createElement('div');
            iDiv.id = 'detail';
            if(urlDetalle == _id){
            iDiv.className = 'carousel-item col-md-4 active'; 
            }else{
            iDiv.className = 'row '; 
            }
            section.appendChild(iDiv);

            var figure = document.createElement('div');
            iDiv.id = 'image';
            figure.className = 'col-lg-6 py-3 order-2 order-lg-1';
            iDiv.appendChild(figure);

            var imagen = document.createElement('img');
            imagen.src = picture;
            figure.appendChild(imagen);

            var txtProd = document.createElement('div');
            txtProd.className = 'd-flex align-items-center col-lg-6 col-xl-5 pl-lg-5 mb-5 order-1 order-lg-2';
            iDiv.appendChild(txtProd);

            var contenedor = document.createElement('div');
            txtProd.appendChild(contenedor);

            var title_prod = document.createElement('h1');
            title_prod.className = 'mb-4';
            var node = document.createTextNode(title);
            title_prod.appendChild(node);
            contenedor.appendChild(title_prod);

            var indProd = document.createElement('div');
            indProd.className = 'd-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4';
            contenedor.appendChild(indProd);

            var cate_prod = document.createElement('span');
            cate_prod.className = 'badge badge-primary';
            var node = document.createTextNode(category);
            cate_prod.appendChild(node);
            indProd.appendChild(cate_prod);

            var contReg = document.createElement('div');
            contReg.className = 'd-flex align-items-center';
            indProd.appendChild(contReg);

            var textRegis = document.createElement('span');
            textRegis.className = 'badge badge-light';
            var node = document.createTextNode(registered);
            textRegis.appendChild(node);
            contReg.appendChild(textRegis);

            var descripcion_prod = document.createElement('p');
            descripcion_prod.className = 'mb-4 text-muted';
            var node = document.createTextNode(about);
            descripcion_prod.appendChild(node);
            contenedor.appendChild(descripcion_prod);

            var vinculo = document.createElement('a');
            vinculo.href = 'detalle.html#'+_id;
            vinculo.className = 'card-vinculo';
            card.appendChild(vinculo);

        }
    }
