# MakeNiagaraID

Adds a node that create a 'NiagaraID' from its members

## 图示

![]($-20221218-14584074.png)

## Inputs

Index: Integer. Index:. Index in the indirection table for this particle. Allows fast access to this particles data.. Is always unique among currently living particles but will be reused after the particle dies..

Acquire Tag: Integer. Acquire Tag:. A unique tag for when this ID was acquired.. Allows us to differentiate between particles when one dies and another reuses it's Index..  

## Outputs

Niagara ID: Niagara ID Structure.

