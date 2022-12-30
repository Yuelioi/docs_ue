# SetEditorProperty

Attempts to set the value of a named property on the given object.

Target is Kismet System Library

## 图示

![]($-20221218-14291525.png)

## Inputs

In: Exec.

Object: Object Reference. The object you want to set a property value on..

Property Name: Name. The name of the object property to set the value of..

Property Value: Wildcard (by ref). The property value to set..

Change Notify Mode: EPropertyAccessChangeNotifyMode Enum. When to emit property change notifications..  

## Outputs

Out: Exec.

Success?: Boolean. Whether the property value was found and correctly set..

