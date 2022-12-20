# BreakInputActionKeyMapping

Adds a node that breaks a 'InputActionKeyMapping' into its member fields

## 图示

![]($-20221218-14382213.png)

## Inputs

Input Action Key Mapping: Input Action Key Mapping Structure (by ref).  

## Outputs

Action Name: Name. Action Name:. Friendly name of action, e.g "jump".

Shift: Boolean. Shift:. true if one of the Shift keys must be down when the KeyEvent is received to be acknowledged.

Ctrl: Boolean. Ctrl:. true if one of the Ctrl keys must be down when the KeyEvent is received to be acknowledged.

Alt: Boolean. Alt:. true if one of the Alt keys must be down when the KeyEvent is received to be acknowledged.

Cmd: Boolean. Cmd:. true if one of the Cmd keys must be down when the KeyEvent is received to be acknowledged.

Key: Key Structure. Key:. Key to bind it to..

