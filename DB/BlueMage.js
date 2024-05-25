(() =>{
   let db = {
      "PVE Update": `Последнее обновление: 02/10/2023`,
      "PVP Update": `Последнее обновление: 19/03/2024`,
      // Action 01
      "Water Cannon": {
         "name": 'Water Cannon',
         "skill_icon": '../Assets/img/DoWDoM/BLU/water_cannon.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '100 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Удар, наносящий урон водой с силой атаки 200.",
      },
      // Action 02
      "Flame Thrower": {
         "name": 'Flame Thrower',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Flame_Thrower.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '0y',
         "radius_img": 'R4',
         "radius": '8y',
         "content": "Удар, наносящий урон огнем по всем противникам в конусе перед персонажем с силой атаки 220 для первого и на 50% меньше для остальных.<br><br>※Где изучается:<br>Gobmachine G-VI - Dungeon Brayflox's Longstop (Hard)",
      },
      // Action 03
      "Aqua Breath": {
         "name": 'Aqua Breath',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Aqua_Breath.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '0y',
         "radius_img": 'R4',
         "radius": '8y',
         "content": "Удар, наносящий урон огнем по всем противникам в конусе перед персонажем с силой атаки 140 для первого и на 50% меньше для остальных.<br>Дополнительный эффект: накладывает на цель эффект Dropsy, наносящий периодический урон водой<br>Сила атаки: 20<br>Продолжительность: 12 сек.<br><br>※Где изучается: <br>Ultros - Dungeon The Dragon's Neck<br>Leviathan from -  Trial The Whorleater (Hard) или The Whorleater (Extreme)<br>Ultros - Stage 20 Masked Carnivale (Miss Typhon)",
      },
      // Action 04
      "Flying Frenzy": {
         "name": 'Flying Frenzy',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Flying_Frenzy.png',
         "classification": 'Заклинание',
         "cast": '1 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '20y',
         "radius_img": 'R5',
         "radius": '6y',
         "content": "Удар с прыжком, наносящий физический урон по всем ближайшим противникам с силой атаки 150 для первого и на 50% меньше для остальных.<br>Невозможно использовать, если персонаж находится под эффектами ограничивающими перемещение<br><br>※Где изучается:<br>Zu - Dungeon Pharos Sirius",
      },
      // Action 05
      "Drill Cannons": {
         "name": 'Drill Cannons',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Drill_Cannons.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '20y',
         "radius_img": 'R6',
         "radius": '20y',
         "content": "Удар, наносящий физический урон по всем противникам по прямой линии перед персонажем с силой атаки 200 для первого и на 50% меньше для остальных.<br>Дополнительный эффект: сила атаки увеличивается до 600, если на цель наложен эффект Petrification.<br/>Эффект Petrification также снимается<br><br>※Где изучается:<br>Magitek Vanguard H-1 - Dungeon Castrum Meridianum<br>4th Cohort Vanguard - Western Thanalan (8.7, 5.9)<br>Abandoned Vanguard - Northern Thanalan (19.16)<br>Magitek Vanguard H-2 - Northern Thanalan (16.15)<br>Magitek Vanguard - Northern Thanalan (15.8, 14.7)",
      },
      // Action 06
      "High Voltage": {
         "name": 'High Voltage',
         "skill_icon": '../Assets/img/DoWDoM/BLU/High_Voltage.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '12y',
         "content": "Удар, наносящий урон молнией по всем ближайшим противникам с силой атаки 180 для первого и на 50% меньше для остальных.<br>Дополнительный эффект: паралич (paralysis)<br>Продолжительность: 15 сек.<br>Дополнительный эффект: сила атаки увеличивается до 220, если на цель наложен эффект Dropsy<br>Дополнительный эффект: продолжительность паралича (paralysis) увеличивается до 30 сек., если на цель наложен эффект Dropsy<br><br>※Где изучается:<br>ADS - Raid The Binding Coil of Bahamut - Turn 1<br>ADS - Raid The Binding Coil of Bahamut - Turn 2<br>Bestial Node - Stage 15 Masked Carnivale (The Me Nobody Nodes)",
      },
      // Action 07
      "Loom": {
         "name": 'Loom',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Loom.png',
         "classification": 'Заклинание',
         "cast": '1 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '15y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Быстрое перемещение в указанное место.<br>Невозможно использовать, если персонаж находится под эффектами ограничивающими перемещение.<br><br>※Где изучается:<br>Dantalion и Phantom Knightin - Dungeon The Tam-Tara Deepcroft (Hard)<br>Baalzephon - Dungeon The Lost City of Amdapor",
      },
      // Action 08
      "Final Sting": {
         "name": 'Final Sting',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Final_Sting.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '-',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Удар, наносящий физический урон с силой атаки 2,000, при этом отправляя персонажа в нокаут.<br>Дополнительный эффект: накладывает на персонажа эффект Brush with Death<br>Продолжительность: 600 сек.<br>Эффект не снимается при воскрешении или повторном нокауте персонажа.<br>Невозможно использовать, находясь под действием эффекта Brush with Death.<br><br>※Где изучается:<br>Temple Bee - Dungeon The Sunken Temple of Qarn<br>Huge Hornet - Central Thanalan (18.3, 26.5)<br>Killer Wespe - Middle La Noscea (15.2, 15.4)",
      },
      // Action 09
      "Song of Torment": {
         "name": 'Song of Torment',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Song_of_Torment.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Удар, наносящий нестихийный урон с силой атаки 50.<br>Дополнительный эффект: нестихийный периодический урон<br>Сила атаки: 50<br>Продолжительность: 30 сек.<br><br>※Где изучается:<br>Siren - Dungeon Pharos Sirius",
      },
      // Action 10
      "Glower": {
         "name": 'Glower',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Glower.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '15y',
         "radius_img": 'R6',
         "radius": '15y',
         "content": "Удар, наносящий урон молнией по всем противникам по прямой линии перед персонажем с силой атаки 220 для первого и на 50% меньше для остальных.<br>Дополнительный эффект: паралич (paralysis)<br>Продолжительность: 6 сек.<br><br>※Где изучается:<br>Coincounter - Dungeon The Aurum Vale",
      },
      // Action 11
      "Plaincracker": {
         "name": 'Plaincracker',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Plaincracker.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '6y',
         "content": "Удар, наносящий нестихийный урон по всем противникам с силой атаки 220 для первого и на 50% меньше для остальных<br><br>※Где изучается:<br>Gogmagolem - Dungeon Copperbell Mines (Hard)<br>Azulmagia - Stage 25 Masked Carnivale (Dirty Rotten Azulmagia)<br>Basalt Golem - Outer La Noscea (15.7, 15.7)<br>Clay Golem - North Shroud (16.5, 29.4)<br>Sandstone Golem - Southern Thanalan (22.1, 11.7)",
      },
      // Action 12
      "Bristle": {
         "name": 'Bristle',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Bristle.png',
         "classification": 'Заклинание',
         "cast": '1 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Увеличивает силу атаки следующего заклинания на 50%.<br>Продолжительность: 30 сек.<br>Эффект не суммируется с Harmonized.<br><br>※Где изучается:<br>Angry Sow - Central Shroud<br>Wild Boar - East Shroud (17, 23.4)",
      },
      // Action 13
      "White Wind": {
         "name": 'White Wind',
         "skill_icon": '../Assets/img/DoWDoM/BLU/White_Wind.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '1500 MP',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '15y',
         "content": "Восстанавливает HP персонажа и всех ближайших сопартийцев на величину, равную текущему HP персонажа.<br><br>※Где изучается:<br>Требуется выучить 10 Blue Magic Spells.<br>Для изучения заклинания требуется забрать Whalaqee White Wind Totem у Wayward Gaheel Ja в Ul'dah - Steps of Thal (12.5, 12.9).",
      },
      // Action 14
      "Level 5 Petrify": {
         "name": 'Level 5 Petrify',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Level_5_Petrify.png',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '0y',
         "radius_img": 'R4',
         "radius": '6y',
         "content": "Накладывает окаменение (petrification) на всех противников в конусе перед персонажем.<br>Продолжительность: 20 сек.<br>Шанс успешной атаки низок.<br>Уровень противника должен быть кратен 5. Не действует на противников, чей уровень выше персонажа.<br><br>※Где изучается:<br>Manor Sentry - Dungeon Haukke Manor",
      },
      // Action 15
      "Sharpened Knife": {
         "name": 'Sharpened Knife',
         "skill_icon": '../Assets/img/DoWDoM/BLU/Sharpened_Knife.png',
         "classification": 'Заклинание',
         "cast": '1 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '3y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Удар, наносящий физический урон с силой атаки 220.<br>Дополнительный эффект: сила атаки увеличивается до 450, когда цель оглушена (stun)<br><br>※Где изучается:<br>Tonberry King - Dungeon The Wanderer's Palace",
      },
      // Action 16
      // Action 17
      // Action 18
      // Action 19
      // Action 20
      // Action 21
      // Action 22
      // Action 23
      // Action 24
      // Action 25
      // Action 26
      // Action 27
      // Action 28
      // Action 29
      // Action 30
      // Action 31
      // Action 32
      // Action 33
      // Action 34
      // Action 35
      // Action 36
      // Action 37
      // Action 38
      // Action 39
      // Action 40
      // Action 41
      // Action 42
      // Action 43
      // Action 44
      // Action 45
      // Action 46
      // Action 47
      // Action 48
      // Action 49
      // Action 50
      // Action 51
      // Action 52
      // Action 53
      // Action 54
      // Action 55
      // Action 56
      // Action 57
      // Action 58
      // Action 59
      // Action 60
      // Action 61
      // Action 62
      // Action 63
      // Action 64
      // Action 65
      // Action 66
      // Action 67
      // Action 68
      // Action 69
      // Action 70
      // Action 71
      // Action 72
      // Action 73
      // Action 74
      // Action 75
      // Action 76
      // Action 77
      // Action 78
      // Action 79
      // Action 80
      // Action 81
      // Action 82
      // Action 83
      // Action 84
      // Action 85
      // Action 86
      // Action 87
      // Action 88
      // Action 89
      // Action 90
      // Action 91
      // Action 92
      // Action 93
      // Action 94
      // Action 95
      // Action 96
      // Action 97
      // Action 98
      // Action 99
      // Action 100
      
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS_LIMITED(db);
   FILL_DB_SKILLS_PASSIVE(db);
})();