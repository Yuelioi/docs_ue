# BytestoNormalizedValue

返回给定字节数组的归一化值。数组中最多的前 4 个字节将被用于转换。

目标是 DMXSubsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18432411.png)

## Inputs

目标。DMXSubsystem 对象参考。

字节。字节数组。

使用 LSB：布尔值。最不重要的字节模式使函数的各个字节（通道）被解释为第一个字节是数字的最低部分。大多数灯具使用 MSB（最重要的字节）。

## Outputs

返回值。浮点数（单精度）。

<hr>

Return normalized value given an array of bytes. Up to the first 4 bytes in the array will be used for the conversion.

Target is DMXSubsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18432411.png)

## Inputs

Target: DMXSubsystem Object Reference.

Bytes: Array of Bytes.

Use LSB: Boolean. Least Significant Byte mode makes the individual bytes (channels) of the function be interpreted with the first bytes being the lowest part of the number. Most Fixtures use MSB (Most Significant Byte)..

## Outputs

Return Value: Float (single-precision).
