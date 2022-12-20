# BreakScriptingCommandInfo

Adds a node that breaks a 'ScriptingCommandInfo' into its member fields

## 图示

![]($-20221218-14422205.png)

## Inputs

Scripting Command Info: Scripting Command Info Structure (by ref).  

## Outputs

Context Name: Name. Context Name:. The editor context this command is bound to.

Set: Name. Set:. The command set this command belongs to. This is to avoid conflicts and could refer to the owner of the command.

Name: Name. Name:. The command name. Must be unique in its set..

Label: Text. Label:. The command label or what name will be displayed for it.

Description: Text. Description:. The description of the command.

Input Chord: Input Chord Structure. Input Chord:. The input chord to bound to the command.

