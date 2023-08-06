const htmlInput = document.getElementById("htmlInput");
const cssInput = document.getElementById("cssInput");
const previewFrame = document.getElementById("previewFrame");

function updatePreview() {
  const htmlContent = htmlInput.value;
  const cssContent = `<style>${cssInput.value}</style>`;

  const combinedContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${cssContent}
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `;

  previewFrame.srcdoc = combinedContent;
}

htmlInput.addEventListener("input", updatePreview);
cssInput.addEventListener("input", updatePreview);

// Initial preview update
updatePreview();