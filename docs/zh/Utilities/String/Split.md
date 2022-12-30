# Split

在给定的字符串位置分割这个字符串，对大小写敏感。

目标是Kismet字符串库

## 图示

![]($-20221218-14295348.png)

## Inputs

源字符串。字符串。

In Str: 字符串。要搜索和分割的字符串。

Search Case: ESearchCase Enum。表示搜索是否区分大小写（默认为ESearchCase::IgnoreCase）。

Search Dir: ESearchDir Enum. 表示搜索是从开始还是从结束开始（默认为ESearchDir::FromStart）。 

## Outputs

Out the string to the left of InStr, not updated if return is false. Left S: String.

Out the string to the right of InStr, out the string to the right of InStr, not updated if return is false.右S：字符串。

返回值。Boolean，如果字符串被分割，则为true，否则为false。
