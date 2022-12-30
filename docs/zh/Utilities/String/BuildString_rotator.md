# BuildString_rotator

转换一个旋转器->字符串，以AppendTo+Prefix+InRot+Suffix的形式创建一个新字符串。

目标是Kismet字符串库

## 图示

![]($-20221218-14292399.png)

## Inputs

附加到。字符串。一个现有的字符串，作为转换字符串的开始。

前缀。字符串。作为前缀的字符串，在AppendTo字符串之后使用。

In Rot: 旋转器。要转换的旋转器值。使用标准的ToString转换。

Suffix（后缀）。字符串。后缀，附加在转换字符串的末尾。 

## Outputs

返回值。字符串。由传递的参数建立的新字符串。
