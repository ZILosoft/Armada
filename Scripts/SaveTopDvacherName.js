function saveTopDvacherName() {
	var TopDvacherName = document.getElementById('TopDvacherName');
	chrome.storage.local.set({ 'TopDvacherName': TopDvacherName.textContent });
}