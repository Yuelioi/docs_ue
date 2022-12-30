# GetInstancedFoliageActorforLevel

Wraps AInstancedFoliageActor::GetInstancedFoliageActorForLevel, and allows retrieving the current AInstancedFoliageActor. for a level. Will default to the current editor level if Level is left nullptr.. This function is useful because it's difficult to retrieve this actor otherwise, as it will be filtered from. the results of functions like EditorLevelLibrary.get_all_level_actors()

Target is Usd Exporter Blueprint Library

## 图示

![]($-20221218-21211802.png)

## Inputs

In: Exec.

Create if None: Boolean.

Level: Level Object Reference.  

## Outputs

Out: Exec.

Return Value: Instanced Foliage Actor Object Reference. Wraps AInstancedFoliageActor::GetInstancedFoliageActorForLevel, and allows retrieving the current AInstancedFoliageActor. for a level. Will default to the current editor level if Level is left nullptr.. This function is useful because it's difficult to retrieve this actor otherwise, as it will be filtered from. the results of functions like EditorLevelLibrary.get_all_level_actors().

