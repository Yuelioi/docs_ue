# SetInputModeGameAndUI

Setup an input mode that allows only the UI to respond to user input, and if the UI doesn't handle it player input / player controller gets a chance.

Note: This means that any bound Input events in the widget will be called.

Target is Widget Blueprint Library

## 图示

![]($-20221218-19293129.png)

## Inputs

In: Exec.

Player Controller: Player Controller Object Reference.

In Widget to Focus: Widget Object Reference.

In Mouse Lock Mode: EMouseLockMode Enum.

Hide Cursor During Capture: Boolean.  

## Outputs

Out: Exec.

