# PlayWorldCameraShake

播放世界范围内的相机抖动，影响到所有附近的本地玩家，并有基于距离的衰减。不能复制。

目标是游戏规则

## 图示

![]($-20221218-18131696.png)

## Inputs

在。执行。

摇晃。相机摇动基类参考。使用的相机抖动资产。

Epicenter（中心）。向量。在世界空间中放置效果的位置。

Inner Radius（内半径）。Float（单精度）。此半径内的相机将被忽略。

外半径。Float（单精度）。在InnerRadius之外和在此范围内的相机会受到影响。

衰减（Falloff）。Float（单精度）。在接近OuterRadius时影响效果的衰减。

Orient Shake Towards Epicenter（面向中心）。布尔值。改变摇动的旋转方向，使其指向震中而不是向前。 

## Outputs

输出。执行。
