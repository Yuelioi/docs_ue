# GetActorEyesViewPoint

返回演员的视角。注意，这并不是指摄像机，而是指演员的 "眼睛"。例如，对于一个小兵来说，这将定义眼睛的高度位置，以及视图的旋转（这与小兵的旋转不同，后者有一个归零的俯仰成分）。摄像机第一人称视角通常会使用这个视点。大多数痕迹（武器，人工智能）将从这个视点完成。

目标是演员

## 图示

![]($-20221218-17342442.png)

## Inputs

目标。行为者对象参考。 

## Outputs

输出位置。矢量。视图点的位置。

Out Rotation（输出旋转）。旋转器。演员的视图旋转。
