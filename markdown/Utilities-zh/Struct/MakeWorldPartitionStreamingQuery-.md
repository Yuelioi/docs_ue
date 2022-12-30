# MakeWorldPartitionStreamingQuery-

添加一个节点，从其成员中创建一个 "WorldPartitionStreamingQuerySource"。

## 图示

![]($-20221218-15050033.png)

## Inputs

地点：向量。向量。位置：。要查询的位置。(如果bSpatialQuery为false则不使用）。

半径。Float（单精度）。半径：。要查询的半径。(如果bSpatialQuery为false则不使用）。

使用网格加载范围。Boolean.使用网格加载范围：。如果为 "真"，则可以不提供查询半径，而是将查询与加载范围半径绑定。

数据层。名称的阵列。数据层：。可选的数据层列表，用于专门的查询。如果为空，查询将只返回非数据层单元。

仅限数据层。布尔型。仅限数据层：。如果为 "真"，只有在DataLayers属性中找到的数据层中的单元格才会被查询返回。

空间查询。Boolean.空间查询：。如果是假的，位置/半径将不会被用来寻找单元格。只有AlwaysLoaded单元格会被查询返回。

## Outputs

世界分区流查询源。世界分区流查询源结构。
