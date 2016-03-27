var express = require("express");
var config = require("config");
var async = require("async");
var router = express.Router();
var AuthService = require("../services/AuthService.js");
var AlignmentService = require("../services/AlignmentService.js");
var BackgroundService = require("../services/BackgroundService.js");
var CharacterService = require("../services/CharacterService.js");
var AccountService = require("../services/AccountService.js");
var AbilityScoreService = require("../services/AbilityScoreService.js");
var ArmorTypeService = require("../services/ArmorTypeService.js");
var EffectService = require("../services/EffectService.js");
var FeatService = require("../services/FeatService.js");
var GearService = require("../services/GearService.js");
var InventoryService = require("../services/InventoryService.js");
var ItemService = require("../services/ItemService.js");
var RaceService = require("../services/RacesService.js");
var SkillService = require("../services/SkillService.js");
var ToolService = require("../services/ToolService.js");
var WeaponTypeService = require("../services/WeaponTypeService.js");
var DnDClassService = require("../services/DnDClassService.js");

module.exports = router;

router.get("/", function(req, res) {
  res.send('success');
});

router.get("/account", function(req, res) {
  AccountService.getAccount(req.headers.email, function(err, account) {
    if (err) res.status(400).send(err);
    
    res.send(account);
  }) 
})

router.post("/createAccount", function(req, res) {
  AccountService.createAccount(req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);  
  });
})

router.delete("/abilityscore", function(req, res) {
  AbilityScoreService.removeAbilityScore(req.query.abilityscoreid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/abilityscore", function(req, res) {
  console.log(req.headers.abilityscoreid)
  AbilityScoreService.getAbilityScore(req.headers.abilityscoreid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.post("/abilityscore", function(req, res) {
  AbilityScoreService.addAbilityScore(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.put("/abilityscore", function(req, res) {
  AbilityScoreService.updateAbilityScore(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/abilityscores", function(req, res) {
  AbilityScoreService.getAbilityScores(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/abilityscoresabbr", function(req, res) {
  AbilityScoreService.getAbilityScoresAbbr(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})




router.delete("/alignment", function(req, res) {
  AlignmentService.removeAlignment(req.query.alignmentid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/alignment", function(req, res) {
  AlignmentService.getAlignment(req.headers.alignmentid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.post("/alignment", function(req, res) {
  AlignmentService.addAlignment(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.put("/alignment", function(req, res) {
  AlignmentService.updateAlignment(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/alignments", function(req, res) {
  AlignmentService.getAlignments(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})



router.delete("/armortype", function(req, res) {
  ArmorTypeService.removeArmorType(req.query.armortypeid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/armortype", function(req, res) {
  ArmorTypeService.getArmorType(req.headers.armortypeid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.post("/armortype", function(req, res) {
  ArmorTypeService.addArmorType(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.put("/armortype", function(req, res) {
  ArmorTypeService.updateArmorType(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/armortypes", function(req, res) {
  ArmorTypeService.getArmorTypes(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})




router.delete("/background", function(req, res) {
  BackgroundService.removeBackground(req.query.backgroundid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/background", function(req, res) {
  BackgroundService.getBackground(req.headers.backgroundid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.post("/background", function(req, res) {
  BackgroundService.addBackground(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.put("/background", function(req, res) {
  BackgroundService.updateBackground(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/backgrounds", function(req, res) {
  BackgroundService.getBackgrounds(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})



router.delete("/character", function(req, res) {
  CharacterService.removeCharacter(req.query.characterid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/character", function(req, res) {
  CharacterService.getCharacter(req.headers.characterid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.post("/character", function(req, res) {
  CharacterService.addCharacter(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.put("/character", function(req, res) {
  CharacterService.updateCharacter(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/characters", function(req, res) {
  CharacterService.getCharacters(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})



router.delete("/dndclass", function(req, res) {
  DnDClassService.removeDnDClass(req.query.dndclassid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/dndclass", function(req, res) {
  DnDClassService.getDnDClass(req.headers.dndclassid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.post("/dndclass", function(req, res) {
  DnDClassService.addDnDClass(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.put("/dndclass", function(req, res) {
  DnDClassService.updateDnDClass(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/dndclasses", function(req, res) {
  DnDClassService.getDnDClasses(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.delete("/effect", function(req, res) {
  EffectService.removeEffect(req.query.effectid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/effect", function(req, res) {
  EffectService.getEffect(req.headers.effectid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.post("/effect", function(req, res) {
  EffectService.addEffect(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.put("/effect", function(req, res) {
  EffectService.updateEffect(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/effects", function(req, res) {
  EffectService.getEffects(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})


router.delete("/feat", function(req, res) {
  FeatService.removeFeat(req.query.featid, function(err, result) {
    if (err) return res.status(400).send(err);
  
    res.send(result);
  })
})

router.get("/feat", function(req, res) {
  FeatService.getFeat(req.headers.featid, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.post("/feat", function(req, res) {
  FeatService.addFeat(req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
});

router.put("/feat", function(req, res) {
  FeatService.updateFeat(req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
});

router.get("/feats", function(req, res) {
  FeatService.getFeats(function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.get("/gear", function(req, res) {
  GearService.getGear(req.body.gearid, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.get("/inventory", function(req, res) {
  InventoryService.getInventory(req.body.gearid, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.get("/item", function(req, res) {
  ItemService.getItem(req.body.itemid, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.delete("/race", function(req, res) {
  console.log('query:');
  console.log(req.query);
  RaceService.removeRace(req.query.raceid, function(err, result) {
    if (err) return res.status(400).send(err);
  
    res.send(result);
  })
})

router.get("/race", function(req, res) {
  RaceService.getRace(req.headers.raceid, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.post("/race", function(req, res) {
  RaceService.addRace(req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
});

router.put("/race", function(req, res) {
  RaceService.updateRace(req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
});

router.get("/races", function(req, res) {
  RaceService.getRaces(function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})



router.delete("/skill", function(req, res) {
  console.log('query:');
  console.log(req.query);
  SkillService.removeSkill(req.query.skillid, function(err, result) {
    if (err) return res.status(400).send(err);
  
    res.send(result);
  })
})

router.get("/skill", function(req, res) {
  SkillService.getSkill(req.headers.skillid, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.post("/skill", function(req, res) {
  SkillService.addSkill(req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
});

router.put("/skill", function(req, res) {
  SkillService.updateSkill(req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
});

router.get("/skills", function(req, res) {
  SkillService.getSkills(function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})





router.delete("/tool", function(req, res) {
  ToolService.removeTool(req.query.toolid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/tool", function(req, res) {
  ToolService.getTool(req.headers.toolid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.post("/tool", function(req, res) {
  ToolService.addTool(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.put("/tool", function(req, res) {
  ToolService.updateTool(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/tools", function(req, res) {
  ToolService.getTools(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})





router.delete("/weapontype", function(req, res) {
  WeaponTypeService.removeWeaponType(req.query.weapontypeid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/weapontype", function(req, res) {
  WeaponTypeService.getWeaponType(req.headers.weapontypeid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.post("/weapontype", function(req, res) {
  WeaponTypeService.addWeaponType(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.put("/weapontype", function(req, res) {
  WeaponTypeService.updateWeaponType(req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/weapontypes", function(req, res) {
  WeaponTypeService.getWeaponTypes(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})






router.get("/login", function(req, res) {
  AuthService.login(req.headers.authorization, function(err, token, result) {
    if (err) {
      res.status(401).json({error: err});
    } else {
      res.header({
        "Authorization": token
      });
      res.send(result);  
    };
  })
});