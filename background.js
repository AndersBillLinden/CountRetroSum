chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const divs = document.getElementsByClassName("vote-area");
      let sum = 0;

      for (let i = 0; i < divs.length; i++) {
        const value = parseInt(divs[i].textContent || divs[i].innerHTML, 10);
        if (!isNaN(value)) {
          sum += value;
        }
      }

      alert(sum);
    }
  });
});
