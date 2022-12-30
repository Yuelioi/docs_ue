# SetActorLabel

Assigns a new label to this actor. Actor labels are only available in development builds.

Target is Actor

## 图示

![]($-20221218-18464147.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

New Actor Label: String. The new label string to assign to the actor. If empty, the actor will have a default label..

Mark Dirty: Boolean. If true the actor's package will be marked dirty for saving. Otherwise it will not be. You should pass false for this parameter if dirtying is not allowed (like during loads).  

## Outputs

Out: Exec.

