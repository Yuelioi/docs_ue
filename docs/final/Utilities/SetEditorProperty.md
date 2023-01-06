# SetEditorProperty

试图在给定对象上设置一个命名的属性值。

目标是Kismet系统库

## 图示

![]($-20221218-14291525.png)

## Inputs

在。执行。

对象。对象参考。你想设置一个属性值的对象。

财产名称。名称。要设置值的对象属性的名称。

属性值。通配符（通过引用）。要设置的属性值。

更改通知模式。EPropertyAccessChangeNotifyMode枚举。何时发出属性变更通知。  

## Outputs

出：执行。

成功？：布尔值。是否找到并正确设置了该属性值。

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

