# CapsuleOverlapComponents

Returns an array of components that overlap the given capsule.

Target is Kismet System Library

## 图示

![]($-20221218-18183985.png)

## Inputs

In: Exec.

Capsule Pos: Vector. Center of the capsule..

Radius: Float (single-precision). Radius of capsule hemispheres and radius of center cylinder portion..

Half Height: Float (single-precision). Half-height of the capsule (from center of capsule to tip of hemisphere..

Object Types: Array of EObjectTypeQuery Enums.

Component Class Filter: Object Class Reference.

Actors to Ignore: Array of Actor Object References. Ignore these actors in the list.  

## Outputs

Out: Exec.

Out Components: Array of Primitive Component Object References.

Return Value: Boolean. true if there was an overlap that passed the filters, false otherwise..

