# BuildString_boolean

转换一个布尔值->字符串，以AppendTo+Prefix+InBool+Suffix的形式创建一个新字符串。

目标是Kismet字符串库

## 图示

![]($-20221218-14291785.png)

## Inputs

附加到。字符串。一个现有的字符串，作为转换字符串的开始。

前缀。字符串。作为前缀的字符串，在AppendTo字符串之后使用。

In Bool: 布尔值。要转换的布尔值。将添加 "true "或 "false "到转换字符串中。

后缀。字符串。要添加到转换字符串末尾的后缀。 

## Outputs

返回值。字符串。由传递的参数建立的新字符串。
