/**
 * The code of the different action you can do
 **/

const Actions = {
  /**
   * ACC: accelerate
   * { id: int, acc: { accX: int, accY: int}, fire: boolean }
   **/

  ACC: 0x01,

  /**
   * CREATE: create an entitie
   * { id: int, type: EnemieType }
   **/
  //TODO: Make a list of enemy type in Enemeies.js

  CREATE: 0x02,

  /**
   * DESTROY: destroy an entitie
   * { id: int }
   **/

  DESTROY: 0x03
}

function LevelManager(blueprint) {
  this.blueprint = blueprint;

  /**
   * Here , actions is table containing table with this scheme;
   *
   * [
   *  { action: Actions, obj: ActionObject },
   *  ...
   * ]
   **/

  this.actions = this.extract_actions(blueprint);
}

LevelManager.prototype.update_entities = function(entities, size) {
  var actions = this.actions.pop();
  for(var ii = 0; ii < actions.length; ii++) {
    switch(actions[ii].action) {
      case Actions.MOV:

        const id = entities.search(function (x){ return actions[ii].id == x.id })

        if(id) entities.apply(id, function(e) {
          e.accelerate(actions[ii].acc.accX, actions[ii].acc.accY)
        })

        if(id && actions[ii].fire) entities.apply(id, function(e) {
          e.shot().forEach(function (proj) {
            entities.add(proj)
          })
        })
        break;
      case Actions.CREATE:
        //TODO
        break;
      case Actions.DESTROY:
        //TODO
        break;
    }

  }

  //TODO: add colision resolve

  var toDelete = [];

  for(var zz = 0; zz < entities.length(); zz++) {
    const ent_copy = entities.get(zz);

    entities.apply(zz, function(ent) {
      ent.set_pos(ent.pos.X + ent_copy.mov.X, ent_copy.ent.pos.Y + mov.Y);
    })

    const moved_ent_copy = entities.get(zz);

    //Here the codition verify that if no pixel of the hitbox appear on the screen
    //add the id to the toDelete table
    if(ent_copy.pos.X > size.X || ent_copy.pos.X + ent_copy.size.X < 0
      || ent_copy.pos.Y > size.Y || ent_copy.pos.Y + ent_copy.size.Y < 0) {

      if(ent_copy.prototype == Spaceship.prototype) {
        if(ent_copy.pos.X > size.X) ent_copy.pos.X = size.X - ent_copy.size.X;
        if(ent_copy.pos.X + ent_copy.size.X < 0) ent_copy.pos.X = size.X + ent_copy.size.X;
        if(ent_copy.pos.Y > size.Y) ent_copy.pos.Y = size.Y - ent_copy.size.Y;
        if(ent_copy.pos.Y + ent_copy.size.Y < 0) ent_copy.pos.Y = size.Y + ent_copy.size.Y;
      } else {
        toDelete.push(zz);
      }
    }

    toDelete.forEach(function (index) {
      entities.rm_index(index);
    });

    return entities;
  }
}

LevelManager.prototype.extract_actions = function(blueprint) {
  //TODO
}
