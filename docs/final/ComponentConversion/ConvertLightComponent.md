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

Note: We use FLT_MAX on these functions because Usd.TimeCode.Default().GetValue() is actually a nan, and nan arguments are automatically sanitized to 0.0f.. We manually convert the FLT_MAX value into Usd.TimeCode.Default().GetValue() within the functions though, so if you want the Default timecode just omit the argument. We are also forced to copypaste the FLT_MAX value (3.402823466e+38F) in here as the default arguments are parsed before the preprocessor replaces the defines

Target is Usd Conversion Blueprint Context

## 图示

![]($-20221218-18220947.png)

## Inputs

In: Exec.

Target: Usd Conversion Blueprint Context Object Reference.

Component: Light Component Base Object Reference.

Prim Path: String.

Time Code: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: Boolean. Note: We use FLT_MAX on these functions because Usd.TimeCode.Default().GetValue() is actually a nan, and nan arguments are automatically sanitized to 0.0f.. We manually convert the FLT_MAX value into Usd.TimeCode.Default().GetValue() within the functions though, so if you want the Default timecode just omit the argument. We are also forced to copypaste the FLT_MAX value (3.402823466e+38F) in here as the default arguments are parsed before the preprocessor replaces the defines.

