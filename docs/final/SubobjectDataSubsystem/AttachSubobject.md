# AttachSubobject

将给定的子对象添加到一个新的所有者。如果有必要的话，这将把子对象从它之前的所有者那里移除。

目标是子对象数据子系统

## 图示

![]($-20221218-21053957.png)

## Inputs

在。执行。

目标。子对象数据子系统对象参考。

所有者手柄。子对象数据处理结构（通过引用）。要附加到的新所有者。

子对象添加句柄。子对象数据手柄结构（通过引用）。子对象的句柄，它将成为所有者的一个子对象。  

## Outputs

出：执行。

返回值。布尔值。如果孩子被成功添加，则为真。

Add the given subobject to a new owner. This will remove the subobject from its previous. owner if necessary.

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21053957.png)

## Inputs

In: Exec.

Target: Subobject Data Subsystem Object Reference.

Owner Handle: Subobject Data Handle Structure (by ref). The new owner to attach to.

Child to Add Handle: Subobject Data Handle Structure (by ref). Handle to the subobject that will become a child of the owner.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the child was added successfully.

