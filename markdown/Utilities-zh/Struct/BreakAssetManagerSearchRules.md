# BreakAssetManagerSearchRules

添加一个节点，将'AssetManagerSearchRules'分解为其成员字段

## 图示

![]($-20221218-14312383.png)

## Inputs

资产管理器搜索规则。资产管理器搜索规则结构（通过参考）。 

## Outputs

资产扫描路径。字符串的数组。资产扫描路径：。要搜索的顶级目录和特定资产的列表，必须是以/开头的路径，目录不应该有尾部的/。

包括模式。字符串阵列。包括模式：。可选的包含通配符模式列表，使用*，将与整个软件包路径相匹配。如果有的话，其中至少有一个必须匹配。

排除模式。字符串的数组。排除模式:. 可选的排除通配符模式列表，可以使用*，如果其中任何一个匹配，它将被排除。

资产基类。对象类参考。资产基类：。资产必须继承自这个类，对于蓝图，这应该是实例基类。

拥有蓝图类。Boolean（布尔）。拥有蓝图类：。如果扫描蓝图则为 "真"，其他资产为 "假"。

强制同步扫描。布尔值。强制同步扫描：。如果这应该强制对磁盘进行同步扫描，即使非同步扫描正在进行中，则为真。

跳过虚拟路径扩展。布尔值。跳过虚拟路径扩展：。如果AssetScanPaths是不需要扩展的真实路径，则为真。

跳过管理器包含检查。布尔值。跳过管理器包含检查：。如果这个测试应该跳过AssetManager上的ShouldIncludeInAssetSearch函数，则为真。
