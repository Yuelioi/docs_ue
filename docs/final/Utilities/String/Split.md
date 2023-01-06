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

Splits this string at given string position case sensitive.

Target is Kismet String Library

## 图示

![]($-20221218-14295348.png)

## Inputs

Source String: String.

In Str: String. The string to search and split at.

Search Case: ESearchCase Enum. Indicates whether the search is case sensitive or not ( defaults to ESearchCase::IgnoreCase ).

Search Dir: ESearchDir Enum. Indicates whether the search starts at the begining or at the end ( defaults to ESearchDir::FromStart ).  

## Outputs

Left S: String. out the string to the left of InStr, not updated if return is false.

Right S: String. out the string to the right of InStr, not updated if return is false.

Return Value: Boolean. true if string is split, otherwise false.

