# GetInstancedFoliageActorforLevel

包裹AInstancedFoliageActor::GetInstancedFoliageActorForLevel，并允许检索当前AInstancedFoliageActor。如果Level是空的，将默认为当前的编辑器级别。这个函数很有用，因为否则很难检索到这个角色，因为它将从EditorLevelLibrary.get_all_level_actors()等函数的结果中被过滤掉。

目标是Usd Exporter蓝图库

## 图示

![]($-20221218-21211802.png)

## Inputs

在。执行。

如果没有，则创建：布尔值。

水平。水平对象参考。  

## Outputs

出：执行。

返回值。实例叶子演员对象参考。包裹AInstancedFoliageActor::GetInstancedFoliageActorForLevel，并允许检索当前AInstancedFoliageActor。如果Level是空的，将默认为当前的编辑器级别。这个函数很有用，因为否则很难检索到这个角色，因为它将从EditorLevelLibrary.get_all_level_actors()等函数的结果中被过滤掉。
