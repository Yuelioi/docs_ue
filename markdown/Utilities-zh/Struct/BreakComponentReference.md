# BreakComponentReference

Adds a node that breaks a 'ComponentReference' into its member fields

## 图示

![]($-20221218-14324373.png)

## Inputs

Component Reference: Component Reference Structure (by ref).  

## Outputs

Referenced Actor: Actor Object Reference. Other Actor:. Pointer to a different Actor that owns the Component.. If this is not provided the reference refers to a component on this / the same actor..

Component Name: Name. Component Property:. Name of component to use. If this is not specified the reference refers to the root component..

