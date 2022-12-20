# FlytoLocationECEF

Begin a smooth camera flight to the given ECEF destination such that the camera ends at the specified yaw and pitch.. The flight can be enforced or canceled if the user moves the pawn

Target is Round Planet Pawn

## 图示

![]($-20221218-19002998.png)

## Inputs

In: Exec.

Target: Round Planet Pawn Object Reference.

ECEFDestination: Vector (by ref).

Yaw at Destination: Float (double-precision).

Pitch at Destination: Float (double-precision).

Can Interrupt by Moving: Boolean.  

## Outputs

Out: Exec.

