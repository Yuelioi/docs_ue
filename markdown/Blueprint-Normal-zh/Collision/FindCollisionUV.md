# FindCollisionUV

尝试找到碰撞冲击的UV。请注意，这只在物理设置中启用了 "支持来自撞击结果的UV "时才有效。

目标是游戏的静力学

## 图示

![]($-20221218-18184917.png)

## Inputs

命中：命中结果结构（通过参考）。

UV通道。整数。 

## Outputs

UV：矢量2D结构。

返回值。布尔值。尝试找到碰撞冲击的UV。注意，只有在物理设置中启用了 "支持来自撞击结果的UV "时，这个方法才有效。
