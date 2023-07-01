// document.addEventListener('DOMContentLoaded', () => {
//   const img = document.getElementById('image');
//   img.addEventListener('click', function(event) {
//     document.images['im'].addEventListener("click",function(){
//       this.src= this.src.search("change")!=-1 ? "icone_menu.png" : "icone_menu_change.png";
//     },false)
//   })
// }

// )
 

// CORRECTION

document.getElementById('image').addEventListener('click', function() {
   
  let path = './images/'
  let image = document.getElementById('image')
  let srcImage = image.getAttribute('src')
  let count = 0
  console.log(srcImage)
  switch (srcImage) {
      case path + 'image0.png':
          image.src = path + `image${count}.png`
          break;
      case path + 'image1.png':
          image.src = path + 'image2.png'
          break;
      case path + 'image2.png':
          image.src = path + 'image3.png'
          break;
      default:
          image.src = path + 'image0.png'
          break;
  }
});



// VERSION EVA

// document.addEventListener('DOMContentLoaded', () => {
//   let element = document.getElementById('image');
  
//   let count = 0;

//   element.addEventListener('click', () => {
//       if (count <= 6) {
//           element.src = `./images/image${count}.png`;
//       } else {
//           count = 0;
//           element.src = `./images/image${count}.png`;
//       }
//       count++;
//   })
// })