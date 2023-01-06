# DrawMaterialSimple

在HUD上绘制一个材质纹理的四边形。假设有UV，以便显示整个材质。

目标是HUD

## 图示

![]($-20221218-19161721.png)

## Inputs

在。执行。

目标：HUD对象参考。

材料。材料界面对象参考。要使用的材料。

屏幕X。Float（单精度）。屏幕空间的X坐标，即四边形的左上角。

屏幕Y。Float（单精度）。四边形左上角的屏幕空间Y坐标。

屏幕W。Float（单精度）。四元组的屏幕空间宽度（单位：像素）。

屏幕H：浮点数（单精度）。四元组的屏幕空间高度（单位：像素）。

规模。Float（单精度）。缩放整个纹理的量（水平和垂直方向）。

规模位置。布尔值。参数 "Scale "是否应同时缩放此绘图调用的位置。  

## Outputs

出：执行。

Draws a material-textured quad on the HUD. Assumes UVs such that the entire material is shown.

Target is HUD

## 图示

![]($-20221218-19161721.png)

## Inputs

In: Exec.

Target: HUD Object Reference.

Material: Material Interface Object Reference. Material to use.

Screen X: Float (single-precision). Screen-space X coordinate of upper left corner of the quad..

Screen Y: Float (single-precision). Screen-space Y coordinate of upper left corner of the quad..

Screen W: Float (single-precision). Screen-space width of the quad (in pixels)..

Screen H: Float (single-precision). Screen-space height of the quad (in pixels)..

Scale: Float (single-precision). Amount to scale the entire texture (horizontally and vertically).

Scale Position: Boolean. Whether the "Scale" parameter should also scale the position of this draw call..  

## Outputs

Out: Exec.

