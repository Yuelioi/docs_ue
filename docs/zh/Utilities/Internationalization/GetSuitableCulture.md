# GetSuitableCulture

例如）如果你的列表是[en, fr, de]，给定的文化是 "en-US"，这个函数将返回 "en"。 例如）如果你的列表是[zh, ar, pl]，给定的文化是 "en-US"，这个函数将返回后备文化。

目标是Kismet国际化库

## 图示

![]($-20221218-14261882.png)

## Inputs

可用的文化。字符串数组。要过滤的可用文化列表（见GetLocalizedCultures）。

要匹配的文化。字符串。要尝试匹配的文化（见GetCurrentLanguage）。

回归文化。字符串。如果列表中没有合适的匹配文化，则返回该文化（通常是你的母语文化，见GetNativeCulture）。 

## Outputs

返回值。字符串。作为IETF语言标签的文化（例如，"zh-Hans-CN"）。
