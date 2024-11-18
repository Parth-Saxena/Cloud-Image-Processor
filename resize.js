

const dropContainer = document.getElementById("dropcontainer");
const preview = document.getElementById('image-preview');
const fileInput = document.getElementById("images");
const fileNameElement = document.createElement("p");

dropContainer.appendChild(fileNameElement);

dropContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropContainer.classList.add("drag-active");
}, false);

dropContainer.addEventListener("dragleave", () => {
  dropContainer.classList.remove("drag-active");
});

dropContainer.addEventListener("drop", (e) => {
  e.preventDefault();
  dropContainer.classList.remove("drag-active");

  const files = e.dataTransfer.files;
  const file = files[0];
  const fileName = file.name;

  fileNameElement.textContent = `File: ${fileName}`;

  const reader = new FileReader();

  reader.onload = (event) => {
    const img = document.createElement("img");
    img.src = event.target.result;
    preview.appendChild(img);
  };

  reader.readAsDataURL(file);

  fileInput.files = e.dataTransfer.files;
});

const uploadButton = document.getElementById("uploadbtn"); 

uploadButton.addEventListener("click", () => {
  fileNameElement.textContent = "No File Selected"; 
  preview.innerHTML = ''; 
  fileInput.value = ''; 
  fileInput.type = ''; 
  fileInput.type = 'file'; 
});