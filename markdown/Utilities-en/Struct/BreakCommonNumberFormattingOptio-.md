# BreakCommonNumberFormattingOptio-

Adds a node that breaks a 'CommonNumberFormattingOptions' into its member fields

## 图示

![]($-20221218-14324286.png)

## Inputs

Common Number Formatting Options: Common Number Formatting Options Structure (by ref).  

## Outputs

Rounding Mode: ERoundingMode Enum. Rounding Mode:. The rounding mode to be used when the actual value can not be precisely represented due to restrictions on the number of integral or fractional digits. See values for details..

Use Grouping: Boolean. Use Grouping:. Should the numerals use group separators. IE: "1,000,000".

Minimum Integral Digits: Integer. Minimum Integral Digits:. How many integral digits should be shown at minimum? May cause digit "padding". IE: A minimum of 3 integral digits means 1.0 -> "001"..

Maximum Integral Digits: Integer. Maximum Integral Digits:. How many integral digits should be shown at maximum? May cause rounding. IE: A maximum of 2 integral digits means 100.0 -> "99"..

Minimum Fractional Digits: Integer. Minimum Fractional Digits:. How many fractional digits should be shown at minimum? May cause digit "padding". IE: A minimum of 2 fractional digits means 1.0 -> "1.00"..

Maximum Fractional Digits: Integer. Maximum Fractional Digits:. How many fractional digits should be shown at maximum? May cause rounding. IE: HalfFromZero rounding and a maximum of 2 fractional digits means 0.009 -> "0.01"..

