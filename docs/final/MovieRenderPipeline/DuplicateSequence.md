# DuplicateSequence

使用一个中等深度的拷贝来复制指定的序列。标准复制只会复制顶级序列（因为镜头和子序列是其他独立的资产），所以这个函数会递归地复制给定的序列、镜头和子序列，然后修复指向新复制序列的引用。

请自行承担使用风险。有些功能在复制时可能不起作用（复杂的对象绑定安排、蓝图 GetSequenceBinding 节点等），但在想要创建一堆有细微差别的变化时（比如换掉一个演员、轨道等），会很有用。

这不会重复序列所指向的镜头/次序列以外的任何资产。

目标是电影管道蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20082248.png)

## Inputs

在。执行。

外部。对象参考。新复制的对象的外层。留空给 TransientPackage();。

在序列中。电影场景序列对象参考。递归复制的序列...

## Outputs

出：执行。

返回值。电影场景序列对象参考。被复制的序列，如果没有提供序列来复制，则为空。

<hr>

Duplicates the specified sequence using a medium depth copy. Standard duplication will only duplicate. the top level Sequence (since shots and sub-sequences are other standalone assets) so this function. recursively duplicates the given sequence, shot and subsequence and then fixes up the references to. point to newly duplicated sequences.

Use at your own risk. Some features may not work when duplicated (complex object binding arrangements,. blueprint GetSequenceBinding nodes, etc.) but can be useful when wanting to create a bunch of variations. with minor differences (such as swapping out an actor, track, etc.)

This does not duplicate any assets that the sequence points to outside of Shots/Subsequences.

Target is Movie Pipeline Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20082248.png)

## Inputs

In: Exec.

Outer: Object Reference. The Outer of the newly duplicated object. Leave null for TransientPackage();.

In Sequence: Movie Scene Sequence Object Reference. The sequence to recursively duplicate..

## Outputs

Out: Exec.

Return Value: Movie Scene Sequence Object Reference. The duplicated sequence, or null if no sequence was provided to duplicate..
