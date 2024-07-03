

function generateREF() {
    var count = 0;
    return function () {
      return count++;
    };
  }
   var ref = generateREF()
  
  function creatProduct( cathegory , model , year , price , image ) { 
    return {
        ref : ref() , 
        cathegory : cathegory ,
        model : model ,
        year : year ,
        price : price , 
        image : image 
    }
    }


    function each(array, func) {
      for (var i = 0; i < array.length; i++) {
          func(array[i], i);
      }
  }
  
  function map(array, f) {
      var acc = [];
      each(array, function (element, i) {
          acc.push(f(element, i));
      });
      return acc;
  }
  
  function filter(array, predicate) {
      var acc = [];
      each(array, function (element, index) {
          if (predicate(element, index)) {
              acc.push(element);
          }
      });
      return acc;
  }

    var a = creatProduct ('Hot Wheels',' Chevrolet Camaro' , 1969 , 150 , 'https://www.lesminiatures.com/wp-content/uploads/catalog/product/6766.jpg')
    var b = creatProduct ('Hot Wheels',' Dodge Charger R/T' , 1970 , 150 , 'https://cdn11.bigcommerce.com/s-yrkef1j7/images/stencil/1280x1280/products/34774/152521/QQ20230728090416__83211.1690560342.png?c=2')
    var c = creatProduct ('Matchbox',' Chevy Bel Air' , 1957 , 160 , 'https://www.voiture-miniature.com/images/images_miniatures/m2-machines-chevrolet-bel-air-dunkelrosa-weiss-1957-1.jpg')
    var d = creatProduct ('Matchbox',' Land Rover Series II' , 1965 , 155 , 'https://i0.wp.com/matchboxforum.co.uk/wp-content/uploads/2020/10/MB1184-03.jpg?ssl=1')
    var e = creatProduct ('Corgi',' James Bond Aston Martin DB5' , 1969 , 210 , 'https://www.alldiecast.us/images/images_miniatures/131888.jpg')
    var f = creatProduct ('Corgi',' Volkswagen Beetle' , 1960 , 145 , 'https://i.ebayimg.com/images/g/u5gAAOSwT6FkCISE/s-l1200.jpg ')
    var g = creatProduct ('Revell',' Ford 5 Window Coupe' , 1932 , 280 , 'https://m.media-amazon.com/images/I/71zWsa7UL0L.jpg')
    var h = creatProduct ('Revell','  Dodge Charger R/T' , 1968 , 150 , 'https://i.ebayimg.com/images/g/IkMAAOSwqV1ljxFn/s-l1200.webp')
    var i = creatProduct ('AMT',' Ford Mustang' , 1966 , 160 , 'https://www.voiture-miniature.com/images/images_miniatures/greenlight-greenlight-ford-mustang-matt-schwarz-weiss-creed-ii-1967-1.jpg')
    var j = creatProduct ('AMT',' Ford Coupe' , 1940 , 190 , 'https://i.ebayimg.com/images/g/G7YAAOSwylRhZ58q/s-l1600.jpg')
    var k = creatProduct ('Scalextric',' Chevrolet Camaro Z28' , 1969 , 170 , 'https://www.voiture-miniature.com/images/images_miniatures/acme-acme-chevrolet-camaro-z28-metallic-blau-schwarz-1969-1.jpg')
    var l = creatProduct ('Scalextric',' Ford Mustang' , 1964 , 150 , 'https://www.voiture-miniature.com/images/images_miniatures/welly-welly-ford-mustang-coupe-noire-1964-1.jpg')
    var m = creatProduct ('Carrera',' Chevrolet Corvette' , 1957 , 180 , 'https://m.media-amazon.com/images/I/41W9wJPZbuL._AC_UF1000,1000_QL80_.jpg')
    var n = creatProduct ('Carrera',' Plymouth Superbird' , 1970 , 160 , 'https://static.summitracing.com/global/images/prod/xlarge/rla-amm1137_bh_xl.jpg')


    var cars = [a,b,c,d,e,f,g,h,i,j,k,l,m,n]
   
   
    function MakeSomthing(array) {
      var obj = {}
      obj.oldest = oldest(array)
      obj.goodPrice = goodPrice(array)
      obj.modelDisp =  modelDisp(array)
    
      return obj ; 
  }


    var oldest = function  (array) {
      var oldestCars = array[0];
      each(array, function (elem) {
          if (oldestCars.year > elem.year ) {
            oldestCars = elem ;
          }
      });
      return oldestCars 
  }


   var goodPrice = function (array) {
    return filter(array, function (elem) {
        return elem.price <= 150 ;
    });
};


   var modelDisp = function (array) {
    return map(array, function (elem) {
      return elem.model;
  });
};

