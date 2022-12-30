# MatchesWildcard

在这个字符串中搜索一个给定的通配符

目标是Kismet字符串库

## 图示

![]($-20221218-14294306.png)

## Inputs

源字符串。字符串。

通配符。字符串。*?-类型的通配符。

Search Case: ESearchCase Enum。表示搜索是否区分大小写（默认为ESearchCase::IgnoreCase）。 

## Outputs

返回值。Boolean。如果这个字符串与给定的*?-type通配符匹配，则为true。
