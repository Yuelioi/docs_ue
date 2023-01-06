# GetComponentsByClass

获取所有继承自给定类的组件。目前返回一个UActorComponent数组，该数组必须被转换为正确的类型。这只打算由蓝图使用。在C++中使用GetComponents()。

目标是Actor

## 图示

![]($-20221218-17344074.png)

## Inputs

目标。Actor对象参考。

组件类。Actor组件类的引用。 

## Outputs

返回值。演员组件对象引用的数组。获取所有继承自给定类的组件。目前返回一个UActorComponent数组，该数组必须被转换为正确的类型。这只打算由蓝图使用。在C++中使用GetComponents()。

Gets all the components that inherit from the given class.. Currently returns an array of UActorComponent which must be cast to the correct type.. This intended to only be used by blueprints. Use GetComponents() in C++.

Target is Actor

## 图示

![]($-20221218-17344074.png)

## Inputs

Target: Actor Object Reference.

Component Class: Actor Component Class Reference.  

## Outputs

Return Value: Array of Actor Component Object References. Gets all the components that inherit from the given class.. Currently returns an array of UActorComponent which must be cast to the correct type.. This intended to only be used by blueprints. Use GetComponents() in C++..

