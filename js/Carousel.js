
    slide_id=0;
    
    $(document).ready(function () {

        zinx = 0;
        
        var slides = document.querySelectorAll("#carousel > div");
        
        for (var i = 0; i<slides.length; i++) {
            x = zinx + (i * 3);
            slides[i].style.zIndex = x;
        }
    
    
        slide_id = 0;
        zinx = 100;
        
        setInterval(transition_slide, 5000);
        
        
        function transition_slide () {
            
            // Increment zinx
            zinx = zinx + 50;
            
            // If slide at end, then restart
            if (slide_id == 4) { slide_id = 0; }
            
            // Set selected slide to top
            slides[slide_id].style.zIndex = zinx;
            
            // Transition slide in
            slides[slide_id].style.display = 'none';
            $(slides[slide_id]).fadeIn("slow");
            
            // Increment slide id
            slide_id = (parseInt(slide_id) + 1);
        }
        
    });
