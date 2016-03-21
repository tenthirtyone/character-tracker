var express = require("express");
var config = require("config");
var async = require("async");
var router = express.Router();
var AuthService = require("../services/AuthService.js");
var CharacterService = require("../services/CharacterService.js");
var AccountService = require("../services/AccountService.js");
var AbilityScoreService = require("../services/AbilityScoreService.js");
var ArmorTypeService = require("../services/ArmorTypeService.js");
var ClassService = require("../services/ClassService.js");
var FeatService = require("../services/FeatService.js");
var GearService = require("../services/GearService.js");
var InventoryService = require("../services/InventoryService.js");
var ItemService = require("../services/ItemService.js");
var RaceService = require("../services/RacesService.js");
var SkillService = require("../services/SkillService.js");
var WeaponTypeService = require("../services/WeaponTypeService.js");

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
  console.log('query:');
  console.log(req.query);
  AbilityScoreService.removeAbilityScore(req.query.abilityscoreid, function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/abilityscore", function(req, res) {
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




router.get("/character", function(req, res) {
  CharacterService.getCharacter(req.body.characterid, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.get("/class", function(req, res) {
  ClassService.getClass(req.body.classid, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.delete("/feat", function(req, res) {
  console.log('query:');
  console.log(req.query);
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