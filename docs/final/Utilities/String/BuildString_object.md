# BuildString_object

转换一个对象->字符串，以 AppendTo+前缀+对象名称+后缀的形式创建一个新的字符串。

目标是 Kismet 字符串库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14292311.png)

## Inputs

附加到。字符串。一个现有的字符串，作为转换字符串的开始。

前缀。字符串。作为前缀的字符串，在 AppendTo 字符串之后使用。

In Obj: 对象参考。要转换的对象。将插入对象的名称到转换字符串中。

后缀。字符串。要添加到转换字符串末尾的后缀。

## Outputs

返回值。字符串。由传递的参数建立的新字符串。

<hr>

Converts a object->string, creating a new string in the form AppendTo+Prefix+object name+Suffix

Target is Kismet String Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14292311.png)

## Inputs

Append To: String. An existing string to use as the start of the conversion string.

Prefix: String. A string to use as a prefix, after the AppendTo string.

In Obj: Object Reference. The object to convert. Will insert the name of the object into the conversion string.

Suffix: String. A suffix to append to the end of the conversion string.

## Outputs

Return Value: String. A new string built from the passed parameters.
