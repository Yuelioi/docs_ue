# BuildString_vector2d

转换一个vector2d->字符串，以AppendTo+Prefix+InVector2d+Suffix的形式创建一个新字符串。

目标是Kismet字符串库

## 图示

![]($-20221218-14292577.png)

## Inputs

附加到。字符串。一个现有的字符串，作为转换字符串的开始。

前缀。字符串。作为前缀的字符串，在AppendTo字符串之后。

在Vector 2d中。矢量2D结构。要转换的vector2d值。使用标准的FVector2D::ToString转换。

后缀。字符串。后缀，用于添加到转换字符串的末尾。 

## Outputs

返回值。字符串。由传递的参数建立的新字符串。
