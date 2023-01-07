# AsCurrency

生成一个 FT 文本，将传递的数字表示为当前文化中的货币。BaseVal 被指定为货币的最小分数值，并将根据选定的文化进行格式转换。请记住，CurrencyCode 完全独立于它所显示的文化（它们并不相互暗示）。例如。FText::AsCurrencyBase(650, TEXT("EUR")); 将在大多数英语文化（en_US/en_UK）中返回"<EUR>6.50 "的 FText，而在西班牙语（es_ES）中返回 "6,50<EUR>"（其中<EUR>为 U+20AC）

目标是 Kismet 文本库

## 图示

![](/uploads/projects/ue-bluprint/20221218-15235538.png)

## Inputs

基本值。整数。

货币代码。字符串。

## Outputs

返回值。文本。生成一个 FT 文本，在当前文化中表示传递的数字为货币。BaseVal 被指定为货币的最小分数值，并将根据选定的文化进行格式转换。请记住，CurrencyCode 完全独立于它所显示的文化（它们并不相互暗示）。例如。FText::AsCurrencyBase(650, TEXT("EUR")); 将在大多数英语文化（en_US/en_UK）中返回"<EUR>6.50 "的 FText，而在西班牙语（es_ES）中返回 "6,50<EUR>"（其中<EUR>为 U+20AC）。

<hr>

Generate an FText that represents the passed number as currency in the current culture.. BaseVal is specified in the smallest fractional value of the currency and will be converted for formatting according to the selected culture.. Keep in mind the CurrencyCode is completely independent of the culture it's displayed in (and they do not imply one another).. For example: FText::AsCurrencyBase(650, TEXT("EUR")); would return an FText of "<EUR>6.50" in most English cultures (en_US/en_UK) and "6,50<EUR>" in Spanish (es_ES) (where <EUR> is U+20AC)

Target is Kismet Text Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-15235538.png)

## Inputs

Base Value: Integer.

Currency Code: String.

## Outputs

Return Value: Text. Generate an FText that represents the passed number as currency in the current culture.. BaseVal is specified in the smallest fractional value of the currency and will be converted for formatting according to the selected culture.. Keep in mind the CurrencyCode is completely independent of the culture it's displayed in (and they do not imply one another).. For example: FText::AsCurrencyBase(650, TEXT("EUR")); would return an FText of "<EUR>6.50" in most English cultures (en_US/en_UK) and "6,50<EUR>" in Spanish (es_ES) (where <EUR> is U+20AC).
