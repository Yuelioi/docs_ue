# BreakNiagaraID

Adds a node that breaks a 'NiagaraID' into its member fields

## 图示

![]($-20221218-14404751.png)

## Inputs

Niagara ID: Niagara ID Structure (by ref).  

## Outputs

Index: Integer. Index:. Index in the indirection table for this particle. Allows fast access to this particles data.. Is always unique among currently living particles but will be reused after the particle dies..

Acquire Tag: Integer. Acquire Tag:. A unique tag for when this ID was acquired.. Allows us to differentiate between particles when one dies and another reuses it's Index..

