(() =>{
   let db = {
      "PVE Update": `Последнее обновление: 02/10/2023`,
      "PVP Update": `Последнее обновление: 16/01/2024`,
      // PVE Skill 01
      "Keen Edge": {
         "name": 'Keen Edge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/7cd4d1186b81029de28854eec532029ef245779c.png',
         "job_icon": 'GNB',
         "level": '1',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 200.',
      },
      // PVE Skill 02
      "No Mercy": {
         "name": 'No Mercy',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ab1c97d8f6007446d9f7c324adc29299e6be8e10.png',
         "job_icon": 'GNB',
         "level": '2',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Увеличивает наносимый урон на 20%.<br/>Продолжительность: 20 сек.',
      },
      // PVE Skill 03
      "Brutal Shell": {
         "name": 'Brutal Shell',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/729d76d5161a59cbed8b5f369e8476acf5ea24b2.png',
         "job_icon": 'GNB',
         "level": '4',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 160.<br/>Комбо умение: Keen Edge<br/>Сила в комбо: 300<br/>Комбо бонус: восстанавливает HP персонажа<br/>Сила лечения: 200<br/>Комбо бонус: создает барьер, обнуляющий входящий урон, равный количеству восстановленного HP<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 04
      "Camouflage": {
         "name": 'Camouflage',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/62855107ef85d3d74b0eb9d14f030368ddb6ff5a.png',
         "job_icon": 'GNB',
         "level": '6',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '90 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Увеличивает шанс парирования на 50% и снижает получаемый урон на 10%.<br/>Продолжительность: 20 сек.',
      },
      // PVE Skill 05
      "Demon Slice": {
         "name": 'Demon Slice',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a38cbdd5b185413becb8c56388d1043259dd25b1.png',
         "job_icon": 'GNB',
         "level": '10',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар, наносящий урон с силой атаки 100 по всем окружающим противникам.',
      },
      // PVE Skill 06
      "Royal Guard": {
         "name": 'Royal Guard',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b44946a0b3966b9638d4bc04d4b8c5858bfc3ad0.png',
         "job_icon": 'GNB',
         "level": '10',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '2 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Танковая стойка. Значительно повышает генерацию уровня угрозы.<br/>Эффект спадает при повторном использовании.',
      },
      // PVE Skill 07
      "Release Royal Guard": {
         "name": 'Release Royal Guard',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/bf2a6455e06637fe409340c4dba7530e55d8bfee.png',
         "job_icon": 'GNB',
         "level": '10',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Отменяет эффект Royal Guard.',
      },
      // PVE Skill 08
      "Lightning Shot": {
         "name": 'Lightning Shot',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/da2f213272cf4d4c2c5df5ccf597dd8e01ddb58b.png',
         "job_icon": 'GNB',
         "level": '15',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '20y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Дальний удар, наносящий урон с силой атаки 150.<br/>Дополнительный эффект: повышает уровень угрозы.',
      },
      // PVE Skill 09
      "Danger Zone": {
         "name": 'Danger Zone',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/fdc5cd0d9017c98bc96d4e0f20122e2f83667128.png',
         "job_icon": 'GNB',
         "level": '18',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 250.',
      },
      // PVE Skill 10
      "Solid Barrel": {
         "name": 'Solid Barrel',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/57a492f3dd90592bb2b3255f3e2f342dd6b800f9.png',
         "job_icon": 'GNB',
         "level": '26',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 140.<br/>Комбо умение: Brutal Shell<br/>Сила в комбо: 360<br/>Комбо бонус: добавляет Cartridge на шкалу Powder Gauge',
      },
      // PVE Skill 11
      "Burst Strike": {
         "name": 'Burst Strike',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/43828414469ebc6fd88ef500ab2e941177b833ec.png',
         "job_icon": 'GNB',
         "level": '30',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 380.<br/>Дополнительный эффект: накладывает эффект Ready to Blast<br/>Продолжительность: 10 сек.<br/>Эффект Ready to Blast заканчивается после использования любого боевого навыка.<br/>Стоимость: 1 Cartridge',
      },
      // PVE Skill 12
      "Nebula": {
         "name": 'Nebula',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d16438334b399cb5524acb6d77485b6c56a2be4a.png',
         "job_icon": 'GNB',
         "level": '38',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снижает получаемый урон на 30%.<br/>Продолжительность: 15 сек.',
      },
      // PVE Skill 13
      "Demon Slaughter": {
         "name": 'Demon Slaughter',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/46bce3e1c9f5ca00fbc00c7f52fc765c47aba80a.png',
         "job_icon": 'GNB',
         "level": '40',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар, наносящий урон с силой атаки 100 по всем окружающим противникам.<br/>Комбо умение: Demon Slice<br/>Сила в комбо: 160<br/>Комбо бонус: добавляет Cartridge на шкалу Powder Gauge',
      },
      // PVE Skill 14
      "Aurora": {
         "name": 'Aurora',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e220754db76f98256dd7258171a61a9de8dd898c.png',
         "job_icon": 'GNB',
         "level": '45',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Накладывает на цель эффект периодического лечения (regen).<br/>Сила лечения: 200<br/>Продолжительность: 18 сек.<br/>Максимум зарядов: 2',
      },
      // PVE Skill 15
      "Superbolide": {
         "name": 'Superbolide',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/58257f726f8a2f793622a654e5b0b2df36b372ad.png',
         "job_icon": 'GNB',
         "level": '50',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '360 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Уменьшает HP до 1 и делает персонажа невосприимчивым к большинству атак.<br/>Продолжительность: 10 сек.',
      },
      // PVE Skill 16
      "Sonic Break": {
         "name": 'Sonic Break',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/7edeee63ceea914fd74fc091aa99a84b290a57b1.png',
         "job_icon": 'GNB',
         "level": '54',
         "classification": 'Боевой навык<',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 300.<br/>Дополнительный эффект: периодический урон<br/>Сила атаки: 60<br/>Продолжительность: 30 сек.<br/>Этот боевой навык не имеет общего время восстановления с другими умениями.',
      },
      // PVE Skill 17
      "Rough Divide": {
         "name": 'Rough Divide',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/bc361feaf6715fac0c476639ef2a5ce0f207f00d.png',
         "job_icon": 'GNB',
         "level": '56',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '20y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Прыжок, наносящий урон с силой атаки 150.<br/>Максимальный заряд: 2<br/>Невозможно использовать, если персонаж находится под эффектами, ограничивающими перемещение.',
      },
      // PVE Skill 18
      "Gnashing Fang": {
         "name": 'Gnashing Fang',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/31a707fb47363e30af254750784a60ff55f60ec9.png',
         "job_icon": 'GNB',
         "level": '60',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 380.<br/>Дополнительный эффект: накладывает эффект Ready to Rip<br/>Продолжительность: 10 сек.<br/>Эффект Ready to Rip заканчивается после использования любого боевого навыка.<br/>Стоимость: 1 Cartridge<br/>Этот боевой навык не имеет общего время восстановления с другими умениями.',
      },
      // PVE Skill 19
      "Savage Claw": {
         "name": 'Savage Claw',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/fe183577affbcd066b131c997ca32283dba5c768.png',
         "job_icon": 'GNB',
         "level": '60',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 460.<br/>Комбо умение: Gnashing Fang<br/>Комбо бонус: накладывает эффект Ready to Tear<br/>Продолжительность: 10 сек.<br/>Эффект Ready to Tear заканчивается после использования любого боевого навыка.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVE Skill 20
      "Wicked Talon": {
         "name": 'Wicked Talon',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/137262f0ad98e13fd0ace2dc4f7f786d0bcec9a5.png',
         "job_icon": 'GNB',
         "level": '60',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 540.<br/>Комбо умение: Savage Claw<br/>Комбо бонус: накладывает эффект Ready to Gouge<br/>Продолжительность: 10 сек.<br/>Эффект Ready to Gouge заканчивается после использования любого боевого навыка.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVE Skill 21
      "Bow Shock": {
         "name": 'Bow Shock',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b3fa2bb1c9e838fc01439b7d39a495b444c73c6a.png',
         "job_icon": 'GNB',
         "level": '62',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар, наносящий урон с силой атаки 150 по всем окружающим противникам.<br/>Дополнительный эффект: периодический урон<br/>Сила атаки: 60<br/>Продолжительность: 15 сек.',
      },
      // PVE Skill 22
      "Heart of Light": {
         "name": 'Heart of Light',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/04bbce4afc048a15cdccdd0495e679f90b115963.png',
         "job_icon": 'GNB',
         "level": '64',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '90 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '30y',
         "content": 'Снижает получаемый персонажем и сопартийцами магический урон в радиусе действия на 10%.<br/>Продолжительность: 15 сек.',
      },
      // PVE Skill 23
      "Heart of Stone": {
         "name": 'Heart of Stone',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/059baae88deccf4ffdc31f8afd0074ec4589f81f.png',
         "job_icon": 'GNB',
         "level": '68',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '25 сек.',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снижает получаемый персонажем или выбранным сопартийцем урон на 15%.<br/>Продолжительность: 7 сек.<br/>Дополнительный эффект: если умение накладывается на сопартийца и при этом персонаж находится под эффектом Brutal Shell, он также накладывается на сопартийца<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 24
      "Continuation": {
         "name": 'Continuation',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/0906d556cb0/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8e38ca32b4021206901a4761dbef4d0c783b8620.png',
         "job_icon": 'GNB',
         "level": '70',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Позволяет персонажу проводить последовательные выстрелы, используя ганблейд.<br/>После Gnashing Fang может быть использован Jugular Rip.<br/>После Savage Claw может быть использован Abdomen Tear.<br/>После Wicked Talon может быть использован Eye Gouge.<br/>После Burst Strike может быть использован Hypervelocity.',
      },
      // PVE Skill 25
      "Jugular Rip": {
         "name": 'Jugular Rip',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/75e8b1b0530a1eb26a7d87aa7a3a50cfb8d3bff7.png',
         "job_icon": 'GNB',
         "level": '70',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 200.<br/>Возможно использовать только под действием эффекта Ready to Rip.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVE Skill 26
      "Abdomen Tear": {
         "name": 'Abdomen Tear',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e8472939441b3136fb9b2bfa52851e500e001279.png',
         "job_icon": 'GNB',
         "level": '70',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 240.<br/>Возможно использовать только под действием эффекта Ready to Tear.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVE Skill 27
      "Eye Gouge": {
         "name": 'Eye Gouge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/0c7e1462abaa7984e64644f3cb9e4a066ec16c59.png',
         "job_icon": 'GNB',
         "level": '70',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 280.<br/>Возможно использовать только под действием эффекта Ready to Gouge.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVE Skill 28
      "Fated Circle": {
         "name": 'Fated Circle',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/72b126aa8a17d9d94ee177b98af27d512aa6e01f.png',
         "job_icon": 'GNB',
         "level": '72',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар, наносящий урон с силой атаки 300 по всем окружающим противникам.<br/>Стоимость: 1 Cartridge',
      },
      // PVE Skill 29
      "Bloodfest": {
         "name": 'Bloodfest',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/90de52fbbbc0de9309a2b2aceb1b0146e3b7283a.png',
         "job_icon": 'GNB',
         "level": '76',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Вытягивает энергию эфира из цели, добавляя 3 Cartridges на шкалу Powder Gauge.',
      },
      // PVE Skill 30
      "Blasting Zone": {
         "name": 'Blasting Zone',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d35fea54a4ec47a5d8227e13b5dba247a5c8a5a6.png',
         "job_icon": 'GNB',
         "level": '80',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 720.',
      },
      // PVE Skill 31
      "Heart of Corundum": {
         "name": 'Heart of Corundum',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/493de7202ca9b1e4bed75fdd4e5b1e7a8c61d58a.png',
         "job_icon": 'GNB',
         "level": '82',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '25 сек.',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снижает получаемый персонажем или выбранным сопартийцем урон на 15%.<br/>Продолжительность: 8 сек.<br/>Дополнительный эффект: если умение накладывается на сопартийца и при этом персонаж находится под эффектом Brutal Shell, он также накладывается на сопартийца<br/>Продолжительность: 30 сек.<br/>Дополнительный эффект: накладывает на цель эффект Clarity of Corundum<br/>Эффект Clarity of Corundum: снижает получаемый урон на 15%<br/>Продолжительность: 4 сек.<br/>Дополнительный эффект: накладывает на цель эффект Catharsis of Corundum<br/>Эффект Catharsis of Corundum: восстанавливает HP, когда HP падает ниже 50% или по истечении срока действия эффекта<br/>Сила лечения: 900<br/>Продолжительность: 20 сек.',
      },
      // PVE Skill 32
      "Hypervelocity": {
         "name": 'Hypervelocity',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/7d7143520a9ec0306e977c10b4594ad0b5eee50f.png',
         "job_icon": 'GNB',
         "level": '86',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 180.<br/>Возможно использовать только под эффектом Ready to Blast.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVE Skill 33
      "Double Down": {
         "name": 'Double Down',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/9431f382886a5bac654058624ed21082deaae9d9.png',
         "job_icon": 'GNB',
         "level": '90',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар, наносящий урон по цели и по всем окружающим противникам с силой атаки 1200 для первого и на 15% меньше для всех остальных.<br/>Стоимость: 2 Cartridge<br/>Этот боевой навык не имеет общего времени восстановления с другими умениями.',
      },
      // Trait 01
      "Tank Mastery": {
         "name": 'Tank Mastery',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b6414caac03c831ec90c34e501e444031d44003c.png',
         "job_icon": 'GNB',
         "level": '1',
         "content": 'Снижает получаемый урон на 20%. Также персонаж получает бонус к максимальному количеству HP в зависимости от значения выносливости (vitality) и бонус к урону в зависимости от значения силы (strength).',
      },
      // Trait 02
      "Cartridge Charge": {
         "name": 'Cartridge Charge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e4e638d735e97d969ad1bbb6558ac8a8abe7fe15.png',
         "job_icon": 'GNB',
         "level": '30',
         "content": 'Добавляет Cartridge в шкалу Powder Gauge после успешного использования комбо с Solid Barrel.<br/>Максимум: 2 Cartridge',
      },
      // Trait 03
      "Enhanced Brutal Shell": {
         "name": 'Enhanced Brutal Shell',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f222fb36167954d21f86b99d1e24a5c11eebd0d4.png',
         "job_icon": 'GNB',
         "level": '52',
         "content": 'Позволяет наложить эффект Brutal Shell после успешного использования комбо с Brutal Shell.<br/>Продолжительность: 30 сек.',
      },
      // Trait 04
      "Danger Zone Mastery": {
         "name": 'Danger Zone Mastery',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/14b8867b1e317ddf820ff1ce4ef6a5590643a108.png',
         "job_icon": 'GNB',
         "level": '80',
         "content": 'Улучшает умение Danger Zone до Blasting Zone.',
      },
      // Trait 05
      "Heart of Stone Mastery": {
         "name": 'Heart of Stone Mastery',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ef3d170a508f2962c68fd2c95bdb606244b7f7b5.png',
         "job_icon": 'GNB',
         "level": '82',
         "content": 'Улучшает Heart of Stone до Heart of Corundum.',
      },
      // Trait 06
      "Enhanced Aurora": {
         "name": 'Enhanced Aurora',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/cdab08fb238d0ea0fb5fdafb684504d9f9b39d41.png',
         "job_icon": 'GNB',
         "level": '84',
         "content": 'Позволяет накапливать заряды для последовательного использования Aurora.<br/>Максимум зарядов: 2',
      },
      // Trait 07
      "Melee Mastery": {
         "name": 'Melee Mastery',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/6acea5ac3fd49cd172fac240c194a5847b080ccf.png',
         "job_icon": 'GNB',
         "level": '84',
         "content": 'Увеличивает силу атаки умениям Keen Edge до 200, Brutal Shell до 160 и Solid Barrel до 140.',
      },
      // Trait 08
      "Enhanced Continuation": {
         "name": 'Enhanced Continuation',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/60bd025c4db0fdea6006fa8312ca75b961d30664.png',
         "job_icon": 'GNB',
         "level": '86',
         "content": 'Позволяет наложить эффект Ready to Blast после использования Burst Strike.<br/>Продолжительность: 10 сек.',
      },
      // Trait 09
      "Cartridge Charge II": {
         "name": 'Cartridge Charge II',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d4133f5308e1fc0c138ce0659e65ba3797dc31bd.png',
         "job_icon": 'GNB',
         "level": '88',
         "content": 'Увеличивает вместимость шкалы Powder Gauge до 3 Cartridges.<br/>Позволяет заряжать 3 Cartridges при использовании умения Bloodfest.',
      },
      // PVP Skill 01
      "PVP Keen Edge": {
         "name": 'Keen Edge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/82c470efaaee03cbc16ebb1d8231caff1c04cb78.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 3,000.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 02
      "PVP Brutal Shell": {
         "name": 'Brutal Shell',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/61c930f39a60d0b1b6245e3e9ff951b74be89d6b.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 4,000.<br/>Комбо умение: Keen Edge<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 03
      "PVP Solid Barrel": {
         "name": 'Solid Barrel',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4833420da28d41108b691562fd6c431c437b0306.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 5,000.<br/>Комбо умение: Brutal Shell<br/>Дополнительный эффект: накладывает эффект Powder Barrel<br/>Продолжительность: 10 сек.<br/><br/>※Combo Solid Barrel меняется на Burst Strike под действием эффекта Powder Barrel.<br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 04
      "PVP Gnashing Fang": {
         "name": 'Gnashing Fang',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e212245a0fb649855339dfa11b548cddcbf7511e.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '15 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 5,000.<br/>Дополнительный эффект: накладывает эффект Ready to Rip<br/>Продолжительность: 5 сек.<br/>Этот боевой навык не имеет общего времени восстановления с другими умениями.',
      },
      // PVP Skill 05
      "PVP Double Down": {
         "name": 'Double Down',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/599cbaa79a8202c47cddc7e88a4f8086bd682ede.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '20 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар, наносящий урон с силой атаки 12,000 по всем окружающим противникам.<br/>Этот боевой навык не имеет общего времени восстановления с другими умениями.',
      },
      // PVP Skill 06
      "PVP Continuation": {
         "name": 'Continuation',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/40f2a295b25532536720b6986405436c239aa9e8.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Позволяет персонажу проводить последовательные выстрелы, используя ганблейд.<br/>После Gnashing Fang может быть использован Jugular Rip.<br/>После Savage Claw может быть использован Abdomen Tear.<br/>После Wicked Talon может быть использован Eye Gouge.<br/>После Burst Strike может быть использован Hypervelocity.',
      },
      // PVP Skill 07
      "PVP Rough Divide": {
         "name": 'Rough Divide',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d8dcaa43ef97b6ffd9cdacfbef4f3917f24c366e.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '15 сек.',
         "range": '20y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Рывок к цели, наносящий урон с силой атаки 2,000.<br/>Дополнительный эффект: накладывает эффект No Mercy<br/>Эффект No Mercy: увеличивает наносимый урон и силу лечения на 20%, а также увеличивает скорость передвижения на 25%<br/>Продолжительность: 7 сек.<br/>Максимум зарядов: 2<br/>Невозможно использовать, если персонаж находится под эффектами, ограничивающими перемещение.',
      },
      // PVP Skill 08
      "PVP Draw and Junction": {
         "name": 'Draw and Junction',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8421ce0195ee664e29836c43a680a7ff1ae3f40d.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '20 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Накладывает на персонажа полезный эффект, основанный на выбранном сопартийце или противнике.<br/>Если цель DPS, накладывается Junction DPS.<br/>Если цель танк или если цель не выбрана, накладывает Junction Tank.<br/>Если цель целитель, накладывает Junction Healer.<br/>Дополнительный эффект: накладывает эффект Powder Barrel, когда выбран противник<br/>Длительность: 10 сек.<br/><br/>※Combo Solid Barrel меняется на Burst Strike под действием эффекта Powder Barrel.',
      },
      // PVP Skill 09
      "PVP Junctioned Cast": {
         "name": 'Junctioned Cast',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/6b83f1d3889c905827c32f602884daa874da768d.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '20 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Использует умение, зависящее от выбранного Junction.<br/>Junction DPS: Blasting Zone<br/>Junction Tank: Nebula<br/>Junction Healer: Aurora',
      },
      // PVP Skill 10
      "PVP Burst Strike": {
         "name": 'Burst Strike',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/07b019971a6a2f2c8a2133dff60543aec88c46f1.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 7,000.<br/>Дополнительный эффект: накладывает эффект Ready to Blast<br/>Продолжительность: 10 сек.<br/>Можно использовать только под действием эффекта Powder Barrel.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 11
      "PVP Savage Claw": {
         "name": 'Savage Claw',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/cc8843f2a57e615b3572842b26dad8be3f5a34b7.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 6,000.<br/>Комбо умение: Gnashing Fang<br/>Дополнительный эффект: накладывает эффект Ready to Tear<br/>Продолжительность: 5 сек.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 12
      "PVP Wicked Talon": {
         "name": 'Wicked Talon',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/96bb25bd7c335de1977d2e3006f29286eff5f01e.png',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.4 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 7,000.<br/>Комбо умение: Savage Claw<br/>Дополнительный эффект: накладывает эффект Ready to Gouge<br/>Продолжительность: 5 сек.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 13
      "PVP Hypervelocity": {
         "name": 'Hypervelocity',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/46260fe1573522f050da18e1e5d636daed048083.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 3,000.<br/>Бонус эффекта Junction Tank: создает вокруг персонажа барьер, поглощающий урон, равный силе лечения 6,000 <br/>Продолжительность: 7 сек.<br/>Бонус эффекта Junction DPS: увеличивает силу атаки до 5,000<br/>Бонус эффекта Junction Healer: восстанавливает HP персонажа и ближайших сопартийцев в радиусе 15 ялмов<br/>Сила лечения: 4,000<br/>Можно использовать только под действием эффекта Ready to Blast.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 14
      "PVP Jugular Rip": {
         "name": 'Jugular Rip',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e1f39d3fecb447aaac966213ab89479591bbc996.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 1,000.<br/>Бонус эффекта Junction Tank: создает вокруг персонажа барьер, поглощающий урон, равный силе лечения 4,000<br/>Продолжительность: 7 сек.<br/>Бонус эффекта Junction DPS: увеличивает силу атаки до 3,000<br/>Бонус эффекта Junction Healer: восстанавливает HP персонажа и ближайших сопартийцев в радиусе 15 ялмов<br/>Сила лечения: 2,000<br/>Можно использовать только под действием эффекта Ready to Rip.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 15
      "PVP Abdomen Tear": {
         "name": 'Abdomen Tear',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/391803a2a95f908e6ce564a68204ec073facce20.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 2,000.<br/>Бонус эффекта Junction Tank: создает вокруг персонажа барьер, поглощающий урон, равный силе лечения 5,000<br/>Продолжительность: 7 сек.<br/>Бонус эффекта Junction DPS: увеличивает силу атаки до 4,000<br/>Бонус эффекта Junction Healer: восстанавливает HP персонажа и ближайших членов партии в радиусе 15 ялмов<br/>Сила лечения: 3,000<br/>Можно использовать только под действием эффекта Ready to Tear.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 16
      "PVP Eye Gouge": {
         "name": 'Eye Gouge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f2a4f9c7ffb67a95f31b89995f865f5ceb8b06e7.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 3,000.<br/>Бонус эффекта Junction Tank: создает вокруг персонажа барьер, поглощающий урон, равный силе лечения 6,000<br/>Продолжительность: 7 сек.<br/>Бонус эффекта Junction DPS: увеличивает силу атаки до 5,000<br/>Бонус эффекта Junction Healer: восстанавливает HP персонажа и ближайших сопартийцев в радиусе 15 ялмов<br/>Сила лечения: 4,000<br/>Можно использовать только под действием эффекта Ready to Gouge.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 17
      "PVP Nebula": {
         "name": 'Nebula',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e45508c1f8ad683ed98587d6df29b935b4a1fe68.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '20 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снижает получаемый урон на 20% и наносит удар, наносящий урон с силой атаки 4,000 единиц каждый раз, когда персонаж получаете урон.<br/>Продолжительность: 10 сек.<br/>Можно использовать только под действием эффекта Junction Tank.<br/>Имеет общее время восстановления с умениями Blasting Zone и Aurora.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 18
      "PVP Blasting Zone": {
         "name": 'Blasting Zone',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e55f3900a127f20fca1f99ba799713ced000b9f5.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '20 сек.',
         "range": '5y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 10,000.<br/>Можно использовать только под действием эффекта Junction DPS.<br/>Имеет общее время восстановления с умениями Blasting Zone и Aurora.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 19
      "PVP Aurora": {
         "name": 'PVP Aurora',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/acaf4d3fc4adf9d9d241bec0be8376d207647c8c.png',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '20 сек.',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Восстанавливает HP персонажу или выбранному сопартийцу.<br/>Сила лечения: 12,000<br/>Дополнительный эффект: эффект периодического лечения (regen)<br/>Сила лечения: 3,000<br/>Продолжительность: 12 сек.<br/>Можно использовать только под действием эффекта Junction Healer.<br/>Имеет общее время восстановления с умением Blasting Zone.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
      // PVP Skill 20
      "PVP Relentless Rush": {
         "name": 'Relentless Rush',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/c883909d21cab4cc8054d19c6cbb8156a3e6ac96.png',
         "cast": 'Мгновенная',
         "recast": '10 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Проводит серию ударов клинком, нанося периодический урон по всем окружающим противникам с силой атаки 4,000 и снижая получаемый урон на 25% до окончания действия эффекта.<br/>Продолжительность: 4 сек.<br/>Активирует Terminal Trigger после конца действия эффекта.<br/>Дополнительный эффект: накладывает на цель Relentless Shrapnel, снижая наносимый урон на 4% и увеличивая получаемый урон на 4% за стак<br/>Продолжительность: 5 сек.<br/>Максимум стаков: 5<br/>Может быть использовано во время движения.<br/>Может быть использовано только тогда, когда шкала лимит брейка (limit gauge) заполнена.<br/>Время зарядки шкалы: 60 сек.<br/><br/>※При использовании умение меняется на Terminal Trigger.',
      },
      // PVP Skill 21
      "PVP Terminal Trigger": {
         "name": 'Terminal Trigger',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/378ade68a55ed6f6c34600bd4ade1db2aea5511a.png',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар, наносящий урон с силой атаки 12,000 по всем окружающим противникам.<br/>Дополнительный эффект: оглушение (stun)<br/>Продолжительность: 3 сек.<br/>Можно использовать только под действием эффекта Relentless Rush.<br/>Эффект Relentless Rush пропадает после использования.<br/><br/>※Это умение нельзя поместить на хотбар.',
      },
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS(db);
   FILL_DB_SKILLS_PASSIVE(db);
   FILL_DB_SKILLS_PVP(db);
})();