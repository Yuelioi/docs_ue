# AddJsonStringValue

向JSON描述符添加字符串字段的辅助函数。这将产生一个新的描述符，然后可以用链子来添加更多的字符串字段。

目标是像素流输入

## 图示

![]($-20221218-20292603.png)

## Inputs

目标。像素流输入对象参考。

描述符。字符串。最初的JSON描述符，最初可能是空白。

字段名。字符串。要添加到JSON中的字段的名称。

字母值。字符串。与字段名相关的字符串值。

## Outputs

新的描述符。字符串。添加有字符串字段的JSON描述符。

成功。布尔值。如果字符串字段能被成功添加，则为真。
