# CreateNewGroomBindingAssetwithPa-

Create a new groom binding asset within the contents space of the project.

Target is Groom Blueprint Library

## 图示

![]($-20221218-19155262.png)

## Inputs

In: Exec.

In Desired Package Path: String. The package path to use for the groom binding.

In Groom Asset: Groom Asset Object Reference. Groom asset for binding.

In Skeletal Mesh: Skeletal Mesh Object Reference. Skeletal mesh on which the groom should be bound to.

In Num Interpolation Points: Integer. Number of point used for RBF constraint (if used).

In Source Skeletal Mesh for Transfer: Skeletal Mesh Object Reference. Skeletal mesh on which the groom was authored. This should be used only if the skeletal mesh on which the groom is attached to, does not match the rest pose of the groom.

In Matching Section: Integer.  

## Outputs

Out: Exec.

Return Value: Groom Binding Asset Object Reference.

