# GetNormalizedAttributeValue

从 Fixture 补丁函数中返回一个 Int 值的标准化值。

目标是 DMXSubsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18442556.png)

## Inputs

目标。DMXSubsystem 对象参考。

在灯具补丁中。DMX 灯具补丁对象参考。

在函数属性中。DMXAttribute Name 结构。

在值。整数。

## Outputs

返回值。Float（单精度）。使用该函数的信号格式，传递的 Int 的标准化值。如果在 Fixture 补丁中没有找到该函数，则为-1.0。

<hr>

Return the normalized value of an Int value from a Fixture Patch function.

Target is DMXSubsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18442556.png)

## Inputs

Target: DMXSubsystem Object Reference.

In Fixture Patch: DMX Fixture Patch Object Reference.

In Function Attribute: DMXAttribute Name Structure.

In Value: Integer.

## Outputs

Return Value: Float (single-precision). The normalized value of the passed in Int using the Function's signal format. -1.0 if the Function is not found in the Fixture Patch..
