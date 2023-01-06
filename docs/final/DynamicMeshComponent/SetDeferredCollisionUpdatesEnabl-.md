# SetDeferredCollisionUpdatesEnabl-

设置bDeferCollisionUpdates的值，当启用时，每次网格变化时不会自动重新计算碰撞。

目标是动态网格组件

## 图示

![]($-20221218-18461260.png)

## Inputs

在。执行。

目标。动态网格组件对象参考。

已启用。布尔值。

立即更新：布尔值。如果为真，如果bEnabled=false，就会调用UpdateCollision(true)，即强制重建碰撞。

## Outputs

出：执行。
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

