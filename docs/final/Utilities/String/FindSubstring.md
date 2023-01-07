# FindSubstring

查找指定字符串中一个子串的起始索引

目标是 Kismet 字符串库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14293182.png)

## Inputs

搜索在。字符串。要搜索的字符串。

子串。字符串。要在 SearchIn 字符串中寻找的字符串。

Use Case: Boolean. 是否对大小写敏感。

从末尾开始搜索。布尔型。是否从字符串的末尾开始搜索，而不是从开头开始。

开始位置。整数。开始搜索的位置。

## Outputs

返回值。整数。子串第一次出现的索引（如果 bSearchFromEnd 为假，则从 0 开始）。

<hr>

Finds the starting index of a substring in the a specified string

Target is Kismet String Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14293182.png)

## Inputs

Search In: String. The string to search within.

Substring: String. The string to look for in the SearchIn string.

Use Case: Boolean. Whether or not to be case-sensitive.

Search from End: Boolean. Whether or not to start the search from the end of the string instead of the beginning.

Start Position: Integer. The position to start the search from.

## Outputs

Return Value: Integer. The index (starting from 0 if bSearchFromEnd is false) of the first occurence of the substring.
