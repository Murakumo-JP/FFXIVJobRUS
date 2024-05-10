function FILL_DB_VALUES(DB) {
	function get_value_recursive(key, tempDB){
		let index = key.indexOf('.');
		if(index == -1){
			return tempDB[key];
		}
		let firstKey = key.substring(0, index);
		tempDB = tempDB[firstKey];
		key = key.substring(index + 1);
		return get_value_recursive(key, tempDB);
	}
	$('*[data-dbvalue]').each(function () {
		let key = this.getAttribute('data-dbvalue');
		let value = get_value_recursive(key, DB);
		if (typeof value == 'undefined') {
			this.innerHTML = '<span class="text_error">Value not founded [' + key + ']</span>';
         return
		}
		this.innerHTML = value;
	});
}

function FILL_DB_SKILLS(DB){
	$('*[db-skill]').each(function () {
		let key = this.getAttribute('db-skill');
		let skill = DB[key];
		let eorzeadb = skill['eorzeadb'] ? '<br/><a class="eorzeadb_link class_quest" href="'+skill['eorzeadb']+'">Задание на получение</a>' : '';
		let cost = skill['cost'] ? '<td class="cost">'+skill['cost']+'</td>' : '';
		this.innerHTML = `
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="job_skill_icon">
						<img src="`+skill['job_skill_icon']+`">
					</div>
				</div>
				<p>
					<strong>`+ skill['name'] +`</strong>
					`+eorzeadb+`
				</p>
			</div>
		</td>
		<td class="jobclass">
			<div class="jobclass_wrapper">
				<div class="jobclass_wrapper_icon">
					<img src="../Assets/img/DoWDoM/Job/`+skill['jobclass_icon']+`.png">
				</div>
				<p>Ур. `+skill['level']+`</p>
			</div>
		</td>
		<td class="classification">`+skill['classification']+`</td>
		<td class="cast">`+skill['cast']+`</td>
		<td class="recast">`+skill['recast']+`</td>
		`+cost+`
		<td class="distant_range">
			<div class="range">
				<img src="../Assets/img/main/Range.png">
				<p>`+skill['range']+`</p>
			</div>
			<div class="radius">
				<img src="../Assets/img/DoWDoM/Radius/`+skill['radius_img']+`.png">
				<p>`+skill['radius']+`</p>
			</div>
		</td>
		<td class="content">`+skill['content']+`</td>`
	});
}

function FILL_DB_SKILLS_PASSIVE(DB){
	$('*[db-skill-passive]').each(function () {
		let key = this.getAttribute('db-skill-passive');
		let skill = DB[key];
		let eorzeadb = skill['eorzeadb'] ? '<br/><a class="eorzeadb_link class_quest" href="'+skill['eorzeadb']+'">Задание на получение</a>' : '';
		this.innerHTML = `
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="job_skill_icon">
						<img src="`+skill['job_skill_icon']+`">
					</div>
				</div>
				<p>
					<strong>`+ skill['name'] +`</strong>
					`+eorzeadb+`
				</p>
			</div>
		</td>
		<td class="jobclass">
			<div class="jobclass_wrapper">
				<div class="jobclass_wrapper_icon">
					<img src="../Assets/img/DoWDoM/Job/`+skill['jobclass_icon']+`.png">
				</div>
				<p>Ур. `+skill['level']+`</p>
			</div>
		</td>
		<td class="content">`+skill['content']+`</td>`
	});
}

function FILL_DB_SKILLS_PVP(DB){
	$('*[db-skill-pvp]').each(function () {
		let key = this.getAttribute('db-skill-pvp');
		let skill = DB[key];
		let classification = skill['classification'] ? '<td class="classification">'+skill['classification']+'</td>' : '';
		this.innerHTML = `
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="job_skill_icon">
						<img src="`+skill['job_skill_icon']+`"/>
					</div>
				</div>
				<p><strong>`+skill['name']+`</strong></p>
			</div>
		</td>
		`+classification+`
		<td class="cast">`+skill['cast']+`</td>
		<td class="recast">`+skill['recast']+`</td>
		<td class="distant_range">
			<div class="range">
				<img src="../Assets/img/main/Range.png">
				<p>`+skill['range']+`</p>
			</div>
			<div class="radius">
				<img src="../Assets/img/DoWDoM/Radius/`+skill['radius_img']+`.png">
				<p>`+skill['radius']+`</p>
			</div>
		</td>
		<td class="content">`+skill['content']+`</td>`
	});
}
