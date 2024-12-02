javascript:(function(){
	debugger;
	var text = document.body.innerText;
	const regex = /Order Placed:\s+(.*)\s+Amazon.com order number/;
	var date = regex.exec(text);
	var dateformatted = new Date(date[1]);
	var fileName = formatDate(dateformatted);
	document.title = fileName + ' Amazon - XXX';  
	window.print();

	function formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) 
			month = '0' + month;
		if (day.length < 2) 
			day = '0' + day;

		return [year, month, day].join('');
	}
})();
