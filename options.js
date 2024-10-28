document.addEventListener("DOMContentLoaded", () => {
    const blurTextCheckbox = document.getElementById("blurText");
    const blurImagesCheckbox = document.getElementById("blurImages");
    const saveButton = document.getElementById("saveSettings");
  
    // Load saved settings from Chrome storage
    chrome.storage.sync.get(["blurText", "blurImages"], (settings) => {
      blurTextCheckbox.checked = settings.blurText !== false;  // Default to true
      blurImagesCheckbox.checked = settings.blurImages !== false;  // Default to true
    });
  
    // Save settings to Chrome storage
    saveButton.addEventListener("click", () => {
      chrome.storage.sync.set({
        blurText: blurTextCheckbox.checked,
        blurImages: blurImagesCheckbox.checked
      }, () => {
        alert("Settings saved!");
      });
    });
  });
  