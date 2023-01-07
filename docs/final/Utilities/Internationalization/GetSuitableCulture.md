# GetSuitableCulture

例如）如果你的列表是[en, fr, de]，给定的文化是 "en-US"，这个函数将返回 "en"。 例如）如果你的列表是[zh, ar, pl]，给定的文化是 "en-US"，这个函数将返回后备文化。

目标是 Kismet 国际化库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14261882.png)

## Inputs

可用的文化。字符串数组。要过滤的可用文化列表（见 GetLocalizedCultures）。

要匹配的文化。字符串。要尝试匹配的文化（见 GetCurrentLanguage）。

回归文化。字符串。如果列表中没有合适的匹配文化，则返回该文化（通常是你的母语文化，见 GetNativeCulture）。

## Outputs

返回值。字符串。作为 IETF 语言标签的文化（例如，"zh-Hans-CN"）。

<hr>

Given a list of available cultures, try and find the most suitable culture from the list based on culture prioritization.. eg) If your list was [en, fr, de] and the given culture was "en-US", this function would return "en".. eg) If your list was [zh, ar, pl] and the given culture was "en-US", this function would return the fallback culture.

Target is Kismet Internationalization Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14261882.png)

## Inputs

Available Cultures: Array of Strings. List of available cultures to filter against (see GetLocalizedCultures)..

Culture to Match: String. Culture to try and match (see GetCurrentLanguage)..

Fallback Culture: String. The culture to return if there is no suitable match in the list (typically your native culture, see GetNativeCulture)..

## Outputs

Return Value: String. The culture as an IETF language tag (eg, "zh-Hans-CN")..
