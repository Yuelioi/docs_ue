# Split

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

