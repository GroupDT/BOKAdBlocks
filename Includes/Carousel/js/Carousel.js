    
    $(document).ready(function () {
    	
    	//var slides = document.querySelectorAll("#carousel > div");    // Only works on new browsers
    	var carousel = document.getElementById('carousel');
    	var carousel_nodes    = carousel.childNodes;
    	var carousel_slides   = [];
    	var caroucel_zinx     = 5000;
    	var carousel_slide_id = 0;
    	
        // Put all slides into order
        for (var i = 0; i<carousel_nodes.length; i++) {
           
            // If the element is a division then action
            if (carousel_nodes[i].nodeName == "DIV") {
                                
                // Action slide
                x = caroucel_zinx - (i * 3);
                carousel_nodes[i].style.zIndex = x;
                
                // Add element into slides array
                carousel_slides.push(carousel_nodes[i]);
            }
            
        }
        
        // Reset variables
        carousel_slide_id = 1;
        caroucel_zinx = 10000;
        
        // Kick off loop
        setInterval(transition_slide, 5000);
        
        // Transition function
        function transition_slide () {
            
        	// If paused skip
        	if (carousel.getAttribute("data-status") == "0") { return; }
        	
            // Increment zinx
            caroucel_zinx = caroucel_zinx + 50;
            
            // If slide at end, then restart
            if (carousel_slide_id == carousel_slides.length) { carousel_slide_id = 0; }
            
            // Set selected slide to top
            carousel_slides[carousel_slide_id].style.zIndex = caroucel_zinx;
            
            // Transition slide in
            carousel_slides[carousel_slide_id].style.display = 'none';
            $(carousel_slides[carousel_slide_id]).fadeIn("slow");
            
            // Increment slide id
            carousel_slide_id = (parseInt(carousel_slide_id) + 1);
        }
        
    });
    
    // Pause/Play carousel
    function change_carousel_status (status) {
        var carousel_status = document.getElementById('carousel').setAttribute("data-status", status);
        var carousel_play = document.getElementById('carousel-play');
        var carousel_pause = document.getElementById('carousel-pause');
        
        if (status == 1) {
        	carousel_play.style.display = 'none';
        	carousel_pause.style.display = 'inline';
        } else {
        	carousel_play.style.display = 'inline';
            carousel_pause.style.display = 'none';
        }
    }
