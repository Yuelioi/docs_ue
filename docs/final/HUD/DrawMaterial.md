# DrawMaterial

在HUD上绘制一个材料纹理的四边形。

目标是HUD

## 图示

![]($-20221218-19161582.png)

## Inputs

在。执行。

目标：HUD对象参考。

材料。材料界面对象参考。要使用的材料。

屏幕X。Float（单精度）。屏幕空间的X坐标，即四边形的左上角。

屏幕Y。Float（单精度）。四边形左上角的屏幕空间Y坐标。

屏幕W。Float（单精度）。四元组的屏幕空间宽度（单位：像素）。

屏幕H：浮点数（单精度）。四元组的屏幕空间高度（单位：像素）。

材料U。Float（单精度）。四边形左上角的纹理空间U坐标。

材料V：浮点数（单精度）。四边形左上角的纹理空间V坐标。

材质 UWidth: Float（单精度）。四边形的纹理空间宽度（以归一化的UV距离计算）。

材料VHeight。Float（单精度）。四边形的纹理空间高度（以归一化的UV距离计算）。

规模。Float（单精度）。缩放整个纹理的量（水平和垂直方向）。

规模位置。布尔值。参数 "Scale "是否应同时缩放此绘图调用的位置。

旋转。Float（单精度）。用于旋转这个四边形的量。

旋转支点。矢量二维结构。要旋转的位置（以四边形的比例，0-1）。  

## Outputs

出：执行。

Draws a material-textured quad on the HUD.

Target is HUD

## 图示

![]($-20221218-19161582.png)

## Inputs

In: Exec.

Target: HUD Object Reference.

Material: Material Interface Object Reference. Material to use.

Screen X: Float (single-precision). Screen-space X coordinate of upper left corner of the quad..

Screen Y: Float (single-precision). Screen-space Y coordinate of upper left corner of the quad..

Screen W: Float (single-precision). Screen-space width of the quad (in pixels)..

Screen H: Float (single-precision). Screen-space height of the quad (in pixels)..

Material U: Float (single-precision). Texture-space U coordinate of upper left corner of the quad.

Material V: Float (single-precision). Texture-space V coordinate of upper left corner of the quad..

Material UWidth: Float (single-precision). Texture-space width of the quad (in normalized UV distance)..

Material VHeight: Float (single-precision). Texture-space height of the quad (in normalized UV distance)..

Scale: Float (single-precision). Amount to scale the entire texture (horizontally and vertically).

Scale Position: Boolean. Whether the "Scale" parameter should also scale the position of this draw call..

Rotation: Float (single-precision). Amount to rotate this quad.

Rot Pivot: Vector 2D Structure. Location (as proportion of quad, 0-1) to rotate about.  

## Outputs

Out: Exec.

