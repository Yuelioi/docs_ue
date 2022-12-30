# GetLinearDriveParams

Gets the drive params for the linear drive.

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20265256.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query.  

## Outputs

Out: Exec.

Out Position Strength: Float (single-precision). Positional strength for the drive (stiffness).

Out Velocity Strength: Float (single-precision). Velocity strength of the drive (damping).

Out Force Limit: Float (single-precision). Max force applied by the drive.

