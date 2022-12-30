# BreakContentBrowserDataFilter

添加一个节点，将'ContentBrowserDataFilter'分解成其成员字段

## 图示

![]($-20221218-14325341.png)

## Inputs

内容浏览器数据过滤器。内容浏览器数据过滤器结构（通过引用）。 

## Outputs

递归路径。布尔型。递归路径：。我们是否应该在这个查询中包括子路径。

项目类型过滤器。EContentBrowserItemTypeFilter枚举。项目类型过滤器：. 控制哪些项目类型应该被包含在这个查询中的标志。

项目类别过滤器。EContentBrowserItemCategoryFilter枚举。项目类别过滤器：. 控制哪些项目类别应该包括在这个查询中的标志。

Item Attribute Filter（项目属性过滤器）。EContentBrowserItemAttributeFilter枚举。Item Attribute Filter:.项目属性过滤器。控制哪些项目属性应该包括在这个查询中的标志。
