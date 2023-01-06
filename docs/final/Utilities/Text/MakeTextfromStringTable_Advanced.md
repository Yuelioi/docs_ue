# MakeTextfromStringTable_Advanced

试图从一个字符串表的ID和键创建一个文本实例。注意：这是为允许从动态内容中查找字符串表条目而存在的--你应该尽可能在文本属性或引脚上设置你的字符串表引用，因为它明显更强大（见 "制作字面文本"）。

目标是Kismet文本库

## 图示

![]($-20221218-15241276.png)

## Inputs

表一。名称。

键：字符串。  

## Outputs

返回值。文本。找到的文本，如果找不到该条目，则是一个假的文本。

Attempts to create a text instance from a string table ID and key.. Note: This exists to allow programmatic ?look-up of a string table entry from dynamic content - you should favor setting your string table reference on a text property or pin wherever possible as it is significantly more robust (see "Make Literal Text").

Target is Kismet Text Library

## 图示

![]($-20221218-15241276.png)

## Inputs

Table Id: Name.

Key: String.  

## Outputs

Return Value: Text. The found text, or a dummy text if the entry could not be found..

