# GetAllObjectsandValuesforKey

查找所有具有 Datasmith 用户数据的给定类型的加载对象，该对象包含给定的键和它们的相关值。这是一个缓慢的操作，所以只限于编辑器。

目标是 Datasmith 内容蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18492549.png)

## Inputs

在。执行。

钥匙。名称。在 Datasmith 用户数据中找到的键...

对象类。对象类参考。要过滤的对象的类别，如果有具体规定的话；否则就没有过滤功能。

## Outputs

出：执行。

输出对象。对象引用数组。输出对象数组，其中 Datasmith 用户数据与给定的键匹配。

输出值。字符串数组。输出与 OutObjects 中每个对象相关的值数组。

<hr>

Find all loaded objects of the given type that have a Datasmith User Data that contains the given key and their associated values.. This is a slow operation, so editor only.

Target is Datasmith Content Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18492549.png)

## Inputs

In: Exec.

Key: Name. The key to find in the Datasmith User Data..

Object Class: Object Class Reference. Class of the object on which to filter, if specificed; otherwise there's no filtering.

## Outputs

Out: Exec.

Out Objects: Array of Object References. Output array of objects for which the Datasmith User Data match the given key..

Out Values: Array of Strings. Output array of values associated with each object in OutObjects..
