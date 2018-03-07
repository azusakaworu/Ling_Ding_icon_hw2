//JavaScript Document



(() => {
 console.log("svg script file laded");
 let
    svgs = document.querySelectorAll("svg");//add All after querySelector

 function logThisSvg(){
        console.log(this.id);
    }

 function bigger(){
       this.style.width= '100%';
    }

 function small(){
      this.style.width= '80%';
    }
	
svgs.forEach((svg) => {//add for each 
	svg.addEventListener('click', logThisSvg);
	svg.addEventListener('mouseover', bigger);
    svg.addEventListener('mouseout', small);
});
//svgs.addEventListener('click', logThisSvg);
//svgs.addEventListener('mouseover', bigger);
//svgs.addEventListener('mouseout', small);

})();
