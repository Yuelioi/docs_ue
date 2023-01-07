# PrintText

将文本打印到日志中，也可以选择打印到屏幕上。如果打印到日志为真，它将在输出日志窗口中可见。否则，它将只被记录为 "Verbose"，所以一般不会显示出来。

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18424939.png)

## Inputs

在。执行。

在文本中。文本。注销的文本。

打印到屏幕。布尔值。是否将输出结果打印到屏幕上。

打印到日志。布尔值。是否打印输出到日志。

文本颜色：线性颜色结构。要显示的文本的颜色。

持续时间。Float（单精度）。显示持续时间（如果打印到屏幕为真）。使用负数将导致从配置中加载持续时间。

钥匙。名称。如果提供了一个非空的键，该信息将取代任何现有的屏幕上的相同键的信息。

## Outputs

出：执行。

<hr>

Prints text to the log, and optionally, to the screen. If Print To Log is true, it will be visible in the Output Log window. Otherwise it will be logged only as 'Verbose', so it generally won't show up.

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18424939.png)

## Inputs

In: Exec.

In Text: Text. The text to log out.

Print to Screen: Boolean. Whether or not to print the output to the screen.

Print to Log: Boolean. Whether or not to print the output to the log.

Text Color: Linear Color Structure. The color of the text to display.

Duration: Float (single-precision). The display duration (if Print to Screen is True). Using negative number will result in loading the duration time from the config..

Key: Name. If a non-empty key is provided, the message will replace any existing on-screen messages with the same key..

## Outputs

Out: Exec.
