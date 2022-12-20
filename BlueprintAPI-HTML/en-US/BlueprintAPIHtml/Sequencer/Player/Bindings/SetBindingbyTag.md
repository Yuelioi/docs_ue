# SetBindingbyTag

Assigns an set of actors to all the bindings tagged with the specified name in this sequence. Object Bindings can be tagged within the sequence UI by RMB -> Tags... on the object binding in the tree.

Target is Level Sequence Actor

## 图示

![]($-20221218-20511387.png)

## Inputs

In: Exec.

Target: Level Sequence Actor Object Reference.

Binding Tag: Name. The unique tag name to lookup bindings with.

Actors: Array of Actor Object References. The actors to assign to all the tagged bindings.

Allow Bindings from Asset: Boolean. If false the new bindings being supplied here will replace the bindings set in the level sequence asset, meaning the original object animated by Sequencer will no longer be animated. Bindings set to spawnables will not spawn if false. If true, new bindings will be in addition to ones set set in Sequencer UI. This function will not modify the original asset..  

## Outputs

Out: Exec.

