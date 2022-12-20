# GetCurrentBundleState

Returns the list of loaded bundles for a given Primary Asset. This will return false if the asset is not loaded at all.. If ForceCurrentState is true it will return the current state even if a load is in process

Target is Kismet System Library

## 图示

![]($-20221218-18000333.png)

## Inputs

In: Exec.

Primary Asset Id: Primary Asset Id Structure.

Force Current State: Boolean.  

## Outputs

Out: Exec.

Out Bundles: Array of Names.

Return Value: Boolean. Returns the list of loaded bundles for a given Primary Asset. This will return false if the asset is not loaded at all.. If ForceCurrentState is true it will return the current state even if a load is in process.

