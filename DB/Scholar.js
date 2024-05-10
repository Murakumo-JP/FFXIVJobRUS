(() =>{
   let db = {
      "PVE Update": `Последнее обновление: 02/10/2023`,
      "PVP Update": `Последнее обновление: 16/01/2024`,
      // PVE Skill 01
      "Ruin": {
         "name": 'Ruin',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1c74fa1688f3d89d6f5b972ce384df15f62e35d1.png',
         "jobclass_icon": 'SCH',
         "level": '1',
         "classification": 'Заклинание',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий нестихийный урон с силой атаки 150.',
      },
      // PVE Skill 02
      "Bio": {
         "name": 'Bio',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/93f61adcffc6644730a017347d91805359b52bdb.png',
         "jobclass_icon": 'SCH',
         "level": '2',
         "classification": 'Заклинание',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Периодический нестихийный урон.<br/>Сила атаки: 20<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 03 
      "Physick": {
         "name": 'Physick',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e51f309947cde0c36f3a0cd815ca01e268928eb6.png',
         "jobclass_icon": 'SCH',
         "level": '4',
         "classification": 'Заклинание',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Восстанавливает HP цели.<br/>Сила лечения: 450',
      },
      // PVE Skill 04
      "Summon Eos": {
         "name": 'Summon Eos',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/7e5c03b72c4e181034da8121d6f2bdf2f1aa2a60.png',
         "jobclass_icon": 'SCH',
         "level": '4',
         "classification": 'Заклинание',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '200 MP',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Призывает фею Eos, которая будет сражаться на стороне персонажа.<br/>Фея со статусом Guard автоматически накладывает эффект Embrance на сопартийцев, которые получают урон.',
      },
      // PVE Skill 05
      "Resurrection": {
         "name": 'Resurrection',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/9e61ea15caf1f7c0e4b44943dcbee0178e61a9fd.png',
         "jobclass_icon": 'ACN',
         "level": '12',
         "classification": 'Заклинание',
         "cast": '8 сек.',
         "recast": '2.5 сек.',
         "cost": '2400 MP',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Воскрешает цель, накладывая эффект слабости (weakeness).',
      },
      // PVE Skill 06
      "Whispering Dawn": {
         "name": 'Whispering Dawn',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/161dc95f27e69fb5bd4caecfdeab022e3560193d.png',
         "jobclass_icon": 'SCH',
         "level": '20',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": "Приказывает фее использовать умение Whispering Dawn. Если призвана Seraph, приказывает ей использовать Angel's Whisper.<br/>Эффект Whispering Dawn/Angel's Whisper: постепенно восстанавливает HP ближайших сопартийцев<br/>Сила лечения: 80<br/>Продолжительность: 21 сек.",
      },
      // PVE Skill 07
      "Bio II": {
         "name": 'Bio II',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ea0a5e685172203ac73332f7e1690a5a89b25590.png',
         "jobclass_icon": 'SCH',
         "level": '26',
         "classification": 'Заклинание',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Периодический нестихийный урон.<br/>Сила атаки: 40<br/>Продолжительность: 30 сек.',
      },
      // PVE Skill 08
      "Adloquium": {
         "name": 'Adloquium',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/2f077612950/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/07beea4eb1cc3f24533d045db5b694c939f3a3ac.png',
         "jobclass_icon": 'SCH',
         "level": '30',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '1000 MP',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Восстанавливает HP цели.<br/>Сила лечения: 300<br/>Дополнительный эффект: накладывает на цель эффект Galvanize, который предотвращает получение урона, равного 180% от количества восстановленных HP. При критическом восстановлении HP также накладывает эффект Catalyze, который предотвращает получение урона, равного 180% от количества восстановленных HP<br/>Продолжительность: 30 сек.<br/>Эффект не складывается с некоторыми эффектами барьеров сейджа.',
      },
      // PVE Skill 09
      "Succor": {
         "name": 'Succor',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/3982b226cea/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/59ca7d9f2002ba3176f070a023bcfd8fa2129fb9.png',
         "jobclass_icon": 'SCH',
         "level": '35',
         "classification": 'Заклинание',
         "cast": '2 сек.',
         "recast": '2.5 сек.',
         "cost": '1000 MP',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '15y',
         "content": 'Восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 200<br/>Дополнительный эффект: создает магический барьер, который предотвращает получение урона, равного 160% от количества восстановленных HP<br/>Продолжительность: 30 сек.<br/>Эффект не складывается с некоторыми эффектами барьеров сейджа.',
      },
      // PVE Skill 10
      "Ruin II": {
         "name": 'Ruin II',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d6875ae1008a9e4b2d04562cff42646752e919c5.png',
         "jobclass_icon": 'SCH',
         "level": '38',
         "classification": 'Заклинание',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий нестихийный урон с силой атаки 220.',
      },
      // PVE Skill 11
      "Fey Illumination": {
         "name": 'Fey Illumination',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/6ed1ace8e31760fa3b042e6d27dac669668196b0.png',
         "jobclass_icon": 'SCH',
         "level": '40',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '120 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Приказывает фее использовать умение Fey Illumination. Если призвана Seraph, приказывает ей использовать Seraphic Illumination.<br/>Эффект Fey Illumination/Seraphic Illumination: увеличивает эффективность магии лечения всех ближайших сопартийцев на 10% и снижает получаемый ближайшими сопартийцами магический урон на 5%.<br/>Продолжительность: 20 сек.<br/>Эффект не складывается с эффектом Seraphic Illumination.',
      },
      // PVE Skill 12
      "Aetherflow": {
         "name": 'Aetherflow',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/175631d8db5550a7b74a9bc811c3781e083e393e.png',
         "jobclass_icon": 'SCH',
         "level": '45',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '60 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Восстанавливает 20% от максимума MP.<br/>Дополнительный эффект: Aetherflow III<br/>Может использоваться только в бою.',
      },
      // PVE Skill 13
      "Energy Drain": {
         "name": 'Energy Drain',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/92ea9227a8a09c62eb53852e2c26c0d6763a35c2.png',
         "jobclass_icon": 'SHC',
         "level": '45',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Удар, наносящий нестихийный урон с силой атаки 100.<br/>Дополнительный эффект: поглощает часть нанесенного урона в виде HP<br/>Дополнительный эффект: восполняет шкалу Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge',
      },
      // PVE Skill 14
      "Lustrate": {
         "name": 'Lustrate',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/c27e36893ce/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a9adc8943d1d8402366c869416b7a9d5ef7fcf07.png',
         "jobclass_icon": 'SCH',
         "level": '45',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '1 сек.',
         "cost": '-',
         "range": '30y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": 'Восстанавливает HP цели.<br/>Сила лечения: 600<br/>Дополнительный эффект: восполняет шкалу Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge',
      },
      // PVE Skill 15
      "Art of War": {
         "name": 'Art of War',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a414b67652d67ff6707276156d1ce275f188ef07.png',
         "jobclass_icon": 'SCH',
         "level": '46',
         "classification": 'Заклинание',
         "cast": 'Мгновенная',
         "recast": '2.5 сек.',
         "cost": '400 MP',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": 'Удар, наносящий нестихийный урон с силой атаки 165 по всем окружающим противникам.',
      },
      // PVE Skill 16
      "Sacred Soil": {
         "name": 'Sacred Soil',
         "eorzeadb": 'https://eu.finalfantasyxiv.com/lodestone/playguide/db/quest/0479212014e/',
         "job_skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4c47bdf94dc6c3dcd9b303cfa42a08a5cfd13629.png',
         "jobclass_icon": 'SCH',
         "level": '50',
         "classification": 'Способность',
         "cast": 'Мгновенная',
         "recast": '30 сек.',
         "cost": '-',
         "range": '30y',
         "radius_img": 'R2',
         "radius": '15y',
         "content": 'В указанном месте создает область, в которой сопартийцы будут получать только 90% от входящего урона.<br/>Продолжительность: 15 сек.<br/>Дополнительный эффект: периодическое лечение (regen)<br/>Сила лечения: 100<br/>Дополнительный эффект: восполняет шкалу Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge',
      },
      // PVE Skill 17
      "Indomitability": `Восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 400<br/>Дополнительный эффект: восполняет шкалу Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge`,
      // PVE Skill 18
      "Broil": `Удар, наносящий нестихийный урон с силой атаки 220.`,
      // PVE Skill 19
      "Deployment Tactics": `Распространяет эффект Galvanize, наложенный персонажем на себя или на сопартийца, на всех ближайших сопартийцев.<br/>Продолжительность: имеет общее время восстановления с оригинальным эффектом<br/>Умение не будет иметь эффекта, если изначальная цель не находится под действием Galvanize.`,
      // PVE Skill 20
      "Emergency Tactics": `Преобразует следующие эффекты Galvanize и Catalyze в восстановление HP, равное количеству сниженного урона, предназначенного для барьера.<br/>Продолжительность: 15 сек.`,
      // PVE Skill 21
      "Dissipation": `Отзывает фею с поля битвы, давая максимум стаков Aetherflow. Также увеличивает эффективность магии лечения на 20%.<br/>Продолжительность: 30 сек.<br/>Отозванная фея вернется, как только закончится эффект умения.<br/>Умение Summon Eos не может быть использовано, пока персонаж находится под действием эффекта Dissipation.<br/>Может использоваться только в бою.`,
      // PVE Skill 22
      "Excogitation": `Накладывает на персонажа или сопартийца эффект Excogitation, который восстанавливает HP в момент, когда запас HP падает ниже 50% или заканчивается время действия эффекта.<br/>Сила лечения: 800<br/>Продолжительность: 45 сек.<br/>Дополнительный эффект: восполняет Faerie Gauge на 10<br/>Стоимость: 1 Aetherflow Gauge`,
      // PVE Skill 23
      "Broil II": `Удар, наносящий нестихийный урон с силой атаки 240.`,
      // PVE Skill 24
      "Chain Stratagem": `Увеличивает шанс получения целью критического (critical) удара на 10%.<br/>Продолжительность: 15 сек.`,
      // PVE Skill 25
      "Aetherpact": `Приказывает фее использовать Fey Union на выбранного сопартийца. Умение отменяется при повторном использовании.<br/>Стоимость: 10 Faerie Gauge<br/>Эффект Union Effect: постепенно восстанавливает HP сопартийца, на которого фея использовала Fey Union<br/>Сила лечения: 300<br/>Шкала Faerie Gauge расходуется по 10, пока восстанавливается HP. Эффект Fey Union завершается при использовании других умений феи или когда сопартиец находится за пределами 30 ялмов от феи.<br/>Шкала Faerie Gauge восполняется, если фея или Seraph призваны и успешно применяют умение Aetherflow в бою.`,
      // PVE Skill 26
      "Dissolve Union": `Отменяет эффект Fey Union.`,
      // PVE Skill 27
      "Biolysis": `Периодический нестихийный урон.<br/>Сила атаки: 70<br/>Продолжительность: 30 сек.`,
      // PVE Skill 28
      "Broil III": `Удар, наносящий нестихийный урон с силой атаки 255.`,
      // PVE Skill 29
      "Recitation": `Позволяет использовать Adloquium, Succor, Indomitability или Excogitation без использование ресурсов, а также с гарантированным критическим эффектом восстановления HP.<br/>Продолжительность: 15 сек.`,
      // PVE Skill 30
      "Fey Blessing": `Приказывает фее использовать Fey Blessing.<br/>Эффект Fey Blessing: восстанавливает HP всем ближайшим сопартийцам<br/>Сила лечения: 320`,
      // PVE Skill 31
      "Summon Seraph": `Призывает фею Seraph, которая будет сражаться на стороне персонажа. Фея со статусом Guard автоматически накладывает эффект Seraphic Veil на сопартийцев, которые получают урон.<br/>Нельзя призвать Seraph, если другой питомец не был призван. Призванный питомец покинет поле боя на время призыва Seraph и вернется после.<br/>Продолжительность: 22 сек.<br/><br/>※Умение меняется на Consolation после использования.`,
      // PVE Skill 32
      "Consolation": `Приказывает Seraph использовать Consolation.<br/>Эффект Consolation: восстанавливает HP всех ближайших сопартийцев<br/>Сила лечения: 250<br/>Дополнительный эффект: создает магический барьер, который поглощает получаемый урон, равный восстановленному HP<br/>Продолжительность: 30 сек.<br/>Максимум зарядов: 2<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // PVE Skill 33
      "Broil IV": `Удар, наносящий нестихийный урон с силой атаки 295.`,
      // PVE Skill 34
      "Art of War II": `Удар, наносящий нестихийный урон с силой атаки 180 по всем окружающим противникам.`,
      // PVE Skill 35
      "Protraction": `Увеличивает максимальный запас HP персонажа или сопартийца на 10% и восстанавливает увеличенное количество.<br/>Дополнительный эффект: увеличивает силу лечебных умений на 10%<br/>Продолжительность: 10 сек.`,
      // PVE Skill 36
      "Expedient": `Накладывает Expedience и Desperate Measures на всех ближайших сопартийцев.<br/>Эффект Expedience: увеличивает скорость передвижения<br/>Продолжительность: 10 сек.<br/>Эффект Desperate Measures: снижает получаемый урон на 10%<br/>Продолжительность: 20 сек.`,
      // Pet Actions 01
      "Pet Embrace": `Восстанавливает HP цели.<br/>Сила лечения: 180<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // Pet Actions 02
      "Pet Whispering Dawn": `Постепенно восстанавливает HP персонажа и всех ближайших сопартийцев.<br/>Сила лечения: 80<br/>Продолжительность: 21 сек.<br/><br/>※Это умение нельзя поместить на хотбар`,
      // Pet Actions 03
      "Pet Fey Illumination": `Увеличивает эффективность магии лечения всех ближайших сопартийцев на 10% и снижает получаемый ближайшими сопартийцами магический урон на 5%.<br/>Продолжительность: 20 сек.<br/>Эффект не складывается с Seraphic Illumination.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // Pet Actions 04
      "Pet Fey Union": `Постепенно восстанавливает HP сопартийца, к которому фея привязана с помощью Fey Union.<br/>Сила лечения: 300<br/>Шкала Faerie Gauge тратится, в то время как восстанавливается HP. Эффект Fey Union спадает, когда фея использует другие умения. Цель умения должна быть не более чем в 30 ялмах.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // Pet Actions 05
      "Pet Fey Blessing": `Восстанавливает HP всех ближайших сопартийцев.<br/>Сила лечения: 320<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // Pet Actions 06
      "Pet Seraphic Veil": `Восстанавливает HP цели.<br/>Сила лечения: 180<br/>Дополнительный эффект: создает магический барьер, который поглощает получаемый урон, равный восстановленному HP<br/>Продолжительность: 30 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // Pet Actions 07
      "Pet Angel's Whisper": `Постепенно восстанавливает HP всех ближайших сопартийцев.<br/>Сила лечения: 80<br/>Продолжительность: 21 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // Pet Actions 08
      "Pet Seraphic Illumination": `Увеличивает эффективность магии лечения всех ближайших сопартийцев на 10% и снижает получаемый магический урон ближайшими сопартийцами на 5%.<br/>Продолжительность: 20 сек.<br/>Эффект не складывается с эффектом Fey Illumination.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // Pet Actions 09
      "Consolation": `Восстанавливает HP всех ближайших сопартийцев.<br/>Сила лечения: 250<br/>Дополнительный эффект: создает магический барьер, который поглощает получаемый урон, равный восстановленному HP<br/>Продолжительность: 30 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // Pet Actions (Commands)
      "Away": `Приказ питомцу покинуть поле боя.`,
      "Heel": `Приказ питомцу следовать за персонажем.`,
      "Place": `Приказ питомцу переместиться в указанную область.`,
      "Stay": `Приказ питомцу находиться на месте.`,
      "Guard": `Приказ питомцу не атаковать, пока персонаж не атакует.`,
      "Steady": `Приказ питомцу не атаковать до тех пор, пока ему напрямую не приказано.`,
      // Trait 01
      "Maim and Mend": `Увеличивает базовый урон умений и восстановления HP на 10%.<br/>Также увеличивает базовый урон и восстановление HP питомца на 10%.`,
      // Trait 02
      "Corruption Mastery": `Улучшает умение Bio до Bio II.`,
      // Trait 03
      "Maim and Mend II": `Увеличивает базовый урон умений и восстановления HP на 30%.<br/>Также увеличивает базовый урон и восстановление HP питомца на 30%.`,
      // Trait 04
      "Broil Mastery": `Улучшает умение Ruin до Broil и увеличивает силу атаки Ruin II до 160 и Art of War до 165.`,
      // Trait 05
      "Broil Mastery II": `Улучшает умение Broil до Broil II и увеличивает силу атаки Ruin II до 180.`,
      // Trait 06
      "Corruption Mastery II": `Улучшает умение Bio II до Biolysis.`,
      // Trait 07
      "Broil Mastery III": `Улучшает умение Broil II до Broil III и увеличивает силу атаки Ruin II до 200.`,
      // Trait 08
      "Enhanced Sacred Soil": `Наделяет дополнительным эффектом Sacred Soil, который периодически восстанавливает HP.`,
      // Trait 09
      "Broil Mastery IV": `Улучшает Broil III до Broil IV и увеличивает силу атаки Ruin II до 220.`,
      // Trait 10
      "Art of War Mastery": `Улучшает умение Art of War до Art of War II.`,
      // Trait 11
      "Enhanced Healing Magic": `Увеличивает силу исцеляющих умений Physick до 450, Embrace до 180 и Seraphic Veil до 180.<br />Увеличивает прочность барьеров умений Adloquium до 180% от восстановленного HP и Succor до 160% от восстановленного HP.`,
      // Trait 12
      "Enhanced Deployment Tactics": `Уменьшает время восстановления умения Deployment Tactics до 90 сек.`,
      // PVP Skill 01
      "PVP Broil IV": `Удар, наносящий нестихийный урон с силой атаки 5,000.`,
      // PVP Skill 02
      "PVP Adloquium": `Восстанавливает HP цели.<br/>Сила лечения: 3,000<br/>Дополнительный эффект: накладывает на цель Galvanize и Catalyze<br/>Эффект Galvanize: поглощающий урон равный силе лечения 6,000<br/>Продолжительность: 15 сек.<br/>Сила барьера увеличивается на 50%, когда персонаж находится под действием Recitation.<br/>Эффект Catalyze: увеличивает наносимый урон на 8%<br/>Продолжительность: 15 сек.<br/>Максимум зарядов: 2<br/>Этот умение не имеет общего времени восстановления с другими умениями.`,
      // PVP Skill 03
      "PVP Biolysis": `Накладывает на цель Biolysis and Biolytic.<br/>Эффект Biolysis: периодический урон<br/>Сила атаки: 3,000<br/>Продолжительность: 15 сек.<br/>Сила атаки увеличивается на 50%, когда персонаж находится под действием Recitation.<br/>Эффект Biolytic: снижает наносимый целью урон на 8%<br/>Продолжительность: 15 сек.<br/>Этот умение не имеет общего времени восстановления с другими умениями.`,
      // PVP Skill 04
      "PVP Deployment Tactics": `Распространяет эффект Galvanize, примененный персонажем на себя или на сопартийца, на всех ближайших сопартийцев.<br/>При выборе противника распространяет эффекты Biolysis and Biolytic по всем окружающим противникам.<br/>Продолжительность: время, оставшееся от первоначального эффекта<br/>Не действует на неигровых персонажей, игроков под действием Guard или находящихся в роботах.<br/>Максимум зарядов: 2`,
      // PVP Skill 05
      "PVP Mummification": `Удар, наносящий нестихийный урон с силой атаки 6,000 по всем противникам в конусе перед персонажем.<br/>Дополнительный эффект: уменьшает количество HP, восстанавливаемых целью умениями лечения, на 25%<br/>Продолжительность: 10 сек.`,
      // PVP Skill 06
      "PVP Expedient": `Накладывает Expedience и Desperate Measures на персонажа и всех ближайших сопартийцев.<br/>Эффект Expedience: увеличивает скорость передвижения на 25%<br/>Продолжительность: 10 сек.<br/>Эффект Desperate Measures: снижает получаемый урон на 10%<br/>Продолжительность: 10 сек.<br/>Дополнительный эффект: накладывает эффект Recitation<br/>Эффект Recitation: увеличивает силу умений Galvanize, Biolysis и Biolytic<br/>Продолжительность: 15 сек.`,
      // PVP Skill 07
      "PVP Consolation": `Приказывает Seraph использовать Consolation.<br/>Эффект Consolation: восстанавливает HP всех ближайших сопартийцев<br/>Сила лечения: 4,000<br/>Дополнительный эффект: создаёт магический барьер, который поглощает получаемый урон, равный силе лечения 4,000<br/>Продолжительность: 10 сек.<br/>Можно использовать только во время призыва Seraph.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // PVP Skill 08
      "PVP Seraphic Veil": `Восстанавливает HP цели.<br/>Сила лечения: 4,000<br/>Дополнительный эффект: создаёт магический барьер, который поглощает получаемый урон, равный равный силе лечения 4,000<br/>Продолжительность: 10 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // PVP Skill 09
      "PVP Consolation": `Восстанавливает HP всех ближайших сопартийцев.<br/>Сила лечения: 4,000<br/>Дополнительный эффект: создаёт магический барьер, который поглощает получаемый урон, равный силе лечения 4,000.<br/>Продолжительность: 10 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
      // PVP Skill 10
      "PVP Summon Seraph": `Призывает фею Seraph для сражения в указанную область.<br/>Сразу после вызова Seraph использует Seraph Flight.<br/>Автоматически накладывает Seraphic Veil на сопартийцев, получающих урон.<br/>Дополнительный эффект: накладывает эффект Recitation<br/>Эффект Recitation: увеличивает силу умений Galvanize, Biolysis и Biolytic<br/>Продолжительность: 15 сек.<br/>Может быть использовано только тогда, когда шкала лимит брейка (limit gauge) заполнена.<br/>Время зарядки шкалы: 90 сек.<br/><br/>※Умением меняется на Consolation после использования.`,
      // PVP Skill 11
      "PVP Seraph Flight": `Накладывает Seraph Flight и Excogitation на всех ближайших сопартийцев.<br/>Эффект Seraph Flight: обнуляет следующий статусный эффект, который может быть снят Purify<br/>Продолжительность: 20 сек.<br/>Эффект Excogitation: восстанавливает HP, когда оно падает ниже 50% или по истечении срока действия эффекта<br/>Сила лечения: 8,000<br/>Продолжительность: 20 сек.<br/><br/>※Это умение нельзя поместить на хотбар.`,
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS(db);
   FILL_DB_SKILLS_PASSIVE(db);
   FILL_DB_SKILLS_PVP(db);
})();