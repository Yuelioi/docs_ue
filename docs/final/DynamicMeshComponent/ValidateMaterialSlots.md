# ValidateMaterialSlots

计算动态网格的最大MaterialID，并确保Material Slots匹配。把两个参数都传成false，以便只做一个检查。

目标是动态网格组件

## 图示

![]($-20221218-18462535.png)

## Inputs

在。执行。

目标。动态网格组件对象参考。

如果缺失就创建。布尔值。如果为真，添加额外的（空）材料槽，以匹配最大材料ID。

删除多余的槽。布尔值。如果为真，超出最大材料ID的额外材料槽将被删除。

## Outputs

出：执行。

返回值。布尔值。如果在此函数结束时，材料槽数==最大材料ID，则为真。
Compute the maximum MaterialID on the DynamicMesh, and ensure that Material Slots match.. Pass both arguments as false to just do a check.

Target is Dynamic Mesh Component

## 图示

![]($-20221218-18462535.png)

## Inputs

In: Exec.

Target: Dynamic Mesh Component Object Reference.

Create if Missing: Boolean. if true, add extra (empty) Material Slots to match max MaterialID.

Delete Extra Slots: Boolean. if true, extra Material Slots beyond max MaterialID are removed.  

## Outputs

Out: Exec.

Return Value: Boolean. true if at the end of this function, Material Slot Count == Max MaterialID.

