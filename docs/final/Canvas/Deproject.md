# Deproject

使用为 Canvas 设置的投影矩阵，执行屏幕空间坐标的反投影。

目标是Canvas

## 图示

![]($-20221218-18143611.png)

## Inputs

在。执行。

目标。画布对象参考。

屏幕位置。矢量2D结构。屏幕空间位置，用于投影到世界。 

## Outputs

输出。执行：执行。

世界原点。向量。矢量，是屏幕空间位置的世界位置。

世界方向。向量。可以在追踪中使用的矢量，以确定屏幕空间位置的 "后面 "是什么。适用于物体的拾取...

Performs a deprojection of a screen space coordinate using the projection matrix set up for the Canvas.

Target is Canvas

## 图示

![]($-20221218-18143611.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Screen Position: Vector 2D Structure. Screen space position to deproject to the World..  

## Outputs

Out: Exec.

World Origin: Vector. Vector which is the world position of the screen space position..

World Direction: Vector. Vector which can be used in a trace to determine what is "behind" the screen space position. Useful for object picking..

