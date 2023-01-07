# SetRadialMask

这个函数首先定义了一个径向整数字段，等于球体内部的内值/外部的外值。这个字段将与粒子输入值和掩码条件一起用于计算粒子输出值。

- 如果掩码条件 = set-always : 如果粒子的位置在球体内部，粒子的输出值将等于内部值/外部值，否则。

- 如果 Mask-condition = merge-interior : 如果粒子位置在球体内部或者粒子输入值已经是 Interior-Value / Exterior-value，则粒子输出值将等于 Interior-value。

- 如果 Mask-condition = merge-exterior：如果粒子的位置在球体之外，或者如果粒子的输入值已经是 Exterior-Value/Interior-value，那么粒子的输出值将等于 Exterior-value。

目标是 Radial Int Mask

## 图示

![](/uploads/projects/ue-bluprint/20221218-19000305.png)

## Inputs

目标。Radial Int Mask 对象参考。

掩码半径。Float（单精度）。径向场的半径。

中心位置。矢量。径向场的中心位置"。

内部值。整数。如果样本与中心的距离小于半径，中间值将被设定为内部值。

外部值。整数。如果样本与中心的距离大于半径，中间值将被设定为外部值。

屏蔽条件。ESetMaskConditionType 枚举。如果屏蔽条件被设置为总是，输出值将是中间值。如果设置为非内部/外部，如果输入与内部/外部值不同，输出值将是中间值。

## Outputs

返回值。径向 Int Mask 对象参考。

<hr>

This function first defines a radial integer field equal to Interior-value inside a sphere / Exterior-value outside. This field will be used alongside the particle input value and the mask condition to compute the particle output value.

- If Mask-condition = set-always : the particle output value will be equal to Interior-value if the particle position is inside a sphere / Exterior-value otherwise.

- If Mask-condition = merge-interior : the particle output value will be equal to Interior-value if the particle position is inside the sphere or if the particle input value is already Interior-Value / Exterior-value otherwise.

- If Mask-condition = merge-exterior : the particle output value will be equal to Exterior-value if the particle position is outside the sphere or if the particle input value is already Exterior-Value / Interior-value otherwise.

Target is Radial Int Mask

## 图示

![](/uploads/projects/ue-bluprint/20221218-19000305.png)

## Inputs

Target: Radial Int Mask Object Reference.

Mask Radius: Float (single-precision). Radius of the radial field.

Center Position: Vector. Center position of the radial field".

Interior Value: Integer. If the sample distance from the center is less than radius, the intermediate value will be set the interior value.

Exterior Value: Integer. If the sample distance from the center is greater than radius, the intermediate value will be set the exterior value.

Mask Condition: ESetMaskConditionType Enum. If the mask condition is set to always the output value will be the intermediate one. If set to not interior/exterior the output value will be the intermediate one if the input is different from the interior/exterior value.

## Outputs

Return Value: Radial Int Mask Object Reference.
