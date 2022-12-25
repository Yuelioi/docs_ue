# SetRadialMask

这个函数首先定义了一个径向整数字段，等于球体内部的内值/外部的外值。这个字段将与粒子输入值和掩码条件一起用于计算粒子输出值。

  * 如果掩码条件 = set-always : 如果粒子的位置在球体内部，粒子的输出值将等于内部值/外部值，否则。

  * 如果Mask-condition = merge-interior : 如果粒子位置在球体内部或者粒子输入值已经是Interior-Value / Exterior-value，则粒子输出值将等于Interior-value。

  * 如果Mask-condition = merge-exterior：如果粒子的位置在球体之外，或者如果粒子的输入值已经是Exterior-Value/Interior-value，那么粒子的输出值将等于Exterior-value。





目标是Radial Int Mask

## 图示

![]($-20221218-19000305.png)

## Inputs

目标。Radial Int Mask 对象参考。

掩码半径。Float（单精度）。径向场的半径。

中心位置。矢量。径向场的中心位置"。

内部值。整数。如果样本与中心的距离小于半径，中间值将被设定为内部值。

外部值。整数。如果样本与中心的距离大于半径，中间值将被设定为外部值。

屏蔽条件。ESetMaskConditionType枚举。如果屏蔽条件被设置为总是，输出值将是中间值。如果设置为非内部/外部，如果输入与内部/外部值不同，输出值将是中间值。

## Outputs

返回值。径向Int Mask对象参考。