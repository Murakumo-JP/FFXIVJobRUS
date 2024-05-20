(() =>{
    let db = {
      "PVE Update": `Последнее обновление: 02/10/2023`,
      "PVP Update": `Последнее обновление: 19/03/2024`,
      // PVE Skill 01
      "Heavy Shot": {
         "name": 'Heavy Shot',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/c2be827c9e88459a397d2d02851c435d27a7bfd8.png',
         "job_icon": 'ARC',
         "level": '1',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'дар, наносящий урон с силой атаки 160.<br/>Дополнительный эффект: 20% шанс получить эффект Straight Shot Ready<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 02
      "Straight Shot": {
         "name": 'Straight Shot',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/58345465e1b0bb46bac9920464892ef4e51be34f.png',
         "job_icon": 'ARC',
         "level": '2',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 200.<br/>Можно использовать только под действием эффекта Straight Shot Ready.',
      },
      // PVE Skill 03
      "Raging Strikes": {
         "name": 'Raging Strikes',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/444bd0d452881277e79be184fdb8ca6d21906014.png',
         "job_icon": 'ARC',
         "level": '4',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Увеличивает наносимый урон на 15%.<br/>Продолжительность: 20 сек.',
      },
      // PVE Skill 04
      "Venomous Bite": {
         "name": 'Venomous Bite',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/5628b34f3942ef93659f9f03dd2c0556b66f83ea.png',
         "job_icon": 'ARC',
         "level": '6',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 100.<br/>Дополнительный эффект: яд (venom)<br/>Сила атаки: 15<br/>Продолжительность: 45 сек.',
      },
      // PVE Skill 05
      "Bloodletter": {
         "name": 'Bloodletter',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/fd9763578c2d9e6fca1cc0637d953ba405aa5b2b.png',
         "job_icon": 'ARC',
         "level": '12',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '15 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон с силой атаки 110.<br/>Максимум зарядов: 3<br/>Имеет общее время восстановления с умением Rain of Death.',
      },
      // PVE Skill 06
      "Repelling Shot": {
         "name": 'Repelling Shot',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a2c67b85c3e/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/33e4423b5606c916b4c92db7a6cfb7d22d8f89ac.png',
         "job_icon": 'ARC',
         "level": '15',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "range": '15y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Прыжок на 10 ялмов назад от выбранной цели.<br/>Невозможно использовать, если персонаж находится под эффектами, ограничивающими перемещение.',
      },
      // PVE Skill 07
      "Quick Nock": {
         "name": 'Quick Nock',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/674767e2dcc3f57156cd13273601bd4ed337657b.png',
         "job_icon": 'ARC',
         "level": '18',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '12y',
         "radius_img": 'R4',
         "radius": '12y',
         "content": 'Удар, наносящий урон с силой атаки 110 по всем противникам в конусе перед персонажем.<br/>Дополнительный эффект: 35% шанс получить эффект Shadowbite Ready<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 08
      "Windbite": {
         "name": 'Windbite',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a2e751e5315/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/798e2b8207ce793087365990d0996232238b9225.png',
         "job_icon": 'ARC',
         "level": '30',
         "classification": 'Боевой навык',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий урон ветром с силой атаки 60.<br/>Дополнительный эффект: периодический урон ветром<br/>Сила атаки: 20<br/>Продолжительность: 45 сек.',
      },
      // PVE Skill 09
      "Mages Ballad": {
         "name": "Mage's Ballad",
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/e8c7133b92a/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/eda9a8394ad037b3dec2b0013883bfddb34f54c4.png',
         "job_icon": 'BRD',
         "level": '30',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Удар, наносящий нестихийный урон с силой атаки 100.<br/>Дополнительный эффект: накладывает эффект Mage's Ballad на персонажа и всех сопартийцев в пределах 50 ялмов, увеличивая наносимый урон на 1%<br/>Продолжительность: 45 сек.<br/>Дополнительный эффект: 80% шанс наложить Repertoire<br/>Эффект Repertoire: уменьшает время восстановления умений Bloodletter и Rain of Death до 7.5 сек.<br/>Дополнительный эффект: активирует Mage's Coda",
      },
      // PVE Skill 10
      "The Wardens Paean": {
         "name": "The Warden's Paean",
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/c765d0b251b/',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4df97f99863b3eade0fc5bba2937eff52a70fa6f.png',
         "job_icon": 'BRD',
         "level": '35',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '45 сек.',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Снимает один негативный эффект с персонажа или выбранного сопартийца. Если на цель не наложен негативный эффект, то накладывает щит, который блокирует следующий наложенный негативный эффект.<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 11
      "Barrage": {
         "name": 'Barrage',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/28e7d01b94a703869a9bfae6f06864154f1bd2f3.png',
         "job_icon": 'ARC',
         "level": '38',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Увеличивает количество ударов в три раза для следующего умения, направленного в одну цель. Дополнительные эффекты накладываются только один раз. <br/>Продолжительность: 10 сек.<br/>Дополнительный эффект: увеличивает силу атаки Shadowbite до 270<br/>Дополнительный эффект: накладывает эффект Straight Shot Ready<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 12
      // PVE Skill 13
      // PVE Skill 14
      // PVE Skill 15
      // PVE Skill 16
      // PVE Skill 17
      // PVE Skill 18
      // PVE Skill 19
      // PVE Skill 20
      // PVE Skill 21
      // PVE Skill 22
      // PVE Skill 23
      // PVE Skill 24
      // PVE Skill 25
      // PVE Skill 26
      // PVE Skill 27
      // PVE Skill 28
      // PVE Skill 29
      // PVE Skill 30
      // Trait 01
      " ": {
         "name": '',
         "eorzeadb": '',
         "skill_icon": '',
         "job_icon": '',
         "level": '',
         "content": '',
      },
      // PVP Skill 01
      "": {
         "name": '',
         "skill_icon": '',
         "classification": '',
         "cast": '',
         "recast": '',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS(db);
   FILL_DB_SKILLS_PASSIVE(db);
   FILL_DB_SKILLS_PVP(db);
})();