# GeneratePFMExtended

生成并保存数据到一个 PFM 文件。此外，我们有一个瓷砖有效标志的数组（假==一个瓷砖的所有像素都是 NaN）。

目标是 Warp Utils 蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20060264.png)

## Inputs

在。执行。

文件。字符串。

开始位置。向量（由裁判）。

开始轮换。旋转器（由裁判）。

PFMOrigin:Actor Object Reference.

瓷砖水平：整数。

瓷砖垂直：整数。

柱子的角度。Float（单精度）。

瓷砖尺寸水平。浮点数（单精度）。

瓦片尺寸垂直。浮点数（单精度）。

瓦片像素水平：整数。

瓦片像素垂直：整数。

添加保证金。布尔值。

瓷砖的有效性标志。布尔运算的数组。

## Outputs

出：执行。

返回值。布尔值。生成并保存数据到一个 PFM 文件。此外，我们有一个瓷砖有效标志的数组（假==一个瓷砖的所有像素都是 NaN）。

<hr>

Generate and save data to a PFM file. Additionally, we have an array of tiles validiy flags (false == all pixels of a tile are NaN)

Target is Warp Utils Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20060264.png)

## Inputs

In: Exec.

File: String.

Start Location: Vector (by ref).

Start Rotation: Rotator (by ref).

PFMOrigin: Actor Object Reference.

Tiles Horizontal: Integer.

Tiles Vertical: Integer.

Column Angle: Float (single-precision).

Tile Size Horizontal: Float (single-precision).

Tile Size Vertical: Float (single-precision).

Tile Pixels Horizontal: Integer.

Tile Pixels Vertical: Integer.

Add Margin: Boolean.

Tiles Validity Flags: Array of Booleans.

## Outputs

Out: Exec.

Return Value: Boolean. Generate and save data to a PFM file. Additionally, we have an array of tiles validiy flags (false == all pixels of a tile are NaN).
