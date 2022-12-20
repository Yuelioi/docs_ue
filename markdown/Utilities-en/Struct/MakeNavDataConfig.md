# MakeNavDataConfig

Adds a node that create a 'NavDataConfig' from its members

## 图示

![]($-20221218-14583555.png)

## Inputs

Name: Name. Name:. Internal/debug name of this agent.

Color: Color Structure. Color:. Color used to represent this agent in the editor and for debugging.

Nav Data Class: Actor Soft Class Reference. Nav Data Class:. Class to use when spawning navigation data instance.

Nav Agent Radius: Float (single-precision). Agent Radius:. Radius of the capsule used for navigation/pathfinding..

Nav Agent Height: Float (single-precision). Agent Height:. Total height of the capsule used for navigation/pathfinding..

Nav Agent Step Height: Float (single-precision). Agent Step Height:. Step height to use, or -1 for default value from navdata's config..

Nav Walking Search Height Scale: Float (single-precision). Nav Walking Search Height Scale:. Scale factor to apply to height of bounds when searching for navmesh to project to when nav walking.

Preferred Nav Data: Soft Class Path Structure. Preferred Nav Data:. Type of navigation data used by agent, null means "any".

Can Crouch: Boolean. Can Crouch:. If true, this Pawn is capable of crouching..

Can Jump: Boolean. Can Jump:. If true, this Pawn is capable of jumping..

Can Walk: Boolean. Can Walk:. If true, this Pawn is capable of walking or moving on the ground..

Can Swim: Boolean. Can Swim:. If true, this Pawn is capable of swimming or moving through fluid volumes..

Can Fly: Boolean. Can Fly:. If true, this Pawn is capable of flying..  

## Outputs

Nav Data Config: Nav Data Config Structure.

