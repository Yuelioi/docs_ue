# BuildString_vector

转换一个向量->字符串，以AppendTo+Prefix+InVector+Suffix的形式创建一个新字符串。

目标是Kismet字符串库

## 图示

![]($-20221218-14292489.png)

## Inputs

附加到。字符串。一个现有的字符串，作为转换字符串的开始。

前缀。字符串。作为前缀的字符串，在AppendTo字符串之后使用。

In Vector: 矢量。要转换的向量值。使用标准的FVector::ToString转换。

后缀。字符串。后缀，附加到转换字符串的末尾。 

## Outputs

返回值。字符串。由传递的参数建立的新字符串。

Converts a vector->string, creating a new string in the form AppendTo+Prefix+InVector+Suffix

Target is Kismet String Library

## 图示

![]($-20221218-14292489.png)

## Inputs

Append To: String. An existing string to use as the start of the conversion string.

Prefix: String. A string to use as a prefix, after the AppendTo string.

In Vector: Vector. The vector value to convert. Uses the standard FVector::ToString conversion.

Suffix: String. A suffix to append to the end of the conversion string.  

## Outputs

Return Value: String. A new string built from the passed parameters.

