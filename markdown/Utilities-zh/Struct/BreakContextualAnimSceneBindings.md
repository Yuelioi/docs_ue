# BreakContextualAnimSceneBindings

Adds a node that breaks a 'ContextualAnimSceneBindings' into its member fields

## 图示

![]($-20221218-14330583.png)

## Inputs

Contextual Anim Scene Bindings: Contextual Anim Scene Bindings Structure (by ref).  

## Outputs

Role To Actor Map: Map of Names to Actor Object References. Role to Actor Map:. Map with actors to bind to each role in the scene.

Anim Data Index: Integer. Anim Data Index:. Desired AnimDataIndex. If INDEX_NONE the Manager will attempt to find the best AnimData to use.

Anim Start Time: Float (single-precision). Anim Start Time:. Desired start time. Only relevant if AnimDataIndex != INDEX_NONE.

