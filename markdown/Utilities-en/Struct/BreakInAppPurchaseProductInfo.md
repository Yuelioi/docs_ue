# BreakInAppPurchaseProductInfo

Adds a node that breaks a 'InAppPurchaseProductInfo' into its member fields

## 图示

![]($-20221218-14381246.png)

## Inputs

In App Purchase Product Info: In App Purchase Product Info Structure (by ref).  

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

