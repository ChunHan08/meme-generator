function generateMeme(image, topText, bottomText, topTextSize, bottomTextSize) {
  const canvas = document.getElementById('meme-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.textAlign = 'center';
  let fontSize = canvas.width * topTextSize;
  ctx.font = `${fontSize}px Impact`;
  ctx.lineWidth = fontSize / 20;
  ctx.textBaseline = 'top';
  topText.split('\n').forEach((t, i) => {
    ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
  });
  fontSize = canvas.width * bottomTextSize;
  ctx.font = `${fontSize}px Impact`;
  ctx.lineWidth = fontSize / 20;
  ctx.textBaseline = 'bottom';
  bottomText.split('\n').reverse().forEach((t, i) => {
    ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const topText = document.getElementById('top-text');
  const bottomText = document.getElementById('bottom-text');
  const topTextSize = document.getElementById('top-text-size-input');
  const bottomTextSize = document.getElementById('bottom-text-size-input');
  const imageInput = document.getElementById('image-input');
  const generateBtn = document.getElementById('generate-btn');
  topTextInput.value = 'Top\nValue';
  bottomTextInput.value = 'Bottom\nValue';
});
generateBtn.addEventListener('click', () => {
  const reader = new FileReader();
  reader.readAsDataURL(imageInput.files[0])
});
FileReader.onload = () => {
  const img = new Image();
  img.src = reader.result;
  img.onload = () => {
    generateMeme(img, topTextInput.value, bottomTextInput.value, topTextInputSize.value, bottomTextInputSize.value);
  }
}