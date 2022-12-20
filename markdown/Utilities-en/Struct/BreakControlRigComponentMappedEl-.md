# BreakControlRigComponentMappedEl-

Adds a node that breaks a 'ControlRigComponentMappedElement' into its member fields

## 图示

![]($-20221218-14331187.png)

## Inputs

Control Rig Component Mapped Element: Mapped Element Structure (by ref).  

## Outputs

Component Reference: Component Reference Structure. Component Reference:. The component to map to the Control Rig.

Transform Index: Integer. Transform Index:. An optional index that can be used with components. with multiple transforms (for example the InstancedStaticMechComponent).

Transform Name: Name. Transform Name:. An optional name that can be used with components. that have sockets (for example the SkeletalMeshComponent).

Element Type: ERigElementType Enum. Element Type:. The type of element this is mapped to.

Element Name: Name. Element Name:. The name of the element to map to.

Direction: EControlRigComponentMapDirection Enum. Direction:. The direction (input / output) to be used for mapping an element.

Offset: Transform. Offset:. The offset transform to apply.

Weight: Float (single-precision). Weight:. defines how much the mapped element should be driven.

Space: EControlRigComponentSpace Enum. Space:. space in which the mapping happens.

