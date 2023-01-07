# DebugDrawTrajectory

将轨迹样本投射到一组定义好的允许方向上

目标是运动轨迹蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20073189.png)

## Inputs

演员。Actor Object Reference.

世界转型。变换（通过参考）。输入世界变换以建立绘制轨迹的世界空间基础。

轨迹。轨迹采样范围结构（通过参考）。输入轨迹范围。

预测颜色：线性颜色结构。输入预测颜色来插值样本画向。

历史色彩：线性色彩结构。输入历史颜色来插值样本画向。

箭头刻度。Float（单精度）。输入样本速度绘制比例。

箭头大小。浮点数（单精度）。输入样本箭头的大小。

箭头厚度。Float（单精度）。输入箭头绘制的样本厚度。

## Outputs

<hr>

Projects trajectory samples onto a defined set of allowed directions

Target is Motion Trajectory Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20073189.png)

## Inputs

Actor: Actor Object Reference.

World Transform: Transform (by ref). Input world transform to establish a world-space basis for drawing the trajectory.

Trajectory: Trajectory Sample Range Structure (by ref). Input trajectory range.

Prediction Color: Linear Color Structure. Input prediction color to interpolate sample drawing towards.

History Color: Linear Color Structure. Input historical color to interpolate sample drawing towards.

Arrow Scale: Float (single-precision). Input sample velocity draw scale.

Arrow Size: Float (single-precision). Input sample arrow draw size.

Arrow Thickness: Float (single-precision). Input sample arrow draw thickness.

## Outputs
