# ReplaceInline

用ReplacementText替换这个字符串中所有出现的SearchText。

目标是Kismet字符串库

## 图示

![]($-20221218-14294834.png)

## Inputs

在。执行。

源字符串。字符串（通过引用）。

搜索文本。字符串。应从该字符串中删除的文本。

Replacement Text: 替换文本。字符串。要在其位置上插入的文本。

Search Case: ESearchCase Enum。表示搜索是否区分大小写（默认为ESearchCase::IgnoreCase）。 

## Outputs

输出。Exec。

返回值。整数。被替换的SearchText的出现次数。

Replace all occurrences of SearchText with ReplacementText in this string.

Target is Kismet String Library

## 图示

![]($-20221218-14294834.png)

## Inputs

In: Exec.

Source String: String (by ref).

Search Text: String. the text that should be removed from this string.

Replacement Text: String. the text to insert in its place.

Search Case: ESearchCase Enum. Indicates whether the search is case sensitive or not ( defaults to ESearchCase::IgnoreCase ).  

## Outputs

Out: Exec.

Return Value: Integer. the number of occurrences of SearchText that were replaced..

