# GetSourcePrimPath

获取为生成给定对象而解析的引物的路径。

目标是 Usd 舞台演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-21210512.png)

## Inputs

在。执行。

目标。Usd Stage Actor 对象参考。

对象。对象参考。用来查询的 UObject。可以是当舞台被打开时产生的瞬时组件之一，或者是类似 UStaticMesh 的东西。

## Outputs

出：执行。

返回值。字符串。源基元的路径，例如"/root_prim/some_prim"。如果我们找不到源基元，则可能为空。

<hr>

Gets the path to the prim that was parsed to generate the given Object .

Target is Usd Stage Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-21210512.png)

## Inputs

In: Exec.

Target: Usd Stage Actor Object Reference.

Object: Object Reference. UObject to query with. Can be one of the transient components generated when a stage was opened, or something like a UStaticMesh..

## Outputs

Out: Exec.

Return Value: String. The path to the source prim, e.g. "/root_prim/some_prim". May be empty in case we couldn't find the source prim..
