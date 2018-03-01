//JavaScript Document



(() => {
 console.log("svg script file laded");
 let
    svgs = document.querySelectorALL("svg");

 function logThisSvg(){
        console.log(this.id);
    }

 function bigger(){
       this.style.width="100%";
    }

 function small(){
      this.style.width= "40%";
    }
 svgs.forEach(svg =>
	 svg.addEventListener("click", logThisSvg);
	 svg.addEventListener("mouseover", bigger);
   svg.addEventListener("mouseout", small));

})();
