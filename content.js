chrome.runtime.onMessage.addListener(function(request) {
    if (request.action === 'insertText') {
        insertText(request.text);
    }
});

function insertText(text) {
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'INPUT')) {
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;
        activeElement.value = activeElement.value.slice(0, start) + text + activeElement.value.slice(end);
        activeElement.selectionStart = activeElement.selectionEnd = start + text.length;
    } else {
        alert('Please focus on a text input or textarea to insert the template.');
    }
}
