    $(document).ready(function () {
        
        //var slides = document.querySelectorAll("#carousel > div");    // Only works on new browsers
        var carousel = document.getElementById('carousel');
        var nodes    = carousel.childNodes;
        var slides   = [];
        var zinx     = 0;
        var slide_id = 0;

        for (var i = 0; i<nodes.length; i++) {
           
            // If the element is a division then action
            if (nodes[i].nodeName == "DIV") {
                                
                // Action slide
                x = zinx + (i * 3);
                nodes[i].style.zIndex = x;
                
                // Add element into slides array
                slides.push(nodes[i]);
            }
            
        }
        
        // Reset variables
        slide_id = 0;
        zinx = 100;
        
        // Kick off loop
        setInterval(transition_slide, 5000);
        
        // Transition function
        function transition_slide () {
            
            // Increment zinx
            zinx = zinx + 50;
            
            // If slide at end, then restart
            if (slide_id == slides.length) { slide_id = 0; }
            
            // Set selected slide to top
            slides[slide_id].style.zIndex = zinx;
            
            // Transition slide in
            slides[slide_id].style.display = 'none';
            $(slides[slide_id]).fadeIn("slow");
            
            // Increment slide id
            slide_id = (parseInt(slide_id) + 1);
        }
        
    });
