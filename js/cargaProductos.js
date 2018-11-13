    var section = document.querySelector('.carousel-inner');

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
        listadoProd(actual_JSON);
    });

    function listadoProd(jsonObj) {
      var articulo = jsonObj;

      for(var i = 0; i < articulo.length; i++) {

            var _id = articulo[i]._id;
            var category = articulo[i].category;
            var picture = articulo[i].picture;
            var title = articulo[i].title;

            var iDiv = document.createElement('div');
            iDiv.id = 'block';
            if(i == 0){
            iDiv.className = 'carousel-item col-md-4 active'; 
            }else{
            iDiv.className = 'carousel-item col-md-4 '; 

            }
            section.appendChild(iDiv);

            var card = document.createElement('div');
            card.id = 'card';
            card.className = 'card';
            iDiv.appendChild(card);

            var vinculo = document.createElement('a');
            vinculo.href = 'detalle.html#'+_id;
            vinculo.className = 'card-vinculo';
            card.appendChild(vinculo);

            var img_ = document.createElement('img');
            img_.src = picture;
            img_.className = 'card-img-top img-fluid';
            vinculo.appendChild(img_);

            var card_body = document.createElement('div');
            card_body.className = 'card-body';
            vinculo.appendChild(card_body);
            
            var text_info = document.createElement('span');
            text_info.className = 'badge badge-primary';
            var node = document.createTextNode(category);
            text_info.appendChild(node);
            card_body.appendChild(text_info);

            var title_card = document.createElement('h4');
            title_card.className = 'card-title';
            var node = document.createTextNode(title);
            title_card.appendChild(node);
            card_body.appendChild(title_card);

        }
    }
