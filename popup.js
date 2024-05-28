/// <reference types="chrome"/>

document.addEventListener('DOMContentLoaded', function() {
    const templateList = document.getElementById('template-list');
    const abTestToggle = document.getElementById('ab-test-toggle');
    const abTestName = document.getElementById('ab-test-name');
    const insertButton = document.getElementById('insert-button');
    const addTemplateButton = document.getElementById('add-template-button');
    const addTemplatePopup = document.getElementById('add-template-popup');
    const addButton = document.getElementById('add-button');
    const templateText = document.getElementById('template-text');
    const templateTitle = document.getElementById('template-title');

    // Load templates from storage and populate the list
    chrome.storage.local.get('templates', function(data) {
        const templates = data.templates || [];
        templates.forEach(template => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `<input type="checkbox" value="${template.title}">${template.title}`;
            templateList.appendChild(listItem);
        });
    });

    // Insert button click handler
    insertButton.addEventListener('click', function() {
        const checkedItems = templateList.querySelectorAll('input[type="checkbox"]:checked');
        const templateTitles = Array.from(checkedItems).map(item => item.value);
        const abTest = abTestToggle.checked;

        if (abTest && templateTitles.length === 2) {
            const abTestData = {
                name: abTestName.value,
                templates: templateTitles
            };
            chrome.runtime.sendMessage({ action: 'abTestInsert', data: abTestData })
                .then(() => console.log('Message sent successfully'))
                .catch(error => console.error('Error sending message:', error));
        } else if (templateTitles.length === 1) {
            chrome.runtime.sendMessage({ action: 'insertTemplate', title: templateTitles[0] })
                .then(() => console.log('Message sent successfully'))
                .catch(error => console.error('Error sending message:', error));
        } else {
            alert('Please select one or two templates.');
        }
    });

    // Add Template button click handler
    addTemplateButton.addEventListener('click', function() {
        addTemplatePopup.style.display = 'block';
    });

    // Add button click handler
    addButton.addEventListener('click', function() {
        const title = templateTitle.value;
        const text = templateText.value;

        if (title && text) {
            chrome.storage.local.get('templates', function(data) {
                const templates = data.templates || [];
                templates.push({ title, text });
                chrome.storage.local.set({ templates }, function() {
                    location.reload();
                });
            });
        } else {
            alert('Please enter both title and text.');
        }
    });
});