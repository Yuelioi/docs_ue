# AsCurrency

Generate an FText that represents the passed number as currency in the current culture.. BaseVal is specified in the smallest fractional value of the currency and will be converted for formatting according to the selected culture.. Keep in mind the CurrencyCode is completely independent of the culture it's displayed in (and they do not imply one another).. For example: FText::AsCurrencyBase(650, TEXT("EUR")); would return an FText of "<EUR>6.50" in most English cultures (en_US/en_UK) and "6,50<EUR>" in Spanish (es_ES) (where <EUR> is U+20AC)

Target is Kismet Text Library

## 图示

![]($-20221218-15235538.png)

## Inputs

Base Value: Integer.

Currency Code: String.  

## Outputs

Return Value: Text. Generate an FText that represents the passed number as currency in the current culture.. BaseVal is specified in the smallest fractional value of the currency and will be converted for formatting according to the selected culture.. Keep in mind the CurrencyCode is completely independent of the culture it's displayed in (and they do not imply one another).. For example: FText::AsCurrencyBase(650, TEXT("EUR")); would return an FText of "<EUR>6.50" in most English cultures (en_US/en_UK) and "6,50<EUR>" in Spanish (es_ES) (where <EUR> is U+20AC).

