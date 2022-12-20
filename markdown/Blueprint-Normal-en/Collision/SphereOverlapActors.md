# SphereOverlapActors

Returns an array of actors that overlap the given sphere.

Target is Kismet System Library

## 图示

![]($-20221218-18195015.png)

## Inputs

In: Exec.

Sphere Pos: Vector. Center of sphere..

Sphere Radius: Float (single-precision). Size of sphere..

Object Types: Array of EObjectTypeQuery Enums.

Actor Class Filter: Object Class Reference.

Actors to Ignore: Array of Actor Object References. Ignore these actors in the list.  

## Outputs

Out: Exec.

Out Actors: Array of Actor Object References. Returned array of actors. Unsorted..

Return Value: Boolean. true if there was an overlap that passed the filters, false otherwise..

