# BoxOverlapActors

Returns an array of actors that overlap the given axis-aligned box.

Target is Kismet System Library

## 图示

![]($-20221218-18182951.png)

## Inputs

In: Exec.

Box Pos: Vector. Center of box..

Box Extent: Vector. Extents of box..

Object Types: Array of EObjectTypeQuery Enums.

Actor Class Filter: Object Class Reference.

Actors to Ignore: Array of Actor Object References. Ignore these actors in the list.  

## Outputs

Out: Exec.

Out Actors: Array of Actor Object References. Returned array of actors. Unsorted..

Return Value: Boolean. true if there was an overlap that passed the filters, false otherwise..

