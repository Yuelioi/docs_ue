# SetCurrentLanguage

Set only the current language (for localization).. Note: Unless you're doing something advanced, you likely want SetCurrentLanguageAndLocale or SetCurrentCulture instead.

Target is Kismet Internationalization Library

## 图示

![]($-20221218-14262143.png)

## Inputs

In: Exec.

Culture: String. The language to set, as an IETF language tag (eg, "zh-Hans-CN")..

Save to Config: Boolean. If true, save the new setting to the users' "GameUserSettings" config so that it persists after a reload..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the language was set, false otherwise..

