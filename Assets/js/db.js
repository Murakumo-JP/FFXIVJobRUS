function FILL_DB_VALUES(DB) {
	$('*[data-dbvalue]').each(function () {
		var key = this.getAttribute('data-dbvalue');
		if (typeof DB[key] == 'undefined') {
			this.innerHTML = '<span class="text_error">Value not founded [' + key + ']</span>';
         return
		}
		this.innerHTML = DB[key];
	});
}