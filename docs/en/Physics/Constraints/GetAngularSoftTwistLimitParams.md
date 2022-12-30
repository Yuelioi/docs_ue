# GetAngularSoftTwistLimitParams

Gets Constraint Angular Soft Twist Limit parameters

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20263978.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query *.  

## Outputs

Out: Exec.

Soft Twist Limit: Boolean. True is the Twist limit is soft.

Twist Limit Stiffness: Float (single-precision). Stiffness of the soft Twist limit. Only used when Soft limit is on ( positive value ).

Twist Limit Damping: Float (single-precision). Damping of the soft Twist limit. Only used when Soft limit is on ( positive value ).

Twist Limit Restitution: Float (single-precision). Controls the amount of bounce when the constraint is violated. A restitution value of 1 will bounce back with the same velocity the limit was hit. A value of 0 will stop dead..

Twist Limit Contact Distance: Float (single-precision). Determines how close to the limit we have to get before turning the joint on. Larger value will be more expensive, but will do a better job not violating constraints. A smaller value will be more efficient, but easier to violate..

