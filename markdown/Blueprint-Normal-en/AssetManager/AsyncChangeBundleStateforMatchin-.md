# AsyncChangeBundleStateforMatchin-

Change the bundle state of all assets that match OldBundles to instead contain NewBundles.. This will not change the loaded status of primary assets but will load or unload secondary assets based on the bundles.

Target is Async Action Change Primary Asset Bundles

## 图示

![]($-20221218-17595544.png)

## Inputs

In: Exec.

New Bundles: Array of Names.

Old Bundles: Array of Names.  

## Outputs

Out: Exec.

Completed: Exec. Completed.

