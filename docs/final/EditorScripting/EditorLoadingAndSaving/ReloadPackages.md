# ReloadPackages

试图重新加载指定的顶级软件包的辅助函数。

目标是编辑器加载和保存工具

## 图示

![](/uploads/projects/ue-bluprint/20221218-18494554.png)

## Inputs

在。执行。

要重新加载的包。包对象引用的数组。应该被重新加载的包的列表。

交互模式。EReloadPackagesInteractionMode 枚举。该函数是否允许向用户提问（如是否重新加载脏包）。

## Outputs

出：执行。

出任何包的重装。布尔值。如果加载的包的集合被改变，则为真。

出错信息。文本。一个错误信息，说明重新加载软件包的任何问题。

<hr>

Helper function that attempts to reload the specified top-level packages.

Target is Editor Loading and Saving Utils

## 图示

![](/uploads/projects/ue-bluprint/20221218-18494554.png)

## Inputs

In: Exec.

Packages to Reload: Array of Package Object References. The list of packages that should be reloaded.

Interaction Mode: EReloadPackagesInteractionMode Enum. Whether the function is allowed to ask the user questions (such as whether to reload dirty packages).

## Outputs

Out: Exec.

Out Any Packages Reloaded: Boolean. True if the set of loaded packages was changed.

Out Error Message: Text. An error message specifying any problems with reloading packages.
