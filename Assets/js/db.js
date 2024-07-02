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
	$('*[db-value]').each(function () {
		let key = this.getAttribute('db-value');
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
		if(skill === undefined){
			console.error('Skill "' + key + '" not found')
			return
		}
		let eorzeadb = skill['eorzeadb'] ? '<br/><a class="eorzeadb_link class_quest" href="'+skill['eorzeadb']+'">Задание на получение</a>' : '';
		let cost = skill['cost'] ? '<td class="cost">'+skill['cost']+'</td>' : '';
		this.innerHTML = `
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="job_skill_icon">
						<img src="`+skill['skill_icon']+`">
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
					<img src="../Assets/img/DoWDoM/Job/`+skill['job_icon']+`.png">
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
						<img src="`+skill['skill_icon']+`">
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
					<img src="../Assets/img/DoWDoM/Job/`+skill['job_icon']+`.png">
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
						<img src="`+skill['skill_icon']+`"/>
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

function FILL_DB_PVP_ACTIONS(DB){
	$('*[db-pvp-actions]').each(function () {
		let key = this.getAttribute('db-pvp-actions');
		let skill = DB[key];
		this.innerHTML = `
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="job_skill_icon">
						<img src="`+skill['skill_icon']+`"/>
					</div>
				</div>
				<p><strong>`+skill['name']+`</strong></p>
			</div>
		</td>
		<td class="classification">`+skill['classification']+`</td>
		<td class="cast">`+skill['cast']+`</td>
		<td class="recast">`+skill['recast']+`</td>
		<td class="cost">`+skill['cost']+`</td>
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

function FILL_DB_SKILLS_LIMITED(DB){
	$('*[db-skill-limited]').each(function () {
		let key = this.getAttribute('db-skill-limited');
		let skill = DB[key];
		this.innerHTML = `
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="job_skill_icon">
						<img src="`+skill['skill_icon']+`"/>
					</div>
				</div>
				<p><strong>`+ skill['name'] +`</strong></p>
			</div>
		</td>
		<td class="classification">`+skill['classification']+`</td>
		<td class="cast">`+skill['cast']+`</td>
		<td class="recast">`+skill['recast']+`</td>
		<td class="cost">`+skill['cost']+`</td>
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

function FILL_DB_SKILLS_MENU(DB){
	$('*[db-skill-menu]').each(function () {
		let key = this.getAttribute('db-skill-menu');
		let skill = DB[key];
		this.innerHTML = `<p title="`+ skill['name'] +`"></p><img src="`+skill['skill_icon']+`">`
	});
}

function FILL_DB_SKILLS_CRAFT(DB){
	const job_name = document.querySelector('body').getAttribute('job-name');
	$('*[db-skill-craft]').each(function () {
		let key = this.getAttribute('db-skill-craft');
		let skill = DB[key];
		let skill_icon = skill['skill_icon'];
		let eorzeadb = skill['eorzeadb'] ? '<br/><a class="eorzeadb_link class_quest" href="'+skill['eorzeadb']+'">Классовое задание</a>' : '';
		if(typeof skill_icon !== 'string'){
			skill_icon = skill_icon[job_name];
		}
		this.innerHTML = `
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="guide-skill_icon">
						<img src="`+skill_icon+`"/>
					</div>
				</div>
				<p>
					<strong>`+skill['name']+`</strong>
					`+eorzeadb+`
				</p>
			</div>
		</td>
		<td class="jobclass">
			<div class="jobclass_wrapper">
				<div class="jobclass_wrapper_icon">
					<img src="../Assets/img/DoWDoM/Job/`+job_name+`.png"/>
				</div>
				<p>Ур. `+skill['level']+`</p>
			</div>
		</td>
		<td class="cost">`+skill['cost']+` CP</td>
		<td class="content">`+skill['content']+`</td>`
	});
}

function FILL_DB_CRAFT_PASSIVE(DB){
	const job_name = document.querySelector('body').getAttribute('job-name');
	$('*[db-craft-passive]').each(function () {
		let key = this.getAttribute('db-craft-passive');
		let skill = DB[key];
		let skill_icon = skill['skill_icon'];
		let eorzeadb = skill['eorzeadb'] ? '<br/><a class="eorzeadb_link class_quest" href="'+skill['eorzeadb']+'">Классовое задание</a>' : '';
		let cost = skill['cost'] ? '<td class="cost">'+skill['cost']+' CP</td>' : '';
		if(typeof skill_icon !== 'string'){
			skill_icon = skill_icon[job_name];
		}
		this.innerHTML = `
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="guide-skill_icon">
						<img src="`+skill_icon+`"/>
					</div>
				</div>
				<p>
					<strong>`+skill['name']+`</strong>
					`+eorzeadb+`
				</p>
			</div>
		</td>
		<td class="jobclass">
			<div class="jobclass_wrapper">
				<div class="jobclass_wrapper_icon">
					<img src="../Assets/img/DoWDoM/Job/`+job_name+`.png"/>
				</div>
				<p>Ур. `+skill['level']+`</p>
			</div>
		</td>
		`+cost+`
		<td class="content">`+skill['content']+`</td>`
	});
}

function FILL_DB_ROLE_ACTIONS(DB){
	$('*[db-role-action]').each(function () {
		let key = this.getAttribute('db-role-action');
		let skill = DB[key];
		if(skill === undefined){
			console.error('Skill "' + key + '" not found')
			return
		}
		let jobclass_01 = skill['job_class_01'] ? '<img src="../Assets/img/main/'+skill['job_class_01']+'.png">' : '';
		let jobclass_02 = skill['job_class_02'] ? '<img src="../Assets/img/main/'+skill['job_class_02']+'.png">' : '';
		let jobclass_03 = skill['job_class_03'] ? '<img src="../Assets/img/main/'+skill['job_class_03']+'.png">' : '';
		this.innerHTML = `
		<td class="skill">
            <div class="skill_wrapper">
               <div class="skill_wrapper_icon">
                  <div class="job_skill_icon">
                     <img src="`+skill['skill_icon']+`">
                  </div>
               </div>
               <p><strong>`+ skill['name'] +`</strong></p>
            </div>
         </td>
         <td class="jobclass">
            <div class="jobclass_wrapper">
               <div class="jobclass_wrapper_icon">
						`+jobclass_01+`
						`+jobclass_02+`
						`+jobclass_03+`
               </div>
               <p>Ур. `+skill['level']+`</p>
            </div>
         </td>
         <td class="classification">`+skill['classification']+`</td>
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

function FILL_DB_ROLE_TRAITS(DB){
	$('*[db-role-traits]').each(function () {
		let key = this.getAttribute('db-role-traits');
		let skill = DB[key];
		if(skill === undefined){
			console.error('Skill "' + key + '" not found')
			return
		}
		this.innerHTML = `
		<td class="skill">
			<div class="skill_wrapper">
				<div class="skill_wrapper_icon">
					<div class="job_skill_icon"><img src="`+skill['skill_icon']+`"></div>
				</div>
				<p><strong>`+ skill['name'] +`</strong></p>
			</div>
		</td>
		<td class="jobclass">
			<div class="jobclass_wrapper">
				<div class="jobclass_wrapper_icon">
					<img src="../Assets/img/main/`+skill['job_icon']+`.png">
				</div>
				<p>Ур. `+skill['level']+`</p>
			</div>
		</td>
		<td class="content">`+skill['content']+`</td>`
	});
}