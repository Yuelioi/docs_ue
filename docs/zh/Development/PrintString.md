# PrintString

打印一个字符串到日志，也可以选择打印到屏幕。如果打印到日志为真，它将在输出日志窗口中可见。否则，它将只被记录为 "Verbose"，所以一般不会显示出来。

目标是Kismet系统库

## 图示

![]($-20221218-18424811.png)

## Inputs

在。执行。

在字符串。字符串。要注销的字符串。

打印到屏幕。布尔值。是否将输出结果打印到屏幕上。

打印到日志。布尔值。是否打印输出到日志。

文本颜色：线性颜色结构。要显示的文本的颜色。

持续时间。Float（单精度）。显示持续时间（如果打印到屏幕为真）。使用负数将导致从配置中加载持续时间。

钥匙。名称。如果提供了一个非空的键，该信息将取代屏幕上任何现有的相同键的信息。

## Outputs

出：执行。
