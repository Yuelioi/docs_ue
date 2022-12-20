# GetGeneratedComponent

Gets the transient component that was generated for a prim with a given prim path.. Warning: The lifetime of the component is managed by the AUsdStageActor, and it may be force-destroyed at any time (e.g. when closing the stage)

Target is Usd Stage Actor

## 图示

![]($-20221218-21210264.png)

## Inputs

In: Exec.

Target: Usd Stage Actor Object Reference.

Prim Path: String. Full path to the source prim, e.g. "/root_prim/my_prim".  

## Outputs

Out: Exec.

Return Value: Scene Component Object Reference. The corresponding spawned component. It may correspond to a parent prim, if the prim at PrimPath was collapsed. Nullptr if path is invalid..

