# FindPackageReferencersforAsset

为一个资产寻找软件包参考者。只有软依赖和硬依赖会被寻找到。软依赖是指不需要为使用该对象而加载的依赖。强依赖是正确使用源资产所需的依赖，必须同时加载。其他引用可能存在。该资产目前可能在内存中被其他资产、编辑器或代码所使用。包的依赖性与资产一起被缓存。在所有资产被加载并重新保存之前，可能会出现假阳性。

目标是编辑器资产库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18471725.png)

## Inputs

在。执行。

资产路径。字符串。我们正在寻找的资产的路径（不是一个级别）。

加载资产以确认。布尔值。资产和引用者将被加载（如果不是一个级别）以确认依赖关系。

## Outputs

出：执行。

返回值。字符串的数组。引用者的软件包路径。

<hr>

Find Package Referencers for an asset. Only Soft and Hard dependencies would be looked for.. Soft are dependencies which don't need to be loaded for the object to be used.. Had are dependencies which are required for correct usage of the source asset and must be loaded at the same time.. Other references may exist. The asset may be currently used in memory by another asset, by the editor or by code.. Package dependencies are cached with the asset. False positive can happen until all the assets are loaded and re-saved.

Target is Editor Asset Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18471725.png)

## Inputs

In: Exec.

Asset Path: String. Asset Path of the asset that we are looking for (that is not a level)..

Load Assets to Confirm: Boolean. The asset and the referencers will be loaded (if not a level) to confirm the dependencies..

## Outputs

Out: Exec.

Return Value: Array of Strings. The package path of the referencers..
