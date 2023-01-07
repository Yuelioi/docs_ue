# GetSlotTransform

返回与给定索赔句柄相关的槽的变换（在世界空间）。

目标是智能对象子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20592200.png)

## Inputs

目标。智能对象子系统对象参考。

索赔处理。智能对象 Claim Handle 结构（通过引用）。一个有效的句柄（ClaimHandle.IsValid()返回 true）由任何 Claim 方法返回。

## Outputs

出槽转化。变换。与 ClaimHandle 相关的槽的变换（在世界空间）。

返回值。布尔值。是否找到该变换并分配给'OutSlotTransform'。

<hr>

Returns the transform (in world space) of the slot associated to the given claim handle.

Target is Smart Object Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20592200.png)

## Inputs

Target: Smart Object Subsystem Object Reference.

Claim Handle: Smart Object Claim Handle Structure (by ref). A valid handle (ClaimHandle.IsValid() returns true) returned by any of the Claim methods..

## Outputs

Out Slot Transform: Transform. Transform (in world space) of the slot associated to ClaimHandle..

Return Value: Boolean. Whether the transform was found and assigned to 'OutSlotTransform'.
