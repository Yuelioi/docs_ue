# GetGeneratedAssets

Gets the transient assets that were generated for a prim with a given prim path. Likely one asset (e.g. UStaticMesh), but can be multiple (USkeletalMesh, USkeleton, etc.)

Target is Usd Stage Actor

## 图示

![]($-20221218-21210154.png)

## Inputs

In: Exec.

Target: Usd Stage Actor Object Reference.

Prim Path: String. Full path to the source prim, e.g. "/root_prim/my_mesh".  

## Outputs

Out: Exec.

Return Value: Array of Object References. The corresponding generated assets. May be empty if path is invalid or if that prim led to no generated assets..

