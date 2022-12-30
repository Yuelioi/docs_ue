# ConvertLightComponent

注意：我们在这些函数上使用FLT_MAX，因为Usd.TimeCode.Default().GetValue()实际上是一个纳数，而纳数参数被自动消毒为0.0f。我们在函数中手动将FLT_MAX值转换成Usd.TimeCode.Default().GetValue()，所以如果你想要默认的时间码，只需省略该参数。我们也被迫在这里复制FLT_MAX值（3.402823466e+38F），因为默认参数在预处理程序替换定义之前被解析。

目标是Usd转换蓝图语境

## 图示

![]($-20221218-18220947.png)

## Inputs

在。执行。

目标。Usd Conversion Blueprint Context 对象参考。

组件。Light Component 基础对象参考。

原始路径。字符串。

时间代码。Float（单精度）。 

## Outputs

输出。执行。

返回值。布尔值。注意：我们在这些函数上使用FLT_MAX，因为Usd.TimeCode.Default().GetValue()实际上是一个nan，而nan参数被自动消毒为0.0f。我们在函数中手动将FLT_MAX值转换成Usd.TimeCode.Default().GetValue()，所以如果你想要默认的时间码，只需省略该参数。我们也被迫在这里复制FLT_MAX值（3.402823466e+38F），因为默认参数在预处理程序替换定义之前被解析。
