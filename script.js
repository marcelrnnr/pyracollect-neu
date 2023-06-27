function showImageKlassisch(imageNumber) {
    var images = document.getElementsByClassName('imageKlassik');
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
  
    var selectedImage = document.getElementById('imageKlassik' + imageNumber);
    selectedImage.style.display = 'block';
  }

  function showImageWasser(imageNumber) {
    var images = document.getElementsByClassName('imageWasser');
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
  
    var selectedImage = document.getElementById('imageWasser' + imageNumber);
    selectedImage.style.display = 'block';
  }
  function showImageUmwelt(imageNumber) {
    var images = document.getElementsByClassName('imageUmwelt');
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
  
    var selectedImage = document.getElementById('imageUmwelt' + imageNumber);
    selectedImage.style.display = 'block';
  }