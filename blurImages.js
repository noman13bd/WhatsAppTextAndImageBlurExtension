// Function to blur all images in the chat window if enabled
function blurChatImages() {
  chrome.storage.sync.get("blurImages", (settings) => {
    if (settings.blurImages !== false) {  // Apply blur if setting is true or undefined
      const chatImages = document.querySelectorAll("img");

      chatImages.forEach((img) => {
        img.classList.add("blurred-image");
        img.addEventListener("click", (event) => {
          event.stopPropagation();
          img.classList.toggle("blurred-image");
        });
      });
    }
  });
}

// Run the function initially and on page updates
blurChatImages();

// Observer to reapply blur on dynamic changes
const imageObserver = new MutationObserver(blurChatImages);
imageObserver.observe(document.body, { childList: true, subtree: true });
