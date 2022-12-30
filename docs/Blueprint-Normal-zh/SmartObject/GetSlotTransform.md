# GetSlotTransform

返回与给定索赔句柄相关的槽的变换（在世界空间）。

目标是智能对象子系统

## 图示

![]($-20221218-20592200.png)

## Inputs

目标。智能对象子系统对象参考。

索赔处理。智能对象Claim Handle结构（通过引用）。一个有效的句柄（ClaimHandle.IsValid()返回true）由任何Claim方法返回。  

## Outputs

出槽转化。变换。与ClaimHandle相关的槽的变换（在世界空间）。

返回值。布尔值。是否找到该变换并分配给'OutSlotTransform'。
