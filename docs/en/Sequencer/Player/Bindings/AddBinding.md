# AddBinding

Adds the specified actor to the overridden bindings for the specified binding ID, optionally still allowing the bindings defined in the Level Sequence asset

Target is Level Sequence Actor

## 图示

![]($-20221218-20510205.png)

## Inputs

In: Exec.

Target: Level Sequence Actor Object Reference.

Binding: Movie Scene Object Binding ID Structure. Binding to modify.

Actor: Actor Object Reference. Actor to bind.

Allow Bindings from Asset: Boolean. If false the new bindings being supplied here will replace the bindings set in the level sequence asset, meaning the original object animated by Sequencer will no longer be animated. Bindings set to spawnables will not spawn if false. If true, new bindings will be in addition to ones set set in Sequencer UI. This function will not modify the original asset..  

## Outputs

Out: Exec.

