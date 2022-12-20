# BreakContentBrowserDataFilter

Adds a node that breaks a 'ContentBrowserDataFilter' into its member fields

## 图示

![]($-20221218-14325341.png)

## Inputs

Content Browser Data Filter: Content Browser Data Filter Structure (by ref).  

## Outputs

Recursive Paths: Boolean. Recursive Paths:. Whether we should include sub-paths in this query.

Item Type Filter: EContentBrowserItemTypeFilter Enum. Item Type Filter:. Flags controlling which item types should be included in this query.

Item Category Filter: EContentBrowserItemCategoryFilter Enum. Item Category Filter:. Flags controlling which item categories should be included in this query.

Item Attribute Filter: EContentBrowserItemAttributeFilter Enum. Item Attribute Filter:. Flags controlling which item attributes should be included in this query.

