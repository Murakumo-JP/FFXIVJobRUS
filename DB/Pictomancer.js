(() =>{
   let db = {
      "PVE Update": `Последнее обновление: 28/06/2024`,
      "PVP Update": `Последнее обновление: 28/06/2024`,
      // PVE Skill 01
      " ": {
         "name": '',
         "eorzeadb": '',
         "skill_icon": '',
         "job_icon": '',
         "level": '',
         "classification": '',
         "cast": '',
         "recast": '',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
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
      " ": {
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
   FILL_DB_SKILLS_MENU(db);
})();