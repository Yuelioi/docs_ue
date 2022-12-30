# AddMappingContext_Message

Add a control mapping context.

Target is Enhanced Input Subsystem Interface

## 图示

![]($-20221218-19165811.png)

## Inputs

In: Exec.

Target: Object Reference.

Mapping Context: Input Mapping Context Object Reference. A set of key to action mappings to apply to this player.

Priority: Integer. Higher priority mappings will be applied first and, if they consume input, will block lower priority mappings..

Options: Modify Context Options Structure (by ref). Options to consider when adding this mapping context..  

## Outputs

Out: Exec.

