# BreakTransformConstraint

Adds a node that breaks a 'TransformConstraint' into its member fields

## 图示

![]($-20221218-14445236.png)

## Inputs

Transform Constraint: Transform Constraint Structure (by ref).  

## Outputs

Operator: Constraint Description Structure. Operator:. @note thought of separating this out per each but we'll have an issue with applying transform in what order. but something to think about if that seems better.

Source Node: Name. Source Node.

Target Node: Name. Target Node.

Weight: Float (single-precision). Weight.

Maintain Offset: Boolean. Maintain Offset:. When the constraint is first applied, maintain the offset from the target node.

