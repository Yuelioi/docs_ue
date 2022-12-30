# ReplaceInline

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

