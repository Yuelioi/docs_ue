# BreakContextualAnimSceneBindings

添加一个打破'ContextualAnimSceneBindings'的节点到其成员字段中。

## 图示

![]($-20221218-14330583.png)

## Inputs

Contextual Anim Scene Bindings（上下文动画场景绑定）。Contextual Anim Scene Bindings结构（通过引用）。 

## Outputs

Role To Actor Map: 名称到演员对象引用的地图。Role to Actor Map:（角色到演员地图）。与演员的地图，以绑定到场景中的每个角色。

动画数据索引。整数。动画数据索引:. 希望的AnimDataIndex。如果INDEX_NONE，管理器将试图找到最佳的AnimData来使用。

动画开始时间: Float (single-precision). 动画开始时间:. 希望的开始时间。只有在AnimDataIndex != INDEX_NONE时才相关。
