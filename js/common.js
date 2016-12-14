// $(document).ready(function() { 
// $('.slider_top').owlCarousel({
//     items:1,
//     lazyLoad:true,
//     loop:true,
//     margin:10
// });
// $('.slide_goods').owlCarousel({
//     items:4,
//     lazyLoad:true,
//     loop:true,
//     margin:10  

// });
// });
var moscow_map  
    ymaps.ready(function(){
        moscow_map = new ymaps.Map("map_section", {
            center: [55.76, 37.64],
            zoom: 10,
        });
 moscow_map.behaviors.disable('scrollZoom');
    });
   