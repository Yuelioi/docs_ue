# RequestRefresh

设置列表在下一次打勾时刷新。

请注意，从列表的角度来看，刷新只限于说明项目和条目之间的差异。换句话说，它只会释放不再有项目的条目，并为新项目（或新的可见项目）生成条目。

它不考虑现有项目中的变化--那是由项目来宣布的，而且是根据需要来监听一个条目。对于简单的情况来说，这可能是一个繁琐的设置，所以当需要反映 N 个列表项中的变化时，调用 RegenerateAllEntries 也是合理的（尽管不是很理想）。

目标是列表视图基础

## 图示

![](/uploads/projects/ue-bluprint/20221218-19444021.png)

## Inputs

在。执行。

目标。列表视图基本对象参考。

## Outputs

出：执行。

<hr>

Sets the list to refresh on the next tick.

Note that refreshing, from a list perspective, is limited to accounting for discrepancies between items and entries.. In other words, it will only release entries that no longer have items and generate entries for new items (or newly visible items).

It does NOT account for changes within existing items - that is up to the item to announce and an entry to listen to as needed.. This can be onerous to set up for simple cases, so it's also reasonable (though not ideal) to call RegenerateAllEntries when changes within N list items need to be reflected.

Target is List View Base

## 图示

![](/uploads/projects/ue-bluprint/20221218-19444021.png)

## Inputs

In: Exec.

Target: List View Base Object Reference.

## Outputs

Out: Exec.
