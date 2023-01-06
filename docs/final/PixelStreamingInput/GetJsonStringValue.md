# GetJsonStringValue

帮助函数，从JSON描述符中提取一个字符串字段。 UI交互给定其字段名。字段名可以是分层次的，以句号为界。例如，要访问上面一个Resolution命令的Width值，你应该使用。"Resolution.Width "来获取宽度值。

目标是像素流输入

## 图示

![]($-20221218-20292720.png)

## Inputs

目标。像素流输入对象参考。

描述符。字符串。UI交互的JSON描述符。

字段名。字符串。要在JSON中寻找的字段的名称。  

## Outputs

字母值。字符串。与字段名相关的字符串值。

成功。布尔值。如果该字段存在于JSON数据中，则为真。

Helper function to extract a string field from a JSON descriptor of a. UI interaction given its field name.. The field name may be hierarchical, delimited by a period. For example,. to access the Width value of a Resolution command above you should use. "Resolution.Width" to get the width value.

Target is Pixel Streaming Input

## 图示

![]($-20221218-20292720.png)

## Inputs

Target: Pixel Streaming Input Object Reference.

Descriptor: String. The UI interaction JSON descriptor..

Field Name: String. The name of the field to look for in the JSON..  

## Outputs

String Value: String. The string value associated with the field name..

Success: Boolean. True if the field exists in the JSON data..

