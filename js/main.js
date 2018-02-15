(() => {
  console.log('svg script file laded');
  let svgs = document.querySelectorALL('svg');

   function logThisSVG(){
     console.log(this.id);
   }
  svg.forEach(svg ==> svg.addEventListener('click',logThisSVG));
})();
