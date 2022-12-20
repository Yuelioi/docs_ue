# ComponentOverlapActors

Returns an array of actors that overlap the given component.

Target is Kismet System Library

## 图示

![]($-20221218-18184691.png)

## Inputs

In: Exec.

Component: Primitive Component Object Reference. Component to test with..

Component Transform: Transform (by ref). Defines where to place the component for overlap testing..

Object Types: Array of EObjectTypeQuery Enums.

Actor Class Filter: Object Class Reference.

Actors to Ignore: Array of Actor Object References. Ignore these actors in the list.  

## Outputs

Out: Exec.

Out Actors: Array of Actor Object References. Returned array of actors. Unsorted..

Return Value: Boolean. true if there was an overlap that passed the filters, false otherwise..

