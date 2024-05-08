(() =>{
   let db = {
      "PVE Update": `Последнее обновление: 02/10/2023`,
      "PVP Update": `Последнее обновление: 16/01/2024`,
      // PVE Skill 01
      "Stone": {
         "name": 'Stone',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/002aa233f5d570b0e27d55ce38b57a6b06b7cc69.png',
         "jobclass_icon": 'CNJ',
         "level": '1',
         "classification": 'Заклинание',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '25y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Удар, наносящий урон землей с силой атаки 140.',
      },
      // PVE Skill 02
      "Cure": {
         "name": 'Cure',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a2d0e0ed56915f523e8a7326bbdd09eff0534eda.png',
         "jobclass_icon": 'CNJ',
         "level": '2',
         "classification": 'Заклинание',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '30y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Восстанавливает HP цели.<br/>Сила лечения: 500<br/>Дополнительный эффект: шанс 15%, что следующее применение Cure II не потребует MP<br/>Продолжительность: 15 сек.',
      },
      // PVE Skill 03
      "Aero": {
         "name": 'Aero',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/78107cd063a81b78b99eb7cb5da15f2bec403c70.png',
         "jobclass_icon": 'CNJ',
         "level": '4',
         "classification": 'Заклинание',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '20y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Удар, наносящий урон ветром с силой атаки 50.<br/>Дополнительный эффект: периодический урон ветром<br/>Сила атаки: 30<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 04
      "Medica": {
         "name": 'Medica',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/6c5fd075bab7c063aef743a1de5e36958354b42b.png',
         "jobclass_icon": 'CNJ',
         "level": '10',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '900 MP',
         "range": '0y',
         "radius_img": 'Radius2',
         "radius": '15y',
         "content": 'Восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 400',
      },
      // PVE Skill 05
      "Raise": {
         "name": 'Raise',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/34bdc3ad370b701a106f32daa68e73055ab72331.png',
         "jobclass_icon": 'CNJ',
         "level": '12',
         "classification": 'Заклинание',
         "cast": '8 сек.',
         "recast": '2.5 сек.',
         "cost": '2400 MP',
         "range": '30y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Воскрешает цель, накладывая эффект слабости (weakeness).',
      },
      // PVE Skill 06
      "Stone II": {
         "name": 'Stone II',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ce8e52e199a7d9e548537bc77197f4d7965dea58.png',
         "jobclass_icon": 'CNJ',
         "level": '18',
         "classification": 'Заклинание',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '25y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Удар, наносящий урон землей с силой атаки 190.',
      },
      // PVE Skill 07
      "Cure II": {
         "name": 'Cure II',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/a02c1c29571/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a70a8e3dcb347c11047f00945f9435687f21f06d.png',
         "jobclass_icon": 'CNJ',
         "level": '30',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '1000 MP',
         "range": '30y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Восстанавливает HP цели.<br/>Сила лечения: 800',
      },
      // PVE Skill 08
      "Presence of Mind": {
         "name": 'Presence of Mind',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/e3eba90aefc/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/7be14bf07b21fa5c78cd7f7891279704da6cadb9.png',
         "jobclass_icon": 'WHM',
         "level": '30',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Снижает время применения и восстановления заклинаний, а также задержку между авто атаками на 20%.<br/>Продолжительность: 15 сек.',
      },
      // PVE Skill 09
      "Regen": {
         "name": 'Regen',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/309e3e7e609/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/53bb0b4fc881c4c06d64c915864968cced6c6201.png',
         "jobclass_icon": 'WHM',
         "level": '35',
         "classification": 'Заклинание',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '30y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Накладывает на цель эффект периодического лечения.<br/>Сила лечения: 250<br/>Продолжительность: 18 сек.',
      },
      // PVE Skill 10
      "Cure III": {
         "name": 'Cure III',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/8891efb6fde/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/33c3597ee1004e364a6331f732f077666e798acd.png',
         "jobclass_icon": 'WHM',
         "level": '40',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '1500 MP',
         "range": '30y',
         "radius_img": 'Radius2',
         "radius": '10y',
         "content": 'Восстанавливает HP цели и всех ближайших сопартийцев вокруг.<br/>Сила лечения: 600',
      },
      // PVE Skill 11
      "Holy": {
         "name": 'Holy',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/20e64bc5c59/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/bb161bfc68766590d81cb1f7d6049711c949039b.png',
         "jobclass_icon": 'WHM',
         "level": '45',
         "classification": 'Заклинание',
         "cast": '2.5 сек.',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '0y',
         "radius_img": 'Radius2',
         "radius": '8y',
         "content": 'Удар, наносящий нестихийный урон с силой атаки 140 по всем окружающим противникам.<br/>Дополнительный эффект: оглушение (stun)<br/>Продолжительность: 4 сек.',
      },
      // PVE Skill 12
      "Aero II": {
         "name": 'Aero II',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/7e4202353c63451702e9944dc93551a18951efcf.png',
         "jobclass_icon": 'CNJ',
         "level": '46',
         "classification": 'Заклинание',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '25y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Удар, наносящий урон ветром с силой атаки 50.<br/>Дополнительный эффект: периодический урон ветром<br/>Сила атаки: 50<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 13
      "Medica II": {
         "name": 'Medica II',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/530234ed64e2b5b5aaacf978a90d87932734272f.png',
         "jobclass_icon": 'CNJ',
         "level": '50',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '1000 MP',
         "range": '0y',
         "radius_img": 'Radius2',
         "radius": '20y',
         "content": 'Восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 250<br/>Дополнительный эффект: эффект периодического лечения (regen).<br/>Сила лечения: 150<br/>Продолжительность: 15 сек.',
      },
      // PVE Skill 14
      "Benediction": {
         "name": 'Benediction',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/6ea2ad6309a/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/44e09756739b6b8924b82471572e7103ac5ca1fb.png',
         "jobclass_icon": 'WHM',
         "level": '50',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '180 сек.',
         "cost": '-',
         "range": '30y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Полностью восстанавливает HP цели.',
      },
      // PVE Skill 15
      "Afflatus Solace": {
         "name": '',
         "eorzeadb": '',
         "job_skill_icon": '',
         "jobclass_icon": '',
         "level": '',
         "classification": '',
         "cast": '',
         "recast": '',
         "cost": '-',
         "range": '0y',
         "radius_img": 'Radius1',
         "radius": '0y',
         "content": 'Восстанавливает HP цели.<br/>Сила лечения: 800<br/>Дополнительный эффект: накапливает Blood Lily<br/>Стоимость: 1 Lily Healing Gauge',
      },
      // PVE Skill 16
      "Asylum": `Создает в указанной области купол целителя, восстанавливащий HP персонажу и сопартийцам, находящимся внутри.<br/>Сила лечения: 100<br/>Продолжительность: 24 сек.<br/>Дополнительный эффект: увеличивает силу лечебных умений, применнёных на всех сопартийцев в области действия, на 10%`,
      // PVE Skill 17
      "Stone III": `Удар, наносящий урон землей с силой атаки 220.`,
      // PVE Skill 18
      "Assize": `Удар, наносящий нестихийный урон с силой атаки 400 по всем окружающим противникам.<br/>Дополнительный эффект: восстанавливает HP персонажа и всех ближайших сопартийцев<br/>Сила лечения: 400<br/>Дополнительный эффект: восстанавливает 5% от максимума MP персонажа`,
      // PVE Skill 19
      "Thin Air": `Следующее умение не потребует затрат MP.<br/>Продолжительность: 12 сек.<br/>Максимум зарядов: 2`,
      // PVE Skill 20
      "Tetragrammaton": `Восстанавливает HP цели.<br/>Сила лечения: 700`,
      // PVE Skill 21
      "Stone IV": `Удар, наносящий урон землей с силой атаки 260.`,
      // PVE Skill 22
      "Divine Benison": `Создает барьер вокруг персонажа или сопартийца, поглощающий урон, равный силе лечения 500.<br/>Продолжительность: 15 сек.<br/>Максимум зарядов: 2`,
      // PVE Skill 23
      "Plenary Indulgence": `Накладывает Confession на персонажа и всех ближайших сопартийцев.<br/>После восстановления HP с помощью Medica, Medica II, Cure III или Afflatus Rapture персонажем, Confession дополнительно восстанавливает HP.<br/>Сила лечения: 200<br/>Продолжительность: 10 сек.`,
      // PVE Skill 24
      "Dia": `Удар, наносящий нестихийный урон с силой атаки 65.<br/>Дополнительный эффект: нестихийный периодический урон<br/>Сила атаки: 65<br/>Продолжительность: 30 сек.`,
      // PVE Skill 25
      "Glare": `Удар, наносящий нестихийный урон с силой атаки 290.`,
      // PVE Skill 26
      "Afflatus Misery": `Удар, наносящий нестихийный урон по цели и по всем окружающим противникам с силой атаки 1240 для первого и на 50% меньше для всех остальных.<br/>Может использоваться только когда Blood Lily полностью расцвела.`,
      // PVE Skill 27
      "Afflatus Rapture": `Восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 400<br/>Дополнительный эффект: накапливает Blood Lily<br/>Стоимость: 1 Lily Healing Gauge`,
      // PVE Skill 28
      "Temperance": `Увеличивает эффективность магии лечения на 20%, также снижает получаемый урон персонажем и сопартийцами в радиусе 50 ялмов на 10%.<br/>Продолжительность: 20 сек.`,
      // PVE Skill 29
      "Glare III": `Удар, наносящий нестихийный урон с силой атаки 310.`,
      // PVE Skill 30
      "Holy III": `Удар, наносящий нестихийный урон с силой атаки 150 по всем окружающим противникам.<br/>Дополнительный эффект: оглушение (stun)<br/>Продолжительность: 4 сек.`,
      // PVE Skill 31
      "Aquaveil": `Снижает получаемый урон персонажем или сопартийцем урон на 15%.<br/>Продолжительность: 8 сек.`,
      // PVE Skill 32
      "Liturgy of the Bell": `Помещает исцеляющий цветок в указанное место и дает персонажу 5 стаков Liturgy of the Bell.<br/>Продолжительность: 20 сек.<br/>Когда персонаж получает урон, 1 стак Liturgy of the Bell расходуется, чтобы исцелить себя и всех сопартийцев в радиусе 20 ялмов.<br/>Сила лечения: 400<br/>Эффект этого умения срабатывает не чаще одного раза в секунду.<br/>По окончанию времени действия умения или при использовании его второй раз все оставшиеся стаки Liturgy of the Bell будет использованы для дополнительного восстановления HP.<br/>Сила лечения: 200 за каждый оставшийся стак Liturgy of the Bell<br/>Этот умение не имеет общего время восстановления с другими умениями.`,
      // Trait 01
      "Stone Mastery": `Улучшает умение Stone до Stone II.`,
      // Trait 02
      "Maim and Mend": `Увеличивает базовый урон умений и восстановления HP на 10%.`,
      // Trait 03
      "Freecure": `Дает 15% шанс, что после использования Cure, стоимость следующего Cure II будет равна 0 MP.<br/>Продолжительность: 15 сек.`,
      // Trait 04
      "Maim and Mend II": `Увеличивает базовый урон умений и восстановления HP на 30%.`,
      // Trait 05
      "Aero Mastery": `Улучшает умение Aero до Aero II.`,
      // Trait 06
      "Secret of the Lily": `Добавляет Lily на Healing Gauge персонажа каждые 20 секунд при нахождении в бою. Максимум 3 Lily.`,
      // Trait 07
      "Stone Mastery II": `Улучшает умение Stone II до Stone III.`,
      // Trait 08
      "Stone Mastery III": `Улучшает умение Stone III до Stone IV.`,
      // Trait 09
      "Aero Mastery II": `Улучшает умение Aero II до Dia.`,
      // Trait 10
      "Stone Mastery IV": `Улучшает умение Stone IV до Glare.`,
      // Trait 11
      "Transcendent Afflatus": `Добавляет Blood Lily к Healing Gauge, которая расцветает после трех применений Afflatus Solace или Afflatus Rapture.`,
      // Trait 12
      "Enhanced Asylum": `Добавляет дополнительный эффект умению Asylum, увеличивающий силу умений восстанавливающих HP на 10%.`,
      // Trait 13
      "Glare Mastery": `Улучшает умение Glare to Glare III.`,
      // Trait 14
      "Holy Mastery": `Улучшает умение Holy да Holy III.`,
      // Trait 15
      "Enhanced Healing Magic": `Увеличивает силу исцеляющих умений Cure до 500, Medica до 400, Cure II до 800, Regen до 250, Cure III до 600, Medica II до 250, эффект периодического лечения Medica II (regen) до 150, Afflatus Solace до 800 и Afflatus Rapture до 400.`,
      // Trait 16
      "Enhanced Divine Benison": `Позволяет накапливать заряды для последовательного использования Divine Benison.<br/>Максимум зарядов: 2`,
      // PVP Skill 01
      "PVP Glare III": `Удар, наносящий нестихийный урон с силой атаки 5,000.`,
      // PVP Skill 02
      "PVP Cure II": `Восстанавливает HP цели.<br/>Сила лечения: 12,000<br/>Максимум стаков: 2<br/>Этот умение не имеет общего времени восстановления с другими умениями.<br/><br/>※Умение меняется на Cure III под действием эффекта Cure III Ready.`,
      // PVP Skill 03
      "PVP Afflatus Misery": `Удар, наносящий нестихийный урон по цели и по всем окружающим противникам с силой атаки 12,000.<br/>Этот умение не имеет общего времени восстановления с другими умениями.`,
      // PVP Skill 04
      "PVP Aquaveil": `Создает барьер вокруг персонажа или сопартийца, поглощающий урон, равный лечению с силой 8,000.<br/>Продолжительность: 10 сек.<br/>Дополнительный эффект: снимает один статусный эффект, который может быть снят Purify<br/>Сила барьера удваивается, если данное умение успешно снимает статусный эффект.`,
      // PVP Skill 05
      "PVP Miracle of Nature": `Насильно превращает цель в крошечное существо, лишая ее возможности использовать умения.<br/>Продолжительность: 2 сек.<br/>Не действует на неигровых персонажей, игроков под действием Guard или находящихся в роботах.`,
      // PVP Skill 06
      "PVP Seraph Strike": `Прыжок на цель, наносящий нестихийный урон с силой атаки 8,000 по цели и по всем окружающим противникам.<br/>Дополнительный эффект: накладывает эффект Protect на персонажа и всех окружающих сопартийцев<br/>Эффект Protect: снижает получаемый урон на 10%<br/>Продолжительность: 10 сек.<br/>Дополнительный эффект: накладывает эффект Cure III Ready<br/>Продолжительность: 10 сек.<br/>Невозможно использовать, если персонаж находится под эффектами, ограничивающими перемещение.<br/><br/>※Умение Cure II меняется на Cure III под действием эффекта Cure III Ready.`,
      // PVP Skill 07
      "PVP Cure III": `Восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 16000<br/>Может быть использовано только под действием эффекта Cure III Ready.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // PVP Skill 08
      "PVP Afflatus Purgation": `Удар, наносящий нестихийный урон по всем противникам по прямой линии перед персонажем с силой атаки 18,000.<br/>Дополнительный эффект: оглушение (stun)<br/>Продолжительность: 2 сек.<br/>Дополнительный эффект: накладывает эффект Temperance<br/>Эффект Temperance: увеличивает наносимый урон и силу лечения на 10%, а также накладывает эффект периодического лечения (regen) на персонажа и всех ближайших сопартийцев в радиусе 30 ялмов<br/>Сила лечения: 3,000<br/>Продолжительность: 15 сек.<br/>Может быть использовано только тогда, когда шкала лимит брейка (limit gauge) заполнена.<br/>Время зарядки шкалы: 60 сек.`,
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS(db);
   FILL_DB_SKILLS_PASSIVE(db);
   FILL_DB_SKILLS_PVP(db);
})();