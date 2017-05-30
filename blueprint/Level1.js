import { Enemies } from '../object/Enemies'
import { Actions } from '../game/LevelManager'

export const level_1 = {
  "30": [{ action: Actions.CREATE, obj: { id:1, type: Enemies.BasicEnemy }}],
  "180": [{ action: Actions.ACC, obj: { id:1, acc: { accX: 1, accY: 1 }, fire: false}}],
  "360": [{ action: Actions.ACC, obj: { id:1, acc: { accX: -1, accY: -1 }, fire: true}}],
  "420": [{ action: Actions.ACC, obj: { id:1, acc: { accX: 1, accY: -1 }, fire: false}}],
  "800000": [{ action: Actions.WIN }],
  "100000000": [{ action: Actions.DESTROY, obj: { id:1 }}]
}
