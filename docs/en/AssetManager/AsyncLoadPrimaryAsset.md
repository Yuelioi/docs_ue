# AsyncLoadPrimaryAsset

Load a primary asset object into memory, this will cause it to stay loaded until it is explicitly unloaded.. The completed event will happen when the load succeeds or fails, you should cast the Loaded object to verify it is the correct type.. If LoadBundles is specified, those bundles are loaded along with the asset.

Target is Async Action Load Primary Asset

## 图示

![]($-20221218-17595767.png)

## Inputs

In: Exec.

Primary Asset: Primary Asset Id Structure.

Load Bundles: Array of Names.  

## Outputs

Out: Exec.

Completed: Exec. Completed.

Loaded: Object Reference.

