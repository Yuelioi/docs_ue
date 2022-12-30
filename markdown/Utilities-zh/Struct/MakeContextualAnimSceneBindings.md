# MakeContextualAnimSceneBindings

添加一个节点，从其成员中创建一个 "ContextualAnimSceneBindings"。

## 图示

![]($-20221218-14492030.png)

## Inputs

角色到演员地图。名称到演员对象参考的地图。角色到演员地图：。带有演员的地图，与场景中的每个角色绑定。

动画数据索引。整数.动画数据索引:.希望的AnimDataIndex。如果INDEX_NONE，管理器将试图找到最好的AnimData来使用。

动画开始时间。Float (single-precision).动画开始时间:.希望的开始时间。只有当AnimDataIndex != INDEX_NONE时才相关。  

## Outputs

上下文动画场景绑定:上下文的动画场景绑定结构.