$('h1').css('color','blue').css('text-align', 'center').css("font-size", "24px").css("color", "blue").css("font-family", "'Times New Roman', sans-serif")

let az= `<img src=${a.image} id="az">`
 $('#shop').append(az)
 $('#az').css( {
  "width": "200px",
  "height": "200px"
 })
 
 let bz= `<img src=${b.image} id="bz">`
 $('#shop').append(bz)
 $('#bz').css( {
  "width": "200px",
  "height": "200px"
 })


 let cz= `<img src=${c.image} id="cz">`
 $('#shop').append(cz)
 $('#cz').css( {
  "width": "200px",
  "height": "200px"
 })

 let dz= `<img src=${d.image} id="dz">`
 $('#shop').append(dz)
 $('#dz').css( {
  "width": "200px",
  "height": "200px" 
 })

 let ez= `<img src=${e.image} id="ez">`
 $('#shop2').append(ez)
 $('#ez').css( {
  "width": "200px",
  "height": "200px" 
 })

 let fz= `<img src=${f.image} id="fz">`
 $('#shop2').append(fz)
 $('#fz').css( {
  "width": "200px",
  "height": "200px" 
 })

 let gz= `<img src=${g.image} id="gz">`
 $('#shop2').append(gz)
 $('#gz').css( {
  "width": "200px",
  "height": "200px" 
 })

 let hz= `<img src=${h.image} id="hz">`
 $('#shop2').append(hz)
 $('#hz').css( {
  "width": "200px",
  "height": "200px" 
 })

 let iz= `<img src=${i.image} id="iz">`
 $('#shop3').append(iz)
 $('#iz').css( {
  "width": "200px",
  "height": "200px" 
 })

 let jz= `<img src=${j.image} id="jz">`
 $('#shop3').append(jz)
 $('#jz').css( {
  "width": "200px",
  "height": "200px" 
 })

 let kz= `<img src=${k.image} id="kz">`
 $('#shop3').append(kz)
 $('#kz').css( {
  "width": "200px",
  "height": "200px" 
 })

 let lz= `<img src=${l.image} id="lz">`
 $('#shop3').append(lz)
 $('#lz').css( {
  "width": "200px",
  "height": "200px" 
 })
 

 let mz= `<img src=${m.image} id="mz">`
 $('#shop4').append(mz)
 $('#mz').css( {
  "width": "200px",
  "height": "200px" 
 })

 let nz= `<img src=${n.image} id="nz">`
 $('#shop4').append(nz)
 $('#nz').css( {
  "width": "200px",
  "height": "200px" 
 })


$("#pa").append(a.price + ' TND')
$("#pb").append(b.price + ' TND')
$("#pc").append(c.price + ' TND')
$("#pd").append(d.price + ' TND')
$("#pe").append(e.price + ' TND')
$("#pf").append(f.price + ' TND')
$("#pg").append(g.price + ' TND')
$("#ph").append(h.price + ' TND')
$("#pi").append(i.price + ' TND')
$("#pj").append(j.price + ' TND')
$("#pk").append(k.price + ' TND')
$("#pl").append(l.price + ' TND')
$("#pm").append(m.price + ' TND')
$("#pn").append(n.price + ' TND')



 
 
   

