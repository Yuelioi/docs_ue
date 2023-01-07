# BuildString_vector2d

转换一个 vector2d->字符串，以 AppendTo+Prefix+InVector2d+Suffix 的形式创建一个新字符串。

目标是 Kismet 字符串库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14292577.png)

## Inputs

附加到。字符串。一个现有的字符串，作为转换字符串的开始。

前缀。字符串。作为前缀的字符串，在 AppendTo 字符串之后。

在 Vector 2d 中。矢量 2D 结构。要转换的 vector2d 值。使用标准的 FVector2D::ToString 转换。

后缀。字符串。后缀，用于添加到转换字符串的末尾。

## Outputs

返回值。字符串。由传递的参数建立的新字符串。

<hr>

Converts a vector2d->string, creating a new string in the form AppendTo+Prefix+InVector2d+Suffix

Target is Kismet String Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14292577.png)

## Inputs

Append To: String. An existing string to use as the start of the conversion string.

Prefix: String. A string to use as a prefix, after the AppendTo string.

In Vector 2d: Vector 2D Structure. The vector2d value to convert. Uses the standard FVector2D::ToString conversion.

Suffix: String. A suffix to append to the end of the conversion string.

## Outputs

Return Value: String. A new string built from the passed parameters.
