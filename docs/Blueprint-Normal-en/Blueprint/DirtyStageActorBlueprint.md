# DirtyStageActorBlueprint

Intentionally dirties the UBlueprint for the given stage actor's generated class.. This is useful for testing how the stage actor behaves when going into PIE with a dirty blueprint, as that usually triggers. a recompile at the very sensitive PIE transition

Target is SDTests Blueprint Library

## 图示

![]($-20221218-18113513.png)

## Inputs

In: Exec.

Blueprint Derived Stage Actor: Usd Stage Actor Object Reference.  

## Outputs

Out: Exec.

