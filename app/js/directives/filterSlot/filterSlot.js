(function() {
  angular.module('character-tracker')
    .filter('filterSlot', filterSlot);


    function filterSlot() {
    return function(inventory, slot) {
      var retArr = [];
      if (inventory) {
        for (i = 0; i < inventory.length; i++) {
          //console.log('');
          //console.log(slot);
          //console.log(inventory[i].slot);
          //console.log(inventory[i].slot.indexOf(slot));
          if (inventory[i].slot.indexOf(slot) >= 0) {
            retArr.push(inventory[i])
          }
        }
      }
      return retArr;
    };
  }
}());