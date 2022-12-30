# ConsolidateAssets

Consolidates an asset by replacing all references/uses of the provided AssetsToConsolidate with references to AssetToConsolidateTo.. This is useful when you want all references of assets to be replaced by a single asset.. The function first attempts to directly replace all relevant references located within objects that are already loaded and in memory.. Next, it deletes the AssetsToConsolidate, leaving behind object redirectors to AssetToConsolidateTo.

Target is Editor Asset Library

## 图示

![]($-20221218-18470229.png)

## Inputs

In: Exec.

Asset to Consolidate To: Object Reference. Asset to which all references of the AssetsToConsolidate will instead refer to after this operation completes..

Assets to Consolidate: Array of Object References. All references to these assets will be modified to reference AssetToConsolidateTo instead..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

