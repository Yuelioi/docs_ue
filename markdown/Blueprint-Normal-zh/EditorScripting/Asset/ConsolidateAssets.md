# ConsolidateAssets

通过用对AssetToConsolidateTo.的引用替换对所提供的AssetsToConsolidate的所有引用/使用来合并一项资产。当你希望所有的资产引用都被一个单一的资产所取代时，这很有用。该函数首先尝试直接替换所有位于已经加载并在内存中的对象的相关引用。接下来，它删除AssetsToConsolidate，留下指向AssetToConsolidateTo的对象重定向器。

目标是编辑器资产库

## 图示

![]($-20221218-18470229.png)

## Inputs

在。执行。

资产合并到。对象参考。在此操作完成后，AssetsToConsolidate的所有引用将转而指向该资产。

要合并的资产：对象引用的数组。对这些资产的所有引用将被修改为引用AssetToConsolidateTo，而不是。

## Outputs

出：执行。

返回值。布尔值。如果操作成功为真。