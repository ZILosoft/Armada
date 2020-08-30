document
	.querySelectorAll("figure")
	.forEach(figure => {
		var button = document.createElement('button');
		button.style.setProperty('margin-left', '4px');
		button.style.setProperty('padding', '0 4px');
		button.style.setProperty('height', '12px');
		button.style.setProperty('font-size', '8px');
		button.style.setProperty('position', 'relative');
		button.style.setProperty('top', '-2px');
		button.style.setProperty('font-weight', 'bold');
		button.style.setProperty('background', 'var(--theme_default_icon)');
		button.style.setProperty('color', 'rgb(236, 236, 236)');
		button.style.setProperty('border', 'none');
		button.style.setProperty('border-radius', '1.5px');
		
		var figcaption = figure.querySelector("figcaption");
		var as = figcaption.querySelectorAll("a");
		var link = as[0].href;
		var linkSplitted = link.split(".");
		button.textContent = 'Top ' + linkSplitted[linkSplitted.length - 1];

		button.onclick = function() {
			var request = new XMLHttpRequest();
			request.timeout = 3000;
			request.open("POST", "https://topwebm.antiadmin.ru/sendtop", true);
			request.setRequestHeader('Content-Type', 'application/json');
			
			var topDvacherName;
			chrome.storage.sync.get(['TopDvacherName'], function (result) {
				if (result.TopDvacherName == undefined || result.TopDvacherName == null || result.TopDvacherName == '')
					topDvacherName = 'Анонимус';
				else
					topDvacherName = '@' + result.TopDvacherName;
				request.send("{\"link\": \"" + link + "\", \"sender\": \"" + topDvacherName + "\"}");
			});

			
			request.onerror = function () {
				alert('Не удалось отправить top webm в телегу из-за ошибки.');
			};
			request.ontimeout = function () {
				alert('Не удалось отправить top webm в телегу из-за таймаута запроса.');
			};
		};
		as[1].insertAdjacentElement("afterend", button);
	});