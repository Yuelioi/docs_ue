# AsCurrency

生成一个FT文本，将传递的数字表示为当前文化中的货币。BaseVal被指定为货币的最小分数值，并将根据选定的文化进行格式转换。请记住，CurrencyCode完全独立于它所显示的文化（它们并不相互暗示）。例如。FText::AsCurrencyBase(650, TEXT("EUR")); 将在大多数英语文化（en_US/en_UK）中返回"<EUR>6.50 "的FText，而在西班牙语（es_ES）中返回 "6,50<EUR>"（其中<EUR>为U+20AC）

目标是Kismet文本库

## 图示

![]($-20221218-15235538.png)

## Inputs

基本值。整数。

货币代码。字符串。  

## Outputs

返回值。文本。生成一个FT文本，在当前文化中表示传递的数字为货币。BaseVal被指定为货币的最小分数值，并将根据选定的文化进行格式转换。请记住，CurrencyCode完全独立于它所显示的文化（它们并不相互暗示）。例如。FText::AsCurrencyBase(650, TEXT("EUR")); 将在大多数英语文化（en_US/en_UK）中返回"<EUR>6.50 "的FText，而在西班牙语（es_ES）中返回 "6,50<EUR>"（其中<EUR>为U+20AC）。
