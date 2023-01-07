# ConsolidateAssets

通过用对 AssetToConsolidateTo.的引用替换对所提供的 AssetsToConsolidate 的所有引用/使用来合并一项资产。当你希望所有的资产引用都被一个单一的资产所取代时，这很有用。该函数首先尝试直接替换所有位于已经加载并在内存中的对象的相关引用。接下来，它删除 AssetsToConsolidate，留下指向 AssetToConsolidateTo 的对象重定向器。

目标是编辑器资产库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18470229.png)

## Inputs

在。执行。

资产合并到。对象参考。在此操作完成后，AssetsToConsolidate 的所有引用将转而指向该资产。

要合并的资产：对象引用的数组。对这些资产的所有引用将被修改为引用 AssetToConsolidateTo，而不是。

## Outputs

出：执行。

返回值。布尔值。如果操作成功为真。

<hr>

Consolidates an asset by replacing all references/uses of the provided AssetsToConsolidate with references to AssetToConsolidateTo.. This is useful when you want all references of assets to be replaced by a single asset.. The function first attempts to directly replace all relevant references located within objects that are already loaded and in memory.. Next, it deletes the AssetsToConsolidate, leaving behind object redirectors to AssetToConsolidateTo.

Target is Editor Asset Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18470229.png)

## Inputs

In: Exec.

Asset to Consolidate To: Object Reference. Asset to which all references of the AssetsToConsolidate will instead refer to after this operation completes..

Assets to Consolidate: Array of Object References. All references to these assets will be modified to reference AssetToConsolidateTo instead..

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..
