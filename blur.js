// Function to add the blur effect to chat texts if enabled
function blurWhatsAppChats() {
  chrome.storage.sync.get("blurText", (settings) => {
    if (settings.blurText !== false) {  // Apply blur if setting is true or undefined
      const recentChatTexts = document.querySelectorAll("._ak8k");
      recentChatTexts.forEach(chat => {
        chat.classList.add("blurred-text");
      });
    }
  });
}

// Run the function initially and on page updates
blurWhatsAppChats();

// Observer to reapply blur on dynamic changes
const textObserver = new MutationObserver(blurWhatsAppChats);
textObserver.observe(document.body, { childList: true, subtree: true });
