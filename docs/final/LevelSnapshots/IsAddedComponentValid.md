# IsAddedComponentValid

当一个组件在快照拍摄后被添加到世界中时，这个功能被调用。

目标是水平快照蓝图过滤器

## 图示

![](/uploads/projects/ue-bluprint/20221218-19421936.png)

## Inputs

目标。水平快照蓝图过滤器对象参考。

Params:是添加了组件的有效 Params 结构（通过参考）。

## Outputs

返回值。EFilterResult 枚举。是否跟踪添加的组件。

<hr>

This is called when a component was added to the world since the snapshot had been taken.

Target is Level Snapshot Blueprint Filter

## 图示

![](/uploads/projects/ue-bluprint/20221218-19421936.png)

## Inputs

Target: Level Snapshot Blueprint Filter Object Reference.

Params: Is Added Component Valid Params Structure (by ref).

## Outputs

Return Value: EFilterResult Enum. Whether to track the added component.
