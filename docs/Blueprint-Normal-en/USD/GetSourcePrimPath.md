# GetSourcePrimPath

Gets the path to the prim that was parsed to generate the given Object .

Target is Usd Stage Actor

## 图示

![]($-20221218-21210512.png)

## Inputs

In: Exec.

Target: Usd Stage Actor Object Reference.

Object: Object Reference. UObject to query with. Can be one of the transient components generated when a stage was opened, or something like a UStaticMesh..  

## Outputs

Out: Exec.

Return Value: String. The path to the source prim, e.g. "/root_prim/some_prim". May be empty in case we couldn't find the source prim..

