# AddActortoExcludefromHitTests

Adds an actor to the list of actors to never allow an interactor to hit in the scene. No selection. No hover.. There's no need to remove actors from this list. They'll expire from it automatically when destroyed.

Target is Viewport World Interaction

## 图示

![]($-20221218-21253212.png)

## Inputs

In: Exec.

Target: Viewport World Interaction Object Reference.

Actor to Exclude from Hit Tests: Actor Object Reference. The actor that should be forever excluded from hit tests.  

## Outputs

Out: Exec.

