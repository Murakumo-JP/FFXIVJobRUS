(() =>{
   let db = {
      "PVE Update": `Последнее обновление: 28/06/2024`,
      "PVP Update": `Последнее обновление: 28/06/2024`,
      // PVE Skill 01
      "PVE Skill 01": {
         "name": 'Fire in Red',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e25904d9d00a0c1067e479ea752557aaec6fc30d.png',
         "job_icon": 'PCT',
         "level": '1',
         "classification": 'Spell',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 02
      "PVE Skill 02": {
         "name": 'Aero in Green',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/07406a981daf5e92fa645d070a97d8dc87e68a78.png',
         "job_icon": 'PCT',
         "level": '5',
         "classification": 'Spell',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 03
      "PVE Skill 03": {
         "name": 'Tempera Coat',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/615ab65c73e8727db1cd8de2bb161626170506c8.png',
         "job_icon": 'PCT',
         "level": '10',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '120 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 04
      "PVE Skill 04": {
         "name": 'Water in Blue',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2cf03c27a9e09631ea594dea8b064cf4f9aa48be.png',
         "job_icon": 'PCT',
         "level": '15',
         "classification": 'Spell',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 05
      "PVE Skill 05": {
         "name": 'Smudge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2933360212b43c10972912ef1907e45937f50292.png',
         "job_icon": 'PCT',
         "level": '20',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '20 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 06
      "PVE Skill 06": {
         "name": 'Fire II in Red',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a7bc8c6fb62a9d9666ef56e064ac6624474520c4.png',
         "job_icon": 'PCT',
         "level": '25',
         "classification": 'Spell',
         "cast": '1.5 сек',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 07
      "PVE Skill 07": {
         "name": 'Creature Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/89e15b3832fe4cd3edbe62d6149f48053694306f.png',
         "job_icon": 'PCT',
         "level": '30',
         "classification": 'Spell',
         "cast": '3 сек',
         "recast": '4 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 08
      "PVE Skill 08": {
         "name": 'Living Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f9128e8be207d2af1ea466a8a16e0c84028bd237.png',
         "job_icon": 'PCT',
         "level": '30',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '40 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 09
      "PVE Skill 09": {
         "name": 'Mog of the Ages',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/67d1a8e6464d65e94696ab65d1b0ba85e7501a91.png',
         "job_icon": 'PCT',
         "level": '30',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '30 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R6',
         "radius": '25y',
         "content": '',
      },
      // PVE Skill 10
      "PVE Skill 10": {
         "name": 'Pom Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/39158442095659217fb08bed59c45b2caf4ae7c2.png',
         "job_icon": 'PCT',
         "level": '30',
         "classification": 'Spell',
         "cast": '3 сек',
         "recast": '4 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 11
      "PVE Skill 11": {
         "name": 'Wing Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/9ccb0df55e15663f80866bd12936553cef27e1f8.png',
         "job_icon": 'PCT',
         "level": '30',
         "classification": 'Spell',
         "cast": '3 сек',
         "recast": '4 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 12
      "PVE Skill 12": {
         "name": 'Pom Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/839afb2d992cdfd4588764299d02f5acd46d8765.png',
         "job_icon": 'PCT',
         "level": '30',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '40 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 13
      "PVE Skill 13": {
         "name": 'Winged Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/78640b1974c2e3ac862c3e94b6cf0715c2a53705.png',
         "job_icon": 'PCT',
         "level": '30',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '40 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 14
      "PVE Skill 14": {
         "name": 'Aero II in Green',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/bc20c2aa10ac1db0fae2452b5c3cd41e2b9c2eda.png',
         "job_icon": 'PCT',
         "level": '35',
         "classification": 'Spell',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 15
      "PVE Skill 15": {
         "name": 'Water II in Blue',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/5d8842fd05fef2d1c4f940bd5a7b35137bdba502.png',
         "job_icon": 'PCT',
         "level": '45',
         "classification": 'Spell',
         "cast": '1.5 сек.',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 16
      "PVE Skill 16": {
         "name": 'Weapon Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/385f005903208963e20e251176a2e9b7efc0590f.png',
         "job_icon": 'PCT',
         "level": '50',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 17
      "PVE Skill 17": {
         "name": 'Steel Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b17ceff782edd7fed2934d1bb6a918fb8e97ef7f.png',
         "job_icon": 'PCT',
         "level": '50',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '60 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 18
      "PVE Skill 18": {
         "name": 'Hammer Stamp',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/bd61923ae5b677d8d93e57b962b23511d0f4396c.png',
         "job_icon": 'PCT',
         "level": '50',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.5 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 19
      "PVE Skill 19": {
         "name": 'Hammer Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/3c48a4050ea4386ef17063dbc841e75327a8d29e.png',
         "job_icon": 'PCT',
         "level": '50',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 20
      "PVE Skill 20": {
         "name": 'Striking Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/83dc200badfab99ff0f550da3b13737e82dfa118.png',
         "job_icon": 'PCT',
         "level": '50',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '60 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 21
      "PVE Skill 21": {
         "name": 'Blizzard in Cyan',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4a31c08d79867d5b332f98f8616bb06b9088daf0.png',
         "job_icon": 'PCT',
         "level": '60',
         "classification": 'Spell',
         "cast": '2.3 сек',
         "recast": '3.3 сек.',
         "cost": '400 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 22
      "PVE Skill 22": {
         "name": 'Blizzard II in Cyan',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/5f09a63e115cb331f60826a258ba7d2cf51adf3f.png',
         "job_icon": 'PCT',
         "level": '60',
         "classification": 'Spell',
         "cast": '2.3 сек.',
         "recast": '3.3 сек.',
         "cost": '400 MP',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 23
      "PVE Skill 23": {
         "name": 'Subtractive Palette',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/346a632a64591ed1e61406c1a85357112ae98a80.png',
         "job_icon": 'PCT',
         "level": '60',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '1 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 24
      "PVE Skill 24": {
         "name": 'Stone in Yellow',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8f7552113b38a8e6b3debb5ca900fbcd2bc3d0fb.png',
         "job_icon": 'PCT',
         "level": '60',
         "classification": 'Spell',
         "cast": '2.3 сек.',
         "recast": '3.3 сек.',
         "cost": '400 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 25
      "PVE Skill 25": {
         "name": 'Thunder in Magenta',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f6f648fbed76b3d0b99e4127e8e9024234b6fb97.png',
         "job_icon": 'PCT',
         "level": '60',
         "classification": 'Spell',
         "cast": '2.3 сек.',
         "recast": '3.3 сек.',
         "cost": '400 MP',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 26
      "PVE Skill 26": {
         "name": 'Stone II in Yellow',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/900e2d32cfb03084ddf48bc8120763ad623f5540.png',
         "job_icon": 'PCT',
         "level": '60',
         "classification": 'Spell',
         "cast": '2.3 сек.',
         "recast": '3.3 сек.',
         "cost": '400 MP',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 27
      "PVE Skill 27": {
         "name": 'Thunder II in Magenta',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/6463351c3b4bef69baddc35e1c6d93a247daa923.png',
         "job_icon": 'PCT',
         "level": '60',
         "classification": 'Spell',
         "cast": '2.3 сек.',
         "recast": '3.3 сек.',
         "cost": '400 MP',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 28
      "PVE Skill 28": {
         "name": 'Landscape Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f05b478236d27157b878276c280c3b49bd13cca6.png',
         "job_icon": 'PCT',
         "level": '70',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 29
      "PVE Skill 29": {
         "name": 'Scenic Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d711d26c3f29241311b78bca1d92cc18de18e35f.png',
         "job_icon": 'PCT',
         "level": '70',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '120 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 30
      "PVE Skill 30": {
         "name": 'Starry Sky Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/39ff3bff7a4857c386313552edd236755358526a.png',
         "job_icon": 'PCT',
         "level": '70',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 31
      "PVE Skill 31": {
         "name": 'Starry Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/cafa13f63003b860d9edc8e67aa095fed5501a79.png',
         "job_icon": 'PCT',
         "level": '70',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '120 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '30y',
         "content": '',
      },
      // PVE Skill 32
      "PVE Skill 32": {
         "name": 'Holy in White',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/5d8eefda835c959562af7d1fe12b229cedcca409.png',
         "job_icon": 'PCT',
         "level": '80',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.5 сек.',
         "cost": '300 MP',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 33
      "PVE Skill 33": {
         "name": 'Hammer Brush',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/10803efae25f689fa66fe9ddedce3a95390e80c5.png',
         "job_icon": 'PCT',
         "level": '86',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.5 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 34
      "PVE Skill 34": {
         "name": 'Polishing Hammer',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2405c837c6e42b5e05b84f9e10b30ef2eb6224e0.png',
         "job_icon": 'PCT',
         "level": '86',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.5 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 35
      "PVE Skill 35": {
         "name": 'Tempera Grassa',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ed684b430814130c6917a00018cd5e400430e210.png',
         "job_icon": 'PCT',
         "level": '88',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '1 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '30y',
         "content": '',
      },
      // PVE Skill 36
      "PVE Skill 36": {
         "name": 'Comet in Black',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b6e90d61c6e71d968943043d62ddb5e1a9e6d7f3.png',
         "job_icon": 'PCT',
         "level": '90',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '3.3 сек.',
         "cost": '400 MP',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 37
      "PVE Skill 37": {
         "name": 'Rainbow Drip',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/5611f2fd77f2a770574f207216a66a12629a7526.png',
         "job_icon": 'PCT',
         "level": '92',
         "classification": 'Spell',
         "cast": '4 сек.',
         "recast": '6 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R6',
         "radius": '25y',
         "content": '',
      },
      // PVE Skill 38
      "PVE Skill 38": {
         "name": 'Claw Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/34cd074b3bd5cc9036d2598ae899aed5e77e6db3.png',
         "job_icon": 'PCT',
         "level": '96',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 39
      "PVE Skill 39": {
         "name": 'Maw Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/96814a40791c36cc4eff5e82300e1fb851a4515e.png',
         "job_icon": 'PCT',
         "level": '96',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "cost": '-',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVE Skill 40
      "PVE Skill 40": {
         "name": 'Clawed Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e7eb51e71ca43854e55e520c860658d166e4b266.png',
         "job_icon": 'PCT',
         "level": '96',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '40 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 41
      "PVE Skill 41": {
         "name": 'Fanged Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a7397b9f417ac2daf98e9f72b38e30768ec3b1cf.png',
         "job_icon": 'PCT',
         "level": '96',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '40 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVE Skill 42
      "PVE Skill 42": {
         "name": 'Retribution of the Madeen',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/cfe33f3c8faa98ade9f3f2fa13e4fbb1aa0cb3e3.png',
         "job_icon": 'PCT',
         "level": '96',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '30 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R6',
         "radius": '25y',
         "content": '',
      },
      // PVE Skill 43
      "PVE Skill 43": {
         "name": 'Star Prism',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/5627109a7394cce83a4085e16b4448a7d0262525.png',
         "job_icon": 'PCT',
         "level": '100',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.5 сек.',
         "cost": '-',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // Trait 01
      "Trait 01": {
         "name": 'Maim and Mend',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/688b9e979396925fa8a996968547e39f057ff539.png',
         "job_icon": 'PCT',
         "level": '20',
         "content": '',
      },
      // Trait 02
      "Trait 02": {
         "name": 'Maim and Mend II',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f0493aff0cf655167be05890774732eebed2b598.png',
         "job_icon": 'PCT',
         "level": '40',
         "content": '',
      },
      // Trait 03
      "Trait 03": {
         "name": 'Pictomancy Mastery',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ad0c61780693af7ce5d7331856d865fadc941cc9.png',
         "job_icon": 'PCT',
         "level": '54',
         "content": '',
      },
      // Trait 04
      "Trait 04": {
         "name": 'Palette Gauge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/ed350b3a4f38f31ce5e9153909cd05d3f2740980.png',
         "job_icon": 'PCT',
         "level": '60',
         "content": '',
      },
      // Trait 05
      "Trait 05": {
         "name": 'Pictomancy Mastery II',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/fa01c39aad1f63bab6834385d2857e782f73bef3.png',
         "job_icon": 'PCT',
         "level": '74',
         "content": '',
      },
      // Trait 06
      "Trait 06": {
         "name": 'Enhanced Artistry',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/9c098373a6a2923202dad6f792e26de1f24b7118.png',
         "job_icon": 'PCT',
         "level": '80',
         "content": '',
      },
      // Trait 07
      "Trait 07": {
         "name": 'Enhanced Pictomancy',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1ff3ab29b234ca2041912c220d80cd3a67defb77.png',
         "job_icon": 'PCT',
         "level": '82',
         "content": '',
      },
      // Trait 08
      "Trait 08": {
         "name": 'Enhanced Smudge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b522ef5f10dd45407c96b6f7661b4d7a24863a0f.png',
         "job_icon": 'PCT',
         "level": '84',
         "content": '',
      },
      // Trait 09
      "Trait 09": {
         "name": 'Pictomancy Mastery III',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d89bc4bb459ec42ad2c6ff8170ccbfffe7962a50.png',
         "job_icon": 'PCT',
         "level": '84',
         "content": '',
      },
      // Trait 10
      "Trait 10": {
         "name": 'Enhanced Pictomancy II',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/0cfb3f30dad8142dc038fa326f1a0fe5c856a59c.png',
         "job_icon": 'PCT',
         "level": '86',
         "content": '',
      },
      // Trait 11
      "Trait 11": {
         "name": 'Enhanced Tempera',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b238c0e118e493e49f7b4508b23a77e18cb0ba33.png',
         "job_icon": 'PCT',
         "level": '88',
         "content": '',
      },
      // Trait 12
      "Trait 12": {
         "name": 'Enhanced Palette',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1a308480d67b3af7711d2b97ba1b5c5c87a86163.png',
         "job_icon": 'PCT',
         "level": '90',
         "content": '',
      },
      // Trait 13
      "Trait 13": {
         "name": 'Enhanced Pictomancy III',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b63973ed575fe9f1b35a307c4f7f14dbf528c873.png',
         "job_icon": 'PCT',
         "level": '92',
         "content": '',
      },
      // Trait 14
      "Trait 14": {
         "name": 'Pictomancy Mastery IV',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/a3e17894ca98f3065d9b76d83657385abf02e1cc.png',
         "job_icon": 'PCT',
         "level": '94',
         "content": '',
      },
      // Trait 15
      "Trait 15": {
         "name": 'Enhanced Pictomancy IV',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8bb7f53a94ef9f297e05eb1ee60f28d1424fa065.png',
         "job_icon": 'PCT',
         "level": '96',
         "content": '',
      },
      // Trait 16
      "Trait 16": {
         "name": 'Enhanced Pictomancy V',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/5a5b49af6e2cfc92bb9bd85310893fae68239348.png',
         "job_icon": 'PCT',
         "level": '100',
         "content": '',
      },
      // PVP Skill 01
      "PVP Skill 01": {
         "name": 'Fire in Red',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/c0e56a0d4cf1578b83b7b074ca91f245bda5b8ed.png',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.4 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 02
      "PVP Skill 02": {
         "name": 'Holy in White',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/00385107dfd36a27756e8bdd935c565677386459.png',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '15 сек.',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVP Skill 03
      "PVP Skill 03": {
         "name": 'Creature Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/79eb1db429f1e4c975a7a44b35c974cc192dc7d7.png',
         "classification": 'Spell',
         "cast": '2.88 сек.',
         "recast": '3.84 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 04
      "PVP Skill 04": {
         "name": 'Living Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b15e0a9f0d71e6c28356bad098818cd7e4c79766.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '20 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 05
      "PVP Skill 05": {
         "name": 'Mog of the Ages',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/aa47b13470953c72f7f1319eb85345971374e0f9.png',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.4 сек.',
         "range": '25y',
         "radius_img": 'R6',
         "radius": '25y',
         "content": '',
      },
      // PVP Skill 06
      "PVP Skill 06": {
         "name": 'Smudge',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/4a8241cfd5161fa63aadae588a7bccb8948aabeb.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '15 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 07
      "PVP Skill 07": {
         "name": 'Tempera Coat',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/b374e26828c617c35ed61d4a8a1535101c38399f.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '25 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 08
      "PVP Skill 08": {
         "name": 'Subtractive Palette',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e4e9d75773e873155e5f175971e4c3bb82b7b3c6.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '1 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 09
      "PVP Skill 09": {
         "name": 'Aero in Green',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8a3991ea36e4afc117921e791810cbd6bd79f688.png',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.4 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 10
      "PVP Skill 10": {
         "name": 'Water in Blue',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/32f6385276fcf8c8265169219051910acd58ca18.png',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.4 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 11
      "PVP Skill 11": {
         "name": 'Blizzard in Cyan',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/19a18cabc7c500cf37a2a225fbce543b4a46b094.png',
         "classification": 'Spell',
         "cast": '2.2 сек.',
         "recast": '3.16 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 12
      "PVP Skill 12": {
         "name": 'Stone in Yellow',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/f7ca8f42d105124efd328db0455e5941aba9acad.png',
         "classification": 'Spell',
         "cast": '2.2 сек.',
         "recast": '3.16 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 13
      "PVP Skill 13": {
         "name": 'Thunder in Magenta',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/2c9a38e15538f766d1a2f1cef421104335458698.png',
         "classification": 'Spell',
         "cast": '2.2 сек.',
         "recast": '3.16 сек.',
         "range": '25y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 14
      "PVP Skill 14": {
         "name": 'Comet in Black',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/1d830f52710c0d2d198699098f5b7ad7c6a70496.png',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '15 сек.',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVP Skill 15
      "PVP Skill 15": {
         "name": 'Pom Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/72b068c52a228df2cc72f6906d9595af240f5cd3.png',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 16
      "PVP Skill 16": {
         "name": 'Wing Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/303c02febb046418b4579c33dd60bf7d4881762e.png',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 17
      "PVP Skill 17": {
         "name": 'Claw Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d27fd4cdfbfab888ea7a2dc563780523da531fec.png',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 18
      "PVP Skill 18": {
         "name": 'Maw Motif',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/cf83b2d14e25b5cc4a2908500c0d192f95fad2fb.png',
         "classification": 'Spell',
         "cast": '3 сек.',
         "recast": '4 сек.',
         "range": '0y',
         "radius_img": 'R1',
         "radius": '0y',
         "content": '',
      },
      // PVP Skill 19
      "PVP Skill 19": {
         "name": 'Pom Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/c68a47cb4ad350d16d41f2835c8f2c83e63acc00.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '20 сек.',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVP Skill 20
      "PVP Skill 20": {
         "name": 'Winged Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/80caa4495f49a84e017745a21e6bc0c997c8c420.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '20 сек.',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVP Skill 21
      "PVP Skill 21": {
         "name": 'Clawed Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/8a084fdc2deb34a20608e057871e3d237017b42c.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '20 сек.',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVP Skill 22
      "PVP Skill 22": {
         "name": 'Fanged Muse',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/07f72a1e8df3e068a0111c25871a8b6b61117636.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '20 сек.',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVP Skill 23
      "PVP Skill 23": {
         "name": 'Retribution of the Madeen',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/d7522955f9d7c3aa0ff024d9762644de023f0347.png',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.4 сек.',
         "range": '25y',
         "radius_img": 'R6',
         "radius": '25y',
         "content": '',
      },
      // PVP Skill 24
      "PVP Skill 24": {
         "name": 'Tempera Grassa',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/cfe265bf9bf3b385248588694df294aa3f0c2d65.png',
         "classification": 'Ability',
         "cast": 'Instant',
         "recast": '1 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '30y',
         "content": '',
      },
      // PVP Skill 25
      "PVP Skill 25": {
         "name": 'Star Prism',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/292cd782b225aeb87e590190f12b8963f759b4ba.png',
         "classification": 'Spell',
         "cast": 'Instant',
         "recast": '2.4 сек.',
         "range": '25y',
         "radius_img": 'R2',
         "radius": '5y',
         "content": '',
      },
      // PVP Skill 26 LB
      "PVP Skill 26": {
         "name": 'Advent of Chocobastion',
         "skill_icon": 'https://lds-img.finalfantasyxiv.com/d/e015114ded2f4f0c44b02c840de79c23e98dedf6.png',
         "cast": 'Instant',
         "recast": '10 сек.',
         "range": '0y',
         "radius_img": 'R2',
         "radius": '8y',
         "content": '',
      },
   };
   FILL_DB_VALUES(db);
   FILL_DB_SKILLS(db);
   FILL_DB_SKILLS_PASSIVE(db);
   FILL_DB_SKILLS_PVP(db);
   FILL_DB_SKILLS_MENU(db);
})();