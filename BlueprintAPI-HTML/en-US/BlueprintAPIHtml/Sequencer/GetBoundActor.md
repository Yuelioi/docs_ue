# GetBoundActor

Resolve the first valid Actor binding inside this sub-sequence that relates to the specified ID. Note:: ObjectBinding should be constructed from the same sequence as this Sequence Director's owning Sequence (see the GetSequenceBinding node)

Target is Level Sequence Director

## 图示

![]($-20221218-20482365.png)

## Inputs

In: Exec.

Target: Level Sequence Director Object Reference.

Object Binding: Movie Scene Object Binding ID Structure. The ID for the object binding inside this sub-sequence or one of its children to resolve.  

## Outputs

Out: Exec.

Return Value: Actor Object Reference.

