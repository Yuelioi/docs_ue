# SetNiagaraSystemAsset

Switch which asset the component is using.. This requires Niagara to wait for concurrent execution and the override parameter store to be synchronized with the new asset.. By default existing parameters are reset when we call SetAsset, modify bResetExistingOverrideParameters to leave existing parameter data as is.

Target is Niagara Particle System Component

## 图示

![]($-20221218-20134163.png)

## Inputs

In: Exec.

Target: Niagara Particle System Component Object Reference.

In Asset: Niagara System Object Reference.

Reset Existing Override Parameters: Boolean.  

## Outputs

Out: Exec.

