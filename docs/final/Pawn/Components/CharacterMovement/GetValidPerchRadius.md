# GetValidPerchRadius

返回我们可以站在一个表面的边缘而不掉下去的半径（如果这是一个可行走的表面）。简单地计算为胶囊半径减去GetPerchRadiusThreshold（）的结果。

目标是角色运动组件

## 图示

![]($-20221218-20182740.png)

## Inputs

目标。角色运动组件对象参考。  

## Outputs

返回值。浮点数（单精度）。返回我们可以站在一个表面的边缘而不掉下去的半径（如果这是一个可行走的表面）。简单地计算为胶囊半径减去GetPerchRadiusThreshold（）的结果。

Returns the radius within which we can stand on the edge of a surface without falling (if this is a walkable surface).. Simply computed as the capsule radius minus the result of GetPerchRadiusThreshold().

Target is Character Movement Component

## 图示

![]($-20221218-20182740.png)

## Inputs

Target: Character Movement Component Object Reference.  

## Outputs

Return Value: Float (single-precision). Returns the radius within which we can stand on the edge of a surface without falling (if this is a walkable surface).. Simply computed as the capsule radius minus the result of GetPerchRadiusThreshold()..

