# ImportScene

Call this to start an import scene process, the caller must specify a source data.. This import process can import many different asset and there transform (USceneComponent) and store the result in a blueprint and add the blueprint to the level.

Target is Interchange Manager

## 图示

![]($-20221218-19311717.png)

## Inputs

In: Exec.

Target: Interchange Manager Object Reference.

Content Path: String. The content path where to import the assets.

Source Data: Interchange Source Data Object Reference. The source data input we want to translate, this object will be duplicate to allow multithread safe operations.

Import Asset Parameters: Import Asset Parameters Structure (by ref). All import asset parameter we need to pass to the import asset function.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the import succeed, false otherwise..

