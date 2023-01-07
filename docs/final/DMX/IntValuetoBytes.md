# IntValuetoBytes

返回所需信号格式中 Value 的字节格式。

目标是 DMXSubsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18443356.png)

## Inputs

在值。整数。

在信号格式中。EDMXFixtureSignalFormat 枚举。

使用 LSB：布尔值。最不重要的字节模式使函数的各个字节（通道）被解释为第一个字节是数字的最低部分。大多数灯具使用 MSB（最重要的字节）。

## Outputs

字节。字节数组。

<hr>

Return the Bytes format of Value in the desired Signal Format.

Target is DMXSubsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18443356.png)

## Inputs

In Value: Integer.

In Signal Format: EDMXFixtureSignalFormat Enum.

Use LSB: Boolean. Least Significant Byte mode makes the individual bytes (channels) of the function be interpreted with the first bytes being the lowest part of the number. Most Fixtures use MSB (Most Significant Byte)..

## Outputs

Bytes: Array of Bytes.
