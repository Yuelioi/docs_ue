# IsDeletedActorValid

当一个演员在快照拍摄后被从世界上移走时，这将被调用。

目标是水平快照蓝图过滤器

## 图示

![](/uploads/projects/ue-bluprint/20221218-19422039.png)

## Inputs

目标。水平快照蓝图过滤器对象参考。

Params:被删除的演员是否为有效的参数结构（通过参考）。

## Outputs

返回值。EFilterResult 枚举。是否追踪被删除的角色。

<hr>

This is called when an actor was removed from the world since the snapshot had been taken.

Target is Level Snapshot Blueprint Filter

## 图示

![](/uploads/projects/ue-bluprint/20221218-19422039.png)

## Inputs

Target: Level Snapshot Blueprint Filter Object Reference.

Params: Is Deleted Actor Valid Params Structure (by ref).

## Outputs

Return Value: EFilterResult Enum. Whether to track the removed actor.
