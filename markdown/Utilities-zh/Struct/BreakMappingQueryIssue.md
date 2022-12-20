# BreakMappingQueryIssue

Adds a node that breaks a 'MappingQueryIssue' into its member fields

## 图示

![]($-20221218-14393999.png)

## Inputs

Mapping Query Issue: Mapping Query Issue Structure (by ref).  

## Outputs

Issue: EMappingQueryIssue Enum. Issue.

Blocking Context: Input Mapping Context Object Reference. Blocking Context:. Input context that contains a blocking action bound to the queried key.

Blocking Action: Input Action Object Reference. Blocking Action:. Action within the input context that caused the blockage.

