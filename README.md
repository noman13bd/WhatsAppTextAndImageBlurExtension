# WhatsApp Text and Image Blur Extension

A Chrome extension that enhances privacy on WhatsApp Web by blurring recent chat texts in the contact list and images in the current chat window. Users can toggle the blur effect on images with a single click, while recent chat texts remain blurred by default.

## Features

- Text Blur: Blurs recent chat preview texts in the contact list on WhatsApp Web.
- Image Blur: Blurs images in the current chat window by default.
- Toggle Blur on Images: Click on an image to toggle the blur effect on or off.

## Prerequisites

- Google Chrome browser
- Basic understanding of Chrome extensions (optional)

## Installation

1. Clone the Repository

git clone https://github.com/noman13bd/WhatsAppTextAndImageBlurExtension.git


2. Navigate to the Project Folder

cd whatsapp-web-blur-extension


3. Load the Extension in Chrome
    - Open Chrome and go to `chrome://extensions/`
    - Enable Developer mode (toggle in the top right corner)
    - Click Load unpacked and select the project folder

4. Open WhatsApp Web
    - Visit WhatsApp Web to see the extension in action

## Usage

- Recent Chat Text Blur: Recent chat texts in the WhatsApp Web contact list will be blurred by default.
- Chat Image Blur: Images in the chat window will also be blurred by default. To toggle the blur effect, click on any image; clicking again will reapply the blur.

## Project Structure


whatsapp-web-blur-extension/
├── manifest.json       # Extension manifest file
├── blur.js            # Script for blurring recent chat texts in the contact list
├── blurImages.js      # Script for blurring and toggling images in the chat window
├── blur.css           # Styles for blurring text and images
└── icons/             # Folder containing icons (optional)


## File Descriptions

- `manifest.json`: Specifies extension settings and permissions.
- `blur.js`: Applies a blur effect to recent chat texts in the contact list.
- `blurImages.js`: Applies and toggles the blur effect on images in the chat window.
- `blur.css`: Contains CSS classes that add the blur effect to texts and images.