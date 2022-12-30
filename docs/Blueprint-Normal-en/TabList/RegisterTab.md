# RegisterTab

Registers and adds a new tab to the list that corresponds to a given widget instance. If not present in the linked switcher, it will be added.

Target is Common Tab List Widget Base

## 图示

![]($-20221218-21091811.png)

## Inputs

In: Exec.

Target: Common Tab List Widget Base Object Reference.

Tab Name ID: Name.

Button Widget Type: Common Button Base Class Reference. The widget type to create for this tab.

Content Widget: Widget Object Reference. The widget to associate with the registered tab.  

## Outputs

Out: Exec.

Return Value: Boolean. True if the new tab registered successfully and there were no name ID conflicts.

