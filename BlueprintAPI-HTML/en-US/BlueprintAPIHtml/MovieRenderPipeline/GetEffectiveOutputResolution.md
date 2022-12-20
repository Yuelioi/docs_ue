# GetEffectiveOutputResolution

In case of Overscan percentage being higher than 0 we render additional pixels. This function returns the resolution with overscan taken into account.

Target is Movie Pipeline Blueprint Library

## 图示

![]($-20221218-20085011.png)

## Inputs

In: Exec.

In Master Config: Movie Pipeline Master Config Object Reference.

In Pipeline Executor Shot: Movie Pipeline Executor Shot Object Reference.  

## Outputs

Out: Exec.

Return Value: Int Point Structure. In case of Overscan percentage being higher than 0 we render additional pixels. This function returns the resolution with overscan taken into account..

