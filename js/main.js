//JavaScript Document



(() => {
 console.log("svg script file laded");
 let
    svgs = document.querySelector("svg");

 function logThisSvg(){
        console.log(this.id);
    }

 function bigger(){
       this.style.width= '100%';
    }

 function small(){
      this.style.width= '80%';
    }
svgs.addEventListener('click', logThisSvg);
svgs.addEventListener('mouseover', bigger);
svgs.addEventListener('mouseout', small);

})();
