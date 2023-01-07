# IsOverHitTestVisibleWidget

如果命中结果下的小部件具有使其命中测试的可见性，则返回真。

1.例如，对 GetVisibility().IsHitTestVisible()返回 true 的石板小部件。

目标是小工具互动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-19303307.png)

## Inputs

目标。小工具交互组件对象参考。

## Outputs

返回值。布尔值。如果命中结果下的部件具有使其命中测试的可见性，则返回真：例如，对于 GetVisibility().IsHitTestVisible()返回真的 Slate 部件。

<hr>

Returns true if a widget under the hit result is has a visibility that makes it hit test

1. e.g. Slate widgets that return true for GetVisibility().IsHitTestVisible().

Target is Widget Interaction Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-19303307.png)

## Inputs

Target: Widget Interaction Component Object Reference.

## Outputs

Return Value: Boolean. Returns true if a widget under the hit result is has a visibility that makes it hit test: e.g. Slate widgets that return true for GetVisibility().IsHitTestVisible()..
