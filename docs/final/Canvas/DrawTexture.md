# DrawTexture

在 Canvas 上绘制一个纹理。

目标是 Canvas

## 图示

![](/uploads/projects/ue-bluprint/20221218-18144687.png)

## Inputs

在。执行。

目标。Canvas 对象参考。

渲染纹理。纹理对象参考。渲染时使用的纹理。如果没有设置纹理，那么将使用默认的白色纹理。

Screen Position（屏幕位置）。Vector 2D 结构。渲染纹理的屏幕空间位置。

Screen Size（屏幕尺寸）：屏幕尺寸。Vector 2D Structure（矢量二维结构）。渲染纹理的屏幕空间大小。

Coordinate Position（坐标位置）。Vector 2D Structure（矢量二维结构）。渲染纹理时使用的标准化的 UV 起始坐标。

Coordinate Size（坐标尺寸）：向量 2D 结构。Vector 2D Structure（矢量二维结构）。渲染纹理时使用的归一化的 UV 尺寸坐标。

Render Color（渲染颜色）：线性颜色结构。渲染纹理时使用的颜色。

Blend Mode（混合模式）。EBlendMode Enum。渲染纹理时使用的混合模式。

Rotation（旋转）。Float（单精度）。渲染纹理时的旋转度数。

Pivot Point（支点 矢量 2D 结构。旋转纹理时使用的规范化支点。

## Outputs

Out（输出）。Exec.

<hr>

Draws a texture on the Canvas.

Target is Canvas

## 图示

![](/uploads/projects/ue-bluprint/20221218-18144687.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Render Texture: Texture Object Reference. Texture to use when rendering. If no texture is set then this will use the default white texture..

Screen Position: Vector 2D Structure. Screen space position to render the texture..

Screen Size: Vector 2D Structure. Screen space size to render the texture..

Coordinate Position: Vector 2D Structure. Normalized UV starting coordinate to use when rendering the texture..

Coordinate Size: Vector 2D Structure. Normalized UV size coordinate to use when rendering the texture..

Render Color: Linear Color Structure. Color to use when rendering the texture..

Blend Mode: EBlendMode Enum. Blending mode to use when rendering the texture..

Rotation: Float (single-precision). Rotation, in degrees, to render the texture..

Pivot Point: Vector 2D Structure. Normalized pivot point to use when rotating the texture..

## Outputs

Out: Exec.
