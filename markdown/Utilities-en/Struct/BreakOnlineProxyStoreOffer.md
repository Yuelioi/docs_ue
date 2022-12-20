# BreakOnlineProxyStoreOffer

Adds a node that breaks a 'OnlineProxyStoreOffer' into its member fields

## 图示

![]($-20221218-14405275.png)

## Inputs

Online Proxy Store Offer: Online Proxy Store Offer Structure (by ref).  

## Outputs

Offer Id: String. Offer Id:. Unique offer identifier.

Title: Text. Title:. Title for display.

Description: Text. Description:. Short description for display.

Long Description: Text. Long Description:. Full description for display.

Regular Price Text: Text. Regular Price Text:. Regular non-sale price as text for display.

Regular Price: Integer. Regular Price:. Regular non-sale price in numeric form for comparison/sorting.

Price Text: Text. Price Text:. Final-Pricing (Post-Sales/Discounts) as text for display.

Numeric Price: Integer. Numeric Price:. Final-Price (Post-Sales/Discounts) in numeric form for comparison/sorting.

Currency Code: String. Currency Code:. Price currency code.

Release Date: Date Time Structure. Release Date:. Date the offer was released.

Expiration Date: Date Time Structure. Expiration Date:. Date this information is no longer valid (maybe due to sale ending, etc).

Discount Type: EOnlineProxyStoreOfferDiscountType Enum. Discount Type:. Type of discount currently running on this offer (if any).

Dynamic Fields: Map of Strings to Strings. Dynamic Fields.

