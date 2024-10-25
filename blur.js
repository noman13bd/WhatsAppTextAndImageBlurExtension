// Function to add the blur effect
function blurWhatsAppChats() {
    // Select all elements that display recent chat messages
    // const recentChatTexts = document.querySelectorAll("._1hI5g ._1QtFq");
    const recentChatTexts = document.querySelectorAll("._ak8j");
    console.log("inside blurWhatsAppChats "+recentChatTexts);
    recentChatTexts.forEach(chat => {
      chat.classList.add("blurred-text");
      console.log("as" +chat);
    });
  }
  console.log("WhatsApp Text Blur Extension is running!");
  // Run the function on page load and every time there's a DOM update
  blurWhatsAppChats();
  
  // Optional: Use a MutationObserver to reapply blur if new chats are loaded dynamically
  const observer = new MutationObserver(blurWhatsAppChats);
  observer.observe(document.body, { childList: true, subtree: true });
  