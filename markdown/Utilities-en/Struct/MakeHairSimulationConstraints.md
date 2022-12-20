# MakeHairSimulationConstraints

Adds a node that create a 'HairSimulationConstraints' from its members

## 图示

![]($-20221218-14552140.png)

## Inputs

Bend Damping: Float (single-precision). Bend Damping:. Damping for the bend constraint between 0 and 1.

Bend Stiffness: Float (single-precision). Bend Stiffness:. Stiffness for the bend constraint in GPa.

Stretch Damping: Float (single-precision). Stretch Damping:. Damping for the stretch constraint between 0 and 1.

Stretch Stiffness: Float (single-precision). Stretch Stiffness:. Stiffness for the stretch constraint in GPa.

Static Friction: Float (single-precision). Static Friction:. Static friction used for collision against the physics asset.

Kinetic Friction: Float (single-precision). Kinetic Friction:. Kinetic friction used for collision against the physics asset.

Strands Viscosity: Float (single-precision). Strands Viscosity:. Viscosity parameter between 0 and 1 that will be used for self collision.

Collision Radius: Float (single-precision). Collision Radius:. Radius that will be used for the collision detection against the physics asset.  

## Outputs

Hair Simulation Constraints: Hair Simulation Constraints Structure.

