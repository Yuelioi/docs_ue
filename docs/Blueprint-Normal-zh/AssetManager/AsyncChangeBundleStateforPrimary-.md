# AsyncChangeBundleStateforPrimary-

Change the bundle state of specific assets in PrimaryAssetList.. AddBundles are added to the final state and RemoveBundles are removed, an empty array will make no change.. This will not change the loaded status of primary assets but will load or unload secondary assets based on the bundles.

Target is Async Action Change Primary Asset Bundles

## 图示

![]($-20221218-17595659.png)

## Inputs

In: Exec.

Primary Asset List: Array of Primary Asset Id Structures.

Add Bundles: Array of Names.

Remove Bundles: Array of Names.  

## Outputs

Out: Exec.

Completed: Exec. Completed.
