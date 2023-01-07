# SelectActorsinDataLayers

选择/取消选择属于数据层的角色。

目标是数据层编辑子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18351671.png)

## Inputs

在。执行。

目标。数据层编辑子系统对象参考。

数据层。数据层对象引用的数组。一个有效的 DataLayers 的列表。

选择。布尔值。如果为真，演员被选中；如果为假，演员被取消选择。

Notify（通知）。布尔值。如果是真的，编辑会被通知选择的变化；如果是假的，编辑不会被通知。

选择，即使是隐藏的。布尔值。[可选]如果是真的，即使是隐藏的演员也会被选中；如果是假的，隐藏的演员就不会被选中。

## Outputs

输出。执行。

返回值。布尔值。如果至少有一个演员被选择/取消选择，则为真。

<hr>

Selects/de-selects actors belonging to the DataLayers.

Target is Data Layer Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18351671.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Data Layers: Array of Data Layer Object References. A valid list of DataLayers..

Select: Boolean. If true actors are selected; if false, actors are deselected..

Notify: Boolean. If true the Editor is notified of the selection change; if false, the Editor will not be notified.

Select Even if Hidden: Boolean. [optional] If true even hidden actors will be selected; if false, hidden actors won't be selected..

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was selected/deselected..
