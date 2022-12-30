# CreateAsset_Message

Creates an asset with the specified name, path, and factory

Target is Asset Tools

## 图示

![]($-20221218-18473952.png)

## Inputs

In: Exec.

Target: Object Reference.

Asset Name: String. the name of the new asset.

Package Path: String. the package that will contain the new asset.

Asset Class: Object Class Reference. the class of the new asset.

Factory: Factory Object Reference. the factory that will build the new asset.

Calling Context: Name. optional name of the module or method calling CreateAsset() - this is passed to the factory.  

## Outputs

Out: Exec.

Return Value: Object Reference. the new asset or NULL if it fails.

