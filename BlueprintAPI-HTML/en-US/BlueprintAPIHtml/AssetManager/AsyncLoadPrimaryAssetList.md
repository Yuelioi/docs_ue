# AsyncLoadPrimaryAssetList

Load a list of primary asset objects into memory, this will cause them to stay loaded until explicitly unloaded.. The completed event will happen when the load succeeds or fails, and the Loaded list will contain all of the requested assets found at completion.. If LoadBundles is specified, those bundles are loaded along with the assets.

Target is Async Action Load Primary Asset List

## 图示

![]($-20221218-18000103.png)

## Inputs

In: Exec.

Primary Asset List: Array of Primary Asset Id Structures.

Load Bundles: Array of Names.  

## Outputs

Out: Exec.

Completed: Exec. Completed.

Loaded: Array of Object References.

