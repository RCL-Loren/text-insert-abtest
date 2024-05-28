let abTestState = {};

chrome.runtime.onMessage.addListener(function(request) {
    if (request.action === 'abTestInsert') {
        const { name, templates } = request.data;
        if (!abTestState[name]) {
            abTestState[name] = 0;
        }
        const templateToInsert = templates[abTestState[name] % 2];
        abTestState[name]++;
        insertTemplate(templateToInsert);
    } else if (request.action === 'insertTemplate') {
        insertTemplate(request.title);
    }
});

function insertTemplate(title) {
    chrome.storage.local.get('templates', function(data) {
        const template = data.templates.find(t => t.title === title);
        if (template) {
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'insertText', text: template.text })
                    .then(() => console.log('Message sent successfully'))
                    .catch(error => console.error('Error sending message:', error));
            });
        }
    });
}