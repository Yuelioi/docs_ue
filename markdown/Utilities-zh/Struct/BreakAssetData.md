# BreakAssetData

Adds a node that breaks a 'AssetData' into its member fields

## 图示

![]($-20221218-14312295.png)

## Inputs

Asset Data: Asset Data Structure (by ref).  

## Outputs

Object Path: Name. Object Path:. The object path for the asset in the form PackageName.AssetName. Only top level objects in a package can have AssetData.

Package Name: Name. Package Name:. The name of the package in which the asset is found, this is the full long package name such as /Game/Path/Package.

Package Path: Name. Package Path:. The path to the package in which the asset is found, this is /Game/Path with the Package stripped off.

Asset Name: Name. Asset Name:. The name of the asset without the package.

Asset Class: Name. Asset Class:. The name of the asset's class.

