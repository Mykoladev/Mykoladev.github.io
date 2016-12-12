// $(document).ready(function() { 
// $('.slider_top').owlCarousel({
//     center: true,
//     items:1,
//     loop:true,
//     margin:10,
//     // responsive:{
//     //     600:{
//     //         items:4
//     //     }
//     // }
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
   