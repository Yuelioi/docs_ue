# GetConstraintsfromBody

Gets all the constraints attached to a body

Target is Skeletal Mesh Component

## 图示

![]($-20221218-20274568.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Body Name: Name. name of the body to get the attached constraints from.

Parent Constraints: Boolean. return constraints where BodyName is the child of the constraint.

Child Constraints: Boolean. return constraints where BodyName is the parent of the constraint.

Includes Terminated: Boolean.  

## Outputs

Out: Exec.

Out Constraints: Array of Constraint Instance Accessor Structures. returned list of constraints matching the parameters.

