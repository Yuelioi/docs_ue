# CheckoutDirectory

Checkout assets from the Content Browser. It will load the assets if needed.. All objects that are in the directory will be checkout. Assets will be loaded before being checkout.

Target is Editor Asset Library

## 图示

![]($-20221218-18465878.png)

## Inputs

In: Exec.

Directory Path: String. Directory of the assets that to checkout..

Recursive: Boolean. If the AssetPath is a folder, the search will be recursive and will checkout the asset in the sub folders..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

