# BreakInAppPurchaseProductInfo2

Adds a node that breaks a 'InAppPurchaseProductInfo2' into its member fields

## 图示

![]($-20221218-14381336.png)

## Inputs

In App Purchase Product Info 2: In App Purchase Product Info 2 Structure (by ref).  

## Outputs

Identifier: String. Identifier:. The unique product identifier.

Transaction Identifier: String. Transaction Identifier:. the unique transaction identifier.

Display Name: String. Display Name:. The localized display name.

Display Description: String. Display Description:. The localized display description name.

Display Price: String. Display Price:. The localized display price name.

Raw Price: Float (single-precision). Raw Price:. Raw price without currency code and symbol.

Currency Code: String. Currency Code:. The localized currency code of the price.

Currency Symbol: String. Currency Symbol:. The localized currency symbol of the price.

Decimal Separator: String. Decimal Separator:. The localized decimal separator used in the price.

Grouping Separator: String. Grouping Separator:. The localized grouping separator of the price.

Receipt Data: String. Receipt Data:. Opaque receipt data for the transaction.

Dynamic Fields: Map of Strings to Strings. Dynamic Fields:. Dynamic fields from raw Json data..

