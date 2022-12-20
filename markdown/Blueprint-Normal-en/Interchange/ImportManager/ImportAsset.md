# ImportAsset

Call this to start an import asset process, the caller must specify a source data.. This import process can import many different asset, but all in the game content.

Target is Interchange Manager

## 图示

![]($-20221218-19311597.png)

## Inputs

In: Exec.

Target: Interchange Manager Object Reference.

Content Path: String. The content path where to import the assets.

Source Data: Interchange Source Data Object Reference. The source data input we want to translate.

Import Asset Parameters: Import Asset Parameters Structure (by ref). All import asset parameter we need to pass to the import asset function.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the import succeed, false otherwise..

