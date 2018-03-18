r = Math.floor(Math.random() * 256),g = Math.floor(Math.random() * 256),b = Math.floor(Math.random() * 256);

function pageScrollHelper(who, order) {
	rgb = who.style.backgroundColor;
    	if (rgb === ""){
    		//all[i].style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    		who.style.backgroundColor = 'rgb(50, 80, 109)';
    		rgb = who.style.backgroundColor;
    		//console.log(document.body.style.backgroundColor);
    	}
    	rgb = rgb.slice(4,rgb.length - 1).split(', ');

    	if (order == 0){
    		rgb[0] = parseInt(rgb[0]);
    		rgb[1] = parseInt(rgb[1]);
    		rgb[2] = parseInt(rgb[2]);
    	}else{
    		temp = rgb[0];
    		rgb[0] = parseInt(rgb[1]);
    		rgb[1] = parseInt(rgb[2]);
    		rgb[2] = parseInt(temp);
    	}
    	
    	//console.log(rgb);

    	if (r > rgb[0]){
    		rgb[0] += 1;
    		//console.log('r', 1, r, rgb[0]);
	    }else if (r < rgb[0]){
	    	rgb[0] -= 1;
	    	//console.log('r', 2, r, rgb[0]);
	    }

	    if (g > rgb[1]){
	    	rgb[1] += 1;
	    	//console.log('g', 1, g, rgb[1]);
	    }else if (g < rgb[1]){
	    	rgb[1] -= 1;
	    	//console.log('g', 2, g, rgb[1]);
	    }

	    if (b > rgb[2]){
	    	rgb[2] += 1;
	    	//console.log('b', 1, b, rgb[2]);
	    }else if (b < rgb[2]){
	    	rgb[2] -= 1;
	    	//console.log('b', 2, b, rgb[2]);
	    }

	    if (r == rgb[0]){
	    	r = Math.floor(Math.random() * 256);
	    	//console.log('r', 3, r, rgb[0]);
	    }
	    if (g == rgb[1]){
	    	g = Math.floor(Math.random() * 256);
	    	//console.log('g', 3, g, rgb[1]);
	    }
	    if (b == rgb[2]){
	    	b = Math.floor(Math.random() * 256);
	    	//console.log('b', 3, b, rgb[2]);
	    }

	    ////console.log(rgb)
	    if (order == 0){
	    	who.style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
	    }else{
	    	who.style.backgroundColor = 'rgb(' + rgb[2] + ',' + rgb[0] + ',' + rgb[1] + ')';
	    }
	    
}
function pageScroll() {
    window.scrollBy(0,1);
    var all = document.getElementsByTagName("div");
    scrolldelay = setTimeout(pageScroll(),10);

}