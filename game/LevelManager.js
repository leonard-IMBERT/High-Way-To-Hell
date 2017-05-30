import SpaceShip from '../object/SpaceShip'

export const Status = {
  RUNNING: 0x01,
  FINISHED: 0x02,
  FAILED: 0x03
}

/**
 * The code of the different action you can do
 **/

export const Actions = {
  /**
   * ACC: accelerate
   * { id: int, acc: { accX: int, accY: int}, fire: boolean }
   **/

  ACC: 0x01,

  /**
   * CREATE: create an entitie
   * { id: int, type: EnemieType }
   **/

  CREATE: 0x02,

  /**
   * DESTROY: destroy an entitie
   * { id: int }
   **/

  DESTROY: 0x03,

  /**
   * WIN: win the level
   * undefined
   **/

   WIN: 0x04
};

export default function LevelManager(blueprint) {
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
  this.time = 0;
  this.status = Status.RUNNING;
};

LevelManager.prototype.update_entities = function(user_input, entities, size) {
  this.time ++;
  let actions = this.actions["" + this.time];
  if(actions) {
  for(let ii = 0; ii < actions.length; ii++) {
    switch(actions[ii].action) {
      case Actions.ACC:

        const id = entities.search(function (x){ return actions[ii].obj.id === x.id })

        if(id !== undefined) entities.apply(id, function(e) {
          e.accelerate(actions[ii].obj.acc.accX, actions[ii].obj.acc.accY)
        })

        if(id !== undefined && actions[ii].obj.fire) entities.apply(id, function(e) {
          e.shot().forEach(function (proj) {
            entities.add(proj)
          })
        })
        break;
      case Actions.CREATE:
        entities.add(actions[ii].obj.type(10, 10, actions[ii].obj.id))
        break;
      case Actions.DESTROY:
        entities.rm(function(en) { return en.id === actions[ii].obj.id })
        break;
      case Actions.WIN:
        this.status = Status.FINISHED
        break;
    };

  };
  };

  let toDelete = [];


  const index_spaceship = entities.search(function(e) { return e.constructor === SpaceShip })
  if(index_spaceship !== undefined) {
    if(user_input.find(function(input) { return input.id === "Mouse"})) entities.apply(index_spaceship, function(e) {
      const mouse = user_input.find(function(input) { return input.id === "Mouse"})
      e.accelerate(mouse.X, mouse.Y)
    })
    if(user_input.find(function(input) { return input.id === "Space"})) entities.apply(index_spaceship, function(e) {
      e.shot().forEach(function (proj) {
        entities.add(proj)
      })
    })
  } else {
    this.status = Status.FAILED;
  }

  for(let zz = 0; zz < entities.length(); zz++) {

    entities.apply(zz, function(ent) {
      ent.set_pos(ent.pos.X + ent.mov.X, ent.pos.Y + ent.mov.Y);
    })

    const moved_ent_copy = entities.get(zz);

    //Here the codition verify that if no pixel of the hitbox appear on the screen
    //add the id to the toDelete table

    //TODO: Bug with the Arena
    if(moved_ent_copy.constructor === SpaceShip) {

      if(moved_ent_copy.pos.X + moved_ent_copy.size.X > size.X) entities.apply(zz, function(ent) { ent.set_pos(size.X - moved_ent_copy.size.X, ent.pos.Y); ent.stop() })
      if(moved_ent_copy.pos.X < 0) entities.apply(zz, function(ent) { ent.set_pos(0, ent.pos.Y); ent.stop() })
      if(moved_ent_copy.pos.Y + moved_ent_copy.size.Y > size.Y) entities.apply(zz, function(ent) { ent.set_pos(ent.pos.X, size.Y - moved_ent_copy.size.Y); ent.stop() })
      if(moved_ent_copy.pos.Y < 0) entities.apply(zz, function(ent) { ent.set_pos(ent.pos.X, 0); ent.stop() })
    } else {
      if(moved_ent_copy.pos.X > size.X || moved_ent_copy.pos.X + moved_ent_copy.size.X < 0
      || moved_ent_copy.pos.Y > size.Y || moved_ent_copy.pos.Y + moved_ent_copy.size.Y < 0) {
        toDelete.push(entities.get(zz).uuid);
      };
    };


    entities.apply(zz, function(e1) {
      for(let ll = 0; ll < entities.length(); ll++) {
        if(ll !== zz) entities.apply(ll, function(e2) {
          if(e1.side !== e2.side && (e1.is_hit(e2.pos.X, e2.pos.Y) || e2.is_hit(e1.pos.X, e2.pos.Y))) {
            if(e1.loose_health()) toDelete.push(e1.uuid)
            if(e2.loose_health()) toDelete.push(e2.uuid)
          }
        })
      }
    })
  };


  for(let ii = 0; ii < toDelete.length; ii++) {
    entities.rm(function(e) {
      return e.uuid === toDelete[ii]
    })
  }
  return entities;
};

LevelManager.prototype.extract_actions = function(blueprint) {
  //Make this actions just in case in the future we need to extract the actions
  //from a different filetype
  return blueprint
};
