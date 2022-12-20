# AsyncLoadPrimaryAssetClassList

Load a list of primary asset classes into memory, this will cause them to stay loaded until explicitly unloaded.. The completed event will happen when the load succeeds or fails, and the Loaded list will contain all of the requested classes found at completion.. If LoadBundles is specified, those bundles are loaded along with the assets.

Target is Async Action Load Primary Asset Class List

## 图示

![]($-20221218-17595991.png)

## Inputs

In: Exec.

Primary Asset List: Array of Primary Asset Id Structures.

Load Bundles: Array of Names.  

## Outputs

Out: Exec.

Completed: Exec. Completed.

Loaded: Array of Object Class References.

