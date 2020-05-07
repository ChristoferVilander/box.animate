(function () {
   
    var box = document.getElementById('box'),
        start = document.getElementById('start'),
        reverse = document.getElementById('reverse');
 
    start.addEventListener('click', function() {
 
        var player = box.animate([{
            transform: 'rotate(0deg)' + 'scale(1.0)'
        }, {
            transform: 'rotate(180deg)' + 'scale(1.4)'
        }, {
            transform: 'rotate(360deg)' + 'scale(1.0)'
        }
 
        ], {
        duration: 1000,
        iterations: 1
             
        });
          reverse.addEventListener('click', function() {
          player.reverse();
    }, false);
 
    }, false);
    
})();
