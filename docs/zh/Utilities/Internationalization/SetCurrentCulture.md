# SetCurrentCulture

设置当前的文化。注意：这个函数是一个大锤子，它将同时设置语言和地域，以及清除任何可能被设置的资产组文化。

目标是Kismet国际化库

## 图示

![]($-20221218-14262057.png)

## Inputs

在。执行。

文化。字符串。要设置的文化，作为一个IETF语言标签（例如，"zh-Hans-CN"）。

Save to Config: 布尔值。如果为真，将新的设置保存到用户的 "GameUserSettings "配置中，以便在重新加载后持续存在。 

## Outputs

输出。执行：执行。

返回值。布尔值。如果文化被设置，则为真，否则为假。
