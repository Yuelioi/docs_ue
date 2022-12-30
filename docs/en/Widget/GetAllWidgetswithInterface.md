# GetAllWidgetswithInterface

Find all widgets in the world with the specified interface.. This is a slow operation, use with caution e.g. do not use every frame.

Target is Widget Blueprint Library

## 图示

![]($-20221218-21341500.png)

## Inputs

In: Exec.

Interface: Interface Interface. The interface to find. Must be specified or result array will be empty..

Top Level Only: Boolean. Only the widgets that are direct children of the viewport will be returned..  

## Outputs

Out: Exec.

Found Widgets: Array of User Widget Object References. Output array of widgets that implement the specified interface..

