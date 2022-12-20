# BreakAssetRenameData

Adds a node that breaks a 'AssetRenameData' into its member fields

## 图示

![]($-20221218-14312560.png)

## Inputs

Asset Rename Data: Asset Rename Data Structure (by ref).  

## Outputs

Asset: Object Weak object. Asset:. Object being renamed.

New Package Path: String. New Package Path:. New path to package without package name, ie /Game/SubDirectory.

New Name: String. New Name:. New package and asset name, new object path will be PackagePath/NewName.NewName.

