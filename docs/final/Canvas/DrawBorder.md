# DrawBorder

在 Canvas 上画一个 3x3 的网格边框，边框是平铺的，内部是平铺的。

目标是画布

## 图示

![](/uploads/projects/ue-bluprint/20221218-18143739.png)

## Inputs

在。执行。

目标。Canvas 对象参考。

边界纹理。纹理对象参考。用来做边框的纹理。

Background Texture（背景纹理）。纹理对象参考。用于边界背景的纹理。

Left Border Texture（左边界）。纹理对象参考。用于平铺左边界的纹理。

右边界纹理。Texture Object Reference（纹理对象参考）。用于绘制右边界的纹理。

顶部边框贴图。纹理对象参考。用于贴图的上边界的纹理。

底部边框贴图。纹理对象参考。用于铺设底边的纹理。

屏幕位置。Vector 2D 结构。渲染纹理的屏幕空间位置。

Screen Size（屏幕尺寸）。Vector 2D Structure（矢量二维结构）。渲染纹理的屏幕空间大小。

Coordinate Position（坐标位置）。Vector 2D Structure（矢量二维结构）。渲染边界纹理时使用的标准化 UV 起始坐标。

Coordinate Size（坐标尺寸）：向量 2D 结构。Vector 2D 结构。渲染边界纹理时使用的归一化 UV 尺寸坐标。

Render Color（渲染颜色）：线性颜色结构。边界的颜色。

Border Scale（边框尺寸）。矢量二维结构。边框的比例。

Background Scale（背景尺寸）。矢量二维结构。背景的比例。

Rotation（旋转）。Float（单精度）。渲染纹理的旋转度。

Pivot Point（支点）。矢量 2D 结构。旋转纹理时使用的规范化支点。

Corner Size（边角尺寸）：向量二维结构。二维矢量结构。帧角尺寸，占帧纹理的百分比（应小于 0.5f）。

## Outputs

Out: Exec。

<hr>

Draws a 3x3 grid border with tiled frame and tiled interior on the Canvas.

Target is Canvas

## 图示

![](/uploads/projects/ue-bluprint/20221218-18143739.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Border Texture: Texture Object Reference. Texture to use for border..

Background Texture: Texture Object Reference. Texture to use for border background..

Left Border Texture: Texture Object Reference. Texture to use for the tiling left border..

Right Border Texture: Texture Object Reference. Texture to use for the tiling right border..

Top Border Texture: Texture Object Reference. Texture to use for the tiling top border..

Bottom Border Texture: Texture Object Reference. Texture to use for the tiling bottom border..

Screen Position: Vector 2D Structure. Screen space position to render the texture..

Screen Size: Vector 2D Structure. Screen space size to render the texture..

Coordinate Position: Vector 2D Structure. Normalized UV starting coordinate to use when rendering the border texture..

Coordinate Size: Vector 2D Structure. Normalized UV size coordinate to use when rendering the border texture..

Render Color: Linear Color Structure. Color to tint the border..

Border Scale: Vector 2D Structure. Scale of the border..

Background Scale: Vector 2D Structure. Scale of the background..

Rotation: Float (single-precision). Rotation, in degrees, to render the texture..

Pivot Point: Vector 2D Structure. Normalized pivot point to use when rotating the texture..

Corner Size: Vector 2D Structure. Frame corner size in percent of frame texture (should be < 0.5f)..

## Outputs

Out: Exec.
