(function() {
	if (window.hasRun) {
		return;
	}
	window.hasRun = true;

	function trabalharAbas(abas) {
		var mail = "mailto:?subject=Simple Tab Exporter&body=Those are the tabs exported by 'Simple Tab Exporter':"
		for (let aba of abas) {
			if (aba.url.indexOf("moz-extension") !== -1 || aba.url.indexOf("about:") !== -1) {
				continue;
			}
			var p = document.createElement("p"); 
  			var conteudo = document.createTextNode(aba.url); 
  			mail = mail.concat("%0D%0A"+aba.url);
  			p.appendChild(conteudo);
  			document.body.appendChild(p);
		}
		var elem = document.getElementById("mail"); 
		elem.href = mail;
	}

	var abas = browser.tabs.query({currentWindow: true});
	abas.then(trabalharAbas);
})();