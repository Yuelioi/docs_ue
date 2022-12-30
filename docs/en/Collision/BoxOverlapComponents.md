# BoxOverlapComponents

Returns an array of components that overlap the given axis-aligned box.

Target is Kismet System Library

## 图示

![]($-20221218-18183175.png)

## Inputs

In: Exec.

Box Pos: Vector. Center of box..

Extent: Vector.

Object Types: Array of EObjectTypeQuery Enums.

Component Class Filter: Object Class Reference.

Actors to Ignore: Array of Actor Object References. Ignore these actors in the list.  

## Outputs

Out: Exec.

Out Components: Array of Primitive Component Object References.

Return Value: Boolean. true if there was an overlap that passed the filters, false otherwise..

