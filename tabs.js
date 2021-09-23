const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
   const thisTab = e.currentTarget;
   const matchingPanel = e.currentTarget.id;
   
   // hide all tab panels
   tabPanels.forEach(panel => panel.hidden = true);
   // mark all tabs as unselected
   tabButtons.forEach(tab => tab.setAttribute('aria-selected', false));
   // mark this tab as selected
   thisTab.setAttribute('aria-selected', true);   
   // show this tab's panel
   //const thisTabPanel = tabs.querySelector(`[aria-labelledby="${matchingPanel}"]`);
   const thisTabPanel = tabPanels.find(panel => 
      panel.getAttribute('aria-labelledby') === matchingPanel);
   thisTabPanel.hidden = false;
}

tabButtons.forEach(button => 
    button.addEventListener('click', handleTabClick));