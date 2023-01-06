# DrawTexture

在HUD上绘制一个有纹理的四边形。

目标是HUD

## 图示

![]($-20221218-19162182.png)

## Inputs

在。执行。

目标：HUD对象参考。

纹理。纹理对象参考。纹理的绘制...

屏幕X。Float（单精度）。屏幕空间的X坐标，即四边形的左上角。

屏幕Y。Float（单精度）。四边形左上角的屏幕空间Y坐标。

屏幕W。Float（单精度）。四元组的屏幕空间宽度（单位：像素）。

屏幕H：浮点数（单精度）。四元组的屏幕空间高度（单位：像素）。

纹理U：浮点数（单精度）。四边形左上角的纹理空间U坐标。

纹理V。Float（单精度）。四边形左上角的纹理空间V坐标。

纹理UWidth：浮点数（单精度）。四边形的纹理空间宽度（以归一化的UV距离计算）。

纹理VHeight。Float（单精度）。四边形的纹理空间高度（以归一化的UV距离计算）。

色调颜色：线性颜色结构。顶点的颜色为四边形...

混合模式。EBlendMode枚举。控制该四边形与场景的混合方式。默认情况下是半透明的。

规模。Float（单精度）。缩放整个纹理的量（水平和垂直方向）。

规模位置。布尔值。参数 "Scale "是否应同时缩放此绘图调用的位置。

旋转。Float（单精度）。该四边形的旋转量。

旋转支点。矢量二维结构。要旋转的位置（以四边形的比例，0-1）。  

## Outputs

出：执行。

Draws a textured quad on the HUD.

Target is HUD

## 图示

![]($-20221218-19162182.png)

## Inputs

In: Exec.

Target: HUD Object Reference.

Texture: Texture Object Reference. Texture to draw..

Screen X: Float (single-precision). Screen-space X coordinate of upper left corner of the quad..

Screen Y: Float (single-precision). Screen-space Y coordinate of upper left corner of the quad..

Screen W: Float (single-precision). Screen-space width of the quad (in pixels)..

Screen H: Float (single-precision). Screen-space height of the quad (in pixels)..

Texture U: Float (single-precision). Texture-space U coordinate of upper left corner of the quad.

Texture V: Float (single-precision). Texture-space V coordinate of upper left corner of the quad..

Texture UWidth: Float (single-precision). Texture-space width of the quad (in normalized UV distance)..

Texture VHeight: Float (single-precision). Texture-space height of the quad (in normalized UV distance)..

Tint Color: Linear Color Structure. Vertex color for the quad..

Blend Mode: EBlendMode Enum. Controls how to blend this quad with the scene. Translucent by default..

Scale: Float (single-precision). Amount to scale the entire texture (horizontally and vertically).

Scale Position: Boolean. Whether the "Scale" parameter should also scale the position of this draw call..

Rotation: Float (single-precision). Amount to rotate this quad.

Rot Pivot: Vector 2D Structure. Location (as proportion of quad, 0-1) to rotate about.  

## Outputs

Out: Exec.

