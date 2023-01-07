# DrawMaterial

在 Canvas 上绘制一个材料。

目标是画布

## 图示

![](/uploads/projects/ue-bluprint/20221218-18144151.png)

## Inputs

在。执行。

目标。Canvas 对象参考。

渲染材料。材料界面对象参考。渲染时使用的材料。记住，只有发射通道可以被渲染，因为在渲染到 Canvas 时不会进行照明。

Screen Position（屏幕位置）。矢量 2D 结构。渲染纹理的屏幕空间位置。

Screen Size（屏幕尺寸）。Vector 2D Structure（向量 2D 结构）。渲染纹理的屏幕空间大小。

Coordinate Position（坐标位置）。Vector 2D Structure（矢量二维结构）。渲染纹理时使用的标准化的 UV 起始坐标。

Coordinate Size（坐标尺寸）：向量 2D 结构。Vector 2D Structure（矢量二维结构）。渲染纹理时使用的归一化的 UV 尺寸坐标。

Rotation（旋转）。Float（单精度）。渲染纹理时的旋转度数。

Pivot Point（支点）：向量 2D 结构。矢量 2D 结构。旋转纹理时使用的规范化支点。

## Outputs

Out（输出）。Exec.

<hr>

Draws a material on the Canvas.

Target is Canvas

## 图示

![](/uploads/projects/ue-bluprint/20221218-18144151.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Render Material: Material Interface Object Reference. Material to use when rendering. Remember that only the emissive channel is able to be rendered as no lighting is performed when rendering to the Canvas..

Screen Position: Vector 2D Structure. Screen space position to render the texture..

Screen Size: Vector 2D Structure. Screen space size to render the texture..

Coordinate Position: Vector 2D Structure. Normalized UV starting coordinate to use when rendering the texture..

Coordinate Size: Vector 2D Structure. Normalized UV size coordinate to use when rendering the texture..

Rotation: Float (single-precision). Rotation, in degrees, to render the texture..

Pivot Point: Vector 2D Structure. Normalized pivot point to use when rotating the texture..

## Outputs

Out: Exec.
