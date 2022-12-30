# PressKey

Press a key as if it had come from the keyboard. Avoid using this for 'a-z|A-Z', things like. the Editable Textbox in Slate expect OnKeyChar to be called to signal a specific character being. send to the widget. So for those cases you should use SendKeyChar.

Target is Widget Interaction Component

## 图示

![]($-20221218-19303659.png)

## Inputs

In: Exec.

Target: Widget Interaction Component Object Reference.

Key: Key Structure.

Repeat: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. Press a key as if it had come from the keyboard. Avoid using this for 'a-z|A-Z', things like. the Editable Textbox in Slate expect OnKeyChar to be called to signal a specific character being. send to the widget. So for those cases you should use SendKeyChar..

