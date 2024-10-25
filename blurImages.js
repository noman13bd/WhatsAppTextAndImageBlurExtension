// Function to blur all images in the chat window by default
function blurChatImages() {
    const chatImages = document.querySelectorAll("img");  // Adjust selector as needed
    console.log(chatImages);
    chatImages.forEach((img) => {
      console.log(img);
      img.classList.add("blurred-image");
      
      // Add a click event to toggle blur
      img.addEventListener("click", (event) => {
        event.stopPropagation();
        img.classList.toggle("blurred-image");
      });
    });
  }
  
  // Run the function initially and on page updates
  blurChatImages();
  
  // Use MutationObserver to reapply blur to dynamically loaded images
  const imageObserver = new MutationObserver(blurChatImages);
  imageObserver.observe(document.body, { childList: true, subtree: true });
  