// language-switcher.js

// Object containing text for each language
const languageTexts = {
    'en': {
      'welcome': 'Welcome to our website!',
      // Add more text identifiers and their English translations here
    },
    'vi': {
      'welcome': 'Chào mừng đến với trang web của chúng tôi!',
      // Add more text identifiers and their Vietnamese translations here
    }
  };
  
  // Function to change the language
  function changeLanguage(lang) {
    document.querySelectorAll('[data-lang-text]').forEach(function(el) {
      var textId = el.getAttribute('data-lang-text');
      el.textContent = languageTexts[lang][textId];
    });
  }
  

  function copyCode() {
    // Get the text from the code block
    var code = document.getElementById('code-block').innerText;
    // Create a temporary textarea element
    var textarea = document.createElement('textarea');
    // Set the value of the textarea to the code
    textarea.value = code;
    // Append the textarea to the document body (it doesn't have to be visible)
    document.body.appendChild(textarea);
    // Select the text inside the textarea
    textarea.select();
    // Copy the text to the clipboard
    document.execCommand('copy');
    // Remove the temporary textarea
    document.body.removeChild(textarea);
    // Optionally, alert the user that the text has been copied
    alert('Code copied to clipboard!');
  }

  // Event listener for the Copy button
document.addEventListener('DOMContentLoaded', function() {
  var copyBtn = document.getElementById('copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', copyCode);
  }
});