# BreakAssetRegistryDependencyOpti-

添加一个节点，将'AssetRegistryDependencyOptions'分解成其成员字段

## 图示

![]($-20221218-14312470.png)

## Inputs

资产注册表依赖性选项。资产注册表依赖性选项结构（通过引用）。 

## Outputs

包括软包引用。布尔值。包括软包引用：。使用对象时不需要加载的依赖项（即软对象路径）。

包括硬包引用。布尔值。包括硬包引用：。正确使用源资产所需的依赖，并且必须同时加载。

包括可搜索名称。布尔型。包括可搜索的名称：。对包内特定SearchableNames的引用。

包括软管理引用。布尔型。包括软管理引用：。间接的管理引用，这些是通过递归为管理包或其他主要资产的主要资产而设置的。

包括硬管理引用。布尔值。包括硬管理引用：。表示一个对象直接管理另一个对象的引用，在主资产明确管理事物时设置。
