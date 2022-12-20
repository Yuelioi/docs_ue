# BreakDatasmithRuntimeImportOptio-

Adds a node that breaks a 'DatasmithRuntimeImportOptions' into its member fields

## 图示

![]($-20221218-14334244.png)

## Inputs

Datasmith Runtime Import Options: Datasmith Runtime Import Options Structure (by ref).  

## Outputs

Tessellation Options: Datasmith Tessellation Options Structure. Tessellation Options:. Tessellation options for CAD import.

Build Hierarchy: EBuildHierarchyMethod Enum. Build Hierarchy:. Indicates whether a hierarchy of actors should be built or not.. In the case a hierarchy is built, it can be simplified to minimize the number of actors created. By default, a simplified hierarchy is built.

Build Collisions: ECollisionEnabled Enum. Build Collisions:. Indicates the type of collision for components. Set to ECollisionEnabled::QueryOnly (spatial queries, no physics) by default.

Collision Type: ECollisionTraceFlag Enum. Collision Type:. Indicates the type of collision for static meshes. Set to ECollisionTraceFlag::CTF_UseComplexAsSimple by default.

Import Meta Data: Boolean. Import Meta Data:. Indicates whether meta-data should be imported or not. Meta-data are imported by default.

