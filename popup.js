document.addEventListener('DOMContentLoaded', function() {
	var link = document.getElementById('TopDvacherName');
	chrome.storage.sync.get("TopDvacherName",function(res) {
		link.value=res.TopDvacherName
		});
    // onClick's logic below:
    link.addEventListener('change', () => {
		var TopDvacherName = document.getElementById('TopDvacherName');
		console.log(TopDvacherName);
		if (TopDvacherName.value)
			chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
				console.log('Settings saved');
			});
			chrome.storage.sync.set({
				"TopDvacherName": TopDvacherName.value
			});
		chrome.storage.sync.get("TopDvacherName",function(res) {
			console.log(res.TopDvacherName)
			});
    });
});
