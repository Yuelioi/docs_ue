# MakeHairSimulationSetup

Adds a node that create a 'HairSimulationSetup' from its members

## 图示

![]($-20221218-14552401.png)

## Inputs

Reset Simulation: Boolean. Reset Simulation:. Boolean to control if we want to reset trhe simulation at some point in time.

Debug Simulation: Boolean. Debug Simulation:. Boolean to make the simulation strands visible.

Local Simulation: Boolean. Local Simulation:. Strands simulation is done in local space.

Linear Velocity Scale: Float (single-precision). Linear Velocity Scale:. Scaling of the bone world linear velocity contribution.

Angular Velocity Scale: Float (single-precision). Angular Velocity Scale:. Scaling of the bone world angular velocity contribution.

Local Bone: String. Local Bone:. Bone used for the simulation local space.

Teleport Distance: Float (single-precision). Teleport Distance:. Teleport distance threshold to reset the simulation.  

## Outputs

Hair Simulation Setup: Hair Simulation Setup Structure.

