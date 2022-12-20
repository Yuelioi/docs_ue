# SetDeferredCollisionUpdatesEnabl-

Set value of bDeferCollisionUpdates, when enabled, collision is not automatically recomputed each time the mesh changes.

Target is Dynamic Mesh Component

## 图示

![]($-20221218-18461260.png)

## Inputs

In: Exec.

Target: Dynamic Mesh Component Object Reference.

Enabled: Boolean.

Immediate Update: Boolean. if true, UpdateCollision(true) is called if bEnabled=false, ie to force a collision rebuild.  

## Outputs

Out: Exec.

