# NormalizedValuetoBytes

返回所需信号格式中Value的字节格式。

目标是DMXSubsystem

## 图示

![]($-20221218-18443858.png)

## Inputs

目标。DMXSubsystem对象参考。

在值。Float（单精度）。

在信号格式中。EDMXFixtureSignalFormat枚举。

使用LSB：布尔值。最不重要的字节模式使函数的各个字节（通道）被解释为第一个字节是数字的最低部分。大多数灯具使用MSB（最重要的字节）。

## Outputs

字节。字节数组。
