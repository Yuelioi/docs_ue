# GetFocalLocation

返回PlayerController所关注的位置。如果有一个被占有的棋子，返回该棋子的位置。如果有一个旁观者卒子，返回该卒子的位置。否则，返回PlayerController的产卵位置（通常是它死后最后一个已知的卒子位置）。

目标是玩家控制器

## 图示

![]($-20221218-20190155.png)

## Inputs

目标。玩家控制器对象参考。  

## Outputs

返回值。向量。返回PlayerController所关注的位置。如果有一个被占有的小卒，返回该小卒的位置。如果有一个旁观者卒子，返回该卒子的位置。否则，返回PlayerController的产卵位置（通常是它死后最后一个已知的卒子位置）。
