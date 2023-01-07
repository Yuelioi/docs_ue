# IsDeletedComponentValid

当一个组件在快照拍摄后被从一个角色中移除时，这个功能被调用。

目标是水平快照蓝图过滤器

## 图示

![](/uploads/projects/ue-bluprint/20221218-19422146.png)

## Inputs

目标。水平快照蓝图过滤器对象参考。

Params:被删除的组件是否为有效的 Params 结构（通过参考）。

## Outputs

返回值。EFilterResult 枚举。是否追踪被删除的组件。

<hr>

This is called when a component was removed from an actor since the snapshot had been taken.

Target is Level Snapshot Blueprint Filter

## 图示

![](/uploads/projects/ue-bluprint/20221218-19422146.png)

## Inputs

Target: Level Snapshot Blueprint Filter Object Reference.

Params: Is Deleted Component Valid Params Structure (by ref).

## Outputs

Return Value: EFilterResult Enum. Whether to track the removed component.
