# BatchUpdateInstancesTransforms

更新一个实例阵列的变换。

目标是实例化的静态网格组件

## 图示

![]($-20221218-18243434.png)

## Inputs

在。执行。

目标：Instanced Static Mesh Component 对象参考。

开始实例索引。整数。要更新的实例的起始索引。

New Instances Transforms（新实例变换）。变形的数组。新的变换。

世界空间。布尔值。如果为真，新的变换被解释为世界空间变换，否则被解释为本地空间。

Mark Render State Dirty。布尔值。如果为真，变化应该立即可见。如果你要更新许多实例，你应该只为最后一个实例设置为真。

传送。布尔值。实例物理是否应该被正常移动，或者被传送（瞬间移动，忽略速度）。 

## Outputs

输出。执行。

返回值。布尔值。成功时为真。

Update the transform for an array of instances.

Target is Instanced Static Mesh Component

## 图示

![]($-20221218-18243434.png)

## Inputs

In: Exec.

Target: Instanced Static Mesh Component Object Reference.

Start Instance Index: Integer. The starting index of the instances to update.

New Instances Transforms: Array of Transforms. The new transforms.

World Space: Boolean. If true, the new transforms are interpreted as a World Space transform, otherwise it is interpreted as Local Space.

Mark Render State Dirty: Boolean. If true, the change should be visible immediately. If you are updating many instances you should only set this to true for the last instance..

Teleport: Boolean. Whether or not the instances physics should be moved normally, or teleported (moved instantly, ignoring velocity)..  

## Outputs

Out: Exec.

Return Value: Boolean. True on success..

