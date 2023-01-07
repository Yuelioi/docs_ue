# DrawText

在 Canvas 上绘制文本。

目标是画布

## 图示

![](/uploads/projects/ue-bluprint/20221218-18144551.png)

## Inputs

在。执行。

目标。Canvas 对象参考。

渲染字体。字体对象参考。渲染文本时使用的字体。如果为空，则使用默认的引擎字体。

Render Text（渲染文本）。字符串。要在画布上渲染的文本。

Screen Position（屏幕位置）。矢量 2D 结构。渲染文本的屏幕空间位置。

Scale（比例）。矢量二维结构。

Render Color: 线性色彩结构。渲染文本的颜色。

Kerning。Float（单精度）。水平间距调整，修改每个字母之间的间距。

Shadow Color（阴影）：线性颜色结构。呈现文本的阴影的颜色。

Shadow Offset（阴影偏移）。矢量 2D 结构。相对于屏幕空间位置的像素偏移，以呈现文字的阴影。

Centre X：布尔值。如果为真，则将屏幕空间的 X 坐标解释为渲染文本的中心。

中心 Y：布尔值。如果为真，则将屏幕空间的 Y 坐标解释为渲染文本的中心。

勾画。布尔值。如果为真，那么文本应该被渲染成轮廓线。

轮廓颜色：线性颜色结构。渲染文本轮廓的颜色。

## Outputs

Out: 执行。

<hr>

Draws text on the Canvas.

Target is Canvas

## 图示

![](/uploads/projects/ue-bluprint/20221218-18144551.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Render Font: Font Object Reference. Font to use when rendering the text. If this is null, then a default engine font is used..

Render Text: String. Text to render on the Canvas..

Screen Position: Vector 2D Structure. Screen space position to render the text..

Scale: Vector 2D Structure.

Render Color: Linear Color Structure. Color to render the text..

Kerning: Float (single-precision). Horizontal spacing adjustment to modify the spacing between each letter..

Shadow Color: Linear Color Structure. Color to render the shadow of the text..

Shadow Offset: Vector 2D Structure. Pixel offset relative to the screen space position to render the shadow of the text..

Centre X: Boolean. If true, then interpret the screen space position X coordinate as the center of the rendered text..

Centre Y: Boolean. If true, then interpret the screen space position Y coordinate as the center of the rendered text..

Outlined: Boolean. If true, then the text should be rendered with an outline..

Outline Color: Linear Color Structure. Color to render the outline for the text..

## Outputs

Out: Exec.
