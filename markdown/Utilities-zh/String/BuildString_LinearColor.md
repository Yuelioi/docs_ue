# BuildString_LinearColor

转换一个颜色->字符串，以AppendTo+Prefix+InColor+Suffix的形式创建一个新字符串。

目标是Kismet字符串库

## 图示

![]($-20221218-14292135.png)

## Inputs

附加到。字符串。一个现有的字符串，作为转换字符串的开始。

前缀。字符串。作为前缀的字符串，在AppendTo字符串之后。

In Color: 线性颜色结构。要转换的线性颜色值。使用标准的ToString转换。

Suffix（后缀）。字符串。要附加到转换字符串末尾的后缀。 

## Outputs

返回值。字符串。由传递的参数建立的新字符串。
