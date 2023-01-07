# SelectActorsinLayer

选择/取消选择属于指定层的演员。

目标是分层子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-19380680.png)

## Inputs

在。执行。

目标。分层子系统对象参考。

层名。名称（通过引用）。一个有效的层名。

选择。布尔值。如果为真，演员被选中；如果为假，演员被取消选择。

通知。布尔值。如果为真，编辑器会被通知选择的变化；如果为假，编辑器不会被通知。

选择即使隐藏。布尔值。[可选]如果为真，即使是隐藏的演员也会被选中；如果为假，隐藏的演员不会被选中。

## Outputs

出：执行。

返回值。布尔值。如果至少有一个演员被选择/取消选择，则为真。

<hr>

Selects/de-selects actors belonging to the named layer.

Target is Layers Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-19380680.png)

## Inputs

In: Exec.

Target: Layers Subsystem Object Reference.

Layer Name: Name (by ref). A valid layer name..

Select: Boolean. If true actors are selected; if false, actors are deselected..

Notify: Boolean. If true the Editor is notified of the selection change; if false, the Editor will not be notified..

Select Even if Hidden: Boolean. [optional] If true even hidden actors will be selected; if false, hidden actors won't be selected..

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was selected/deselected..
