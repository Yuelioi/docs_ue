# ApplyRuntimeChanges

如果你想在应用程序执行期间改变原点或CRS定义属性，你需要调用这个函数来更新内部转换缓存。请注意，这不是一个推荐的做法，因为它不会相应地移动级别的角色。不过，如果你自己重新设置你的角色，或者你想改变一个用于显示坐标的CRS，那么就会很有用。

目标是地理参考系统

## 图示

![]($-20221218-19141338.png)

## Inputs

在。执行。

目标。地理参考系统对象参考。  

## Outputs

出：执行。

In case you want to change the Origin or CRS definition properties during application execution, you need to call this function to update the internal transformation cache.. Note this is not a recommended practice, because it will not move the level actors accordingly.. Can be useful though if you rebase your actors yourself, or if you want to change one CRS used for displaying coordinates.

Target is Geo Referencing System

## 图示

![]($-20221218-19141338.png)

## Inputs

In: Exec.

Target: Geo Referencing System Object Reference.  

## Outputs

Out: Exec.

