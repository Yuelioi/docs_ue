# BreakIsPropertyValidParams

Adds a node that breaks a 'IsPropertyValidParams' into its member fields

## 图示

![]($-20221218-14385196.png)

## Inputs

Is Property Valid Params: Is Property Valid Params Structure (by ref).  

## Outputs

Snapshot Actor: Actor Object Reference. Snapshot Actor:. The actor saved in the snapshot.

Level Actor: Actor Object Reference. Level Actor:. The actor equivalent to LevelActor: it exists in the world.

Snapshot Property Container: Property Container Handle Structure. Snapshot Property Container:. For passing to FProperty::ContainerPtrToValuePtr. This is either SnapshotActor or a subobject thereof..

Level Property Containers: Property Container Handle Structure. Level Property Containers:. For passing to FProperty::ContainerPtrToValuePtr. This is either LevelPropertyContainers or a subobject thereof..

Property: Property Reference. Property:. The property that we may want to rollback..

Property Path: Array of Strings. Property Path:. Each elements is the name of a subobject name leading to this property. The last element is the property name.. The first element is either the name of a component or a struct/subobject in the root actor.: Examples:: MyCustomComponent -> MyCustomStructPropertyName -> PropertyName: MyCustomComponent -> MyCustomStructPropertyName: StructPropertyNameInActor -> PropertyName.

