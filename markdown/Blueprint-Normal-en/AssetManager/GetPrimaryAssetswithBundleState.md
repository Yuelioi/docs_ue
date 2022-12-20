# GetPrimaryAssetswithBundleState

Returns the list of assets that are in a given bundle state. Required Bundles must be specified. If ExcludedBundles is not empty, it will not return any assets in those bundle states. If ValidTypes is not empty, it will only return assets of those types. If ForceCurrentState is true it will use the current state even if a load is in process

Target is Kismet System Library

## 图示

![]($-20221218-18001155.png)

## Inputs

In: Exec.

Required Bundles: Array of Names.

Excluded Bundles: Array of Names.

Valid Types: Array of Primary Asset Type Structures.

Force Current State: Boolean.  

## Outputs

Out: Exec.

Out Primary Asset Id List: Array of Primary Asset Id Structures.

