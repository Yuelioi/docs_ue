# BuildString_LinearColor

转换一个颜色->字符串，以 AppendTo+Prefix+InColor+Suffix 的形式创建一个新字符串。

目标是 Kismet 字符串库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14292135.png)

## Inputs

附加到。字符串。一个现有的字符串，作为转换字符串的开始。

前缀。字符串。作为前缀的字符串，在 AppendTo 字符串之后。

In Color: 线性颜色结构。要转换的线性颜色值。使用标准的 ToString 转换。

Suffix（后缀）。字符串。要附加到转换字符串末尾的后缀。

## Outputs

返回值。字符串。由传递的参数建立的新字符串。

<hr>

Converts a color->string, creating a new string in the form AppendTo+Prefix+InColor+Suffix

Target is Kismet String Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14292135.png)

## Inputs

Append To: String. An existing string to use as the start of the conversion string.

Prefix: String. A string to use as a prefix, after the AppendTo string.

In Color: Linear Color Structure. The linear color value to convert. Uses the standard ToString conversion.

Suffix: String. A suffix to append to the end of the conversion string.

## Outputs

Return Value: String. A new string built from the passed parameters.
