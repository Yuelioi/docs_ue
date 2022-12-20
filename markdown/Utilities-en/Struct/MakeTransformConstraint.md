# MakeTransformConstraint

Adds a node that create a 'TransformConstraint' from its members

## 图示

![]($-20221218-15034205.png)

## Inputs

Operator: Constraint Description Structure. Operator:. @note thought of separating this out per each but we'll have an issue with applying transform in what order. but something to think about if that seems better.

Source Node: Name. Source Node.

Target Node: Name. Target Node.

Weight: Float (single-precision). Weight.

Maintain Offset: Boolean. Maintain Offset:. When the constraint is first applied, maintain the offset from the target node.  

## Outputs

Transform Constraint: Transform Constraint Structure.

