# SetCurrentLanguageandLocale

Set the current language (for localization) and locale (for internationalization).

Target is Kismet Internationalization Library

## 图示

![]($-20221218-14262230.png)

## Inputs

In: Exec.

Culture: String. The language and locale to set, as an IETF language tag (eg, "zh-Hans-CN")..

Save to Config: Boolean. If true, save the new setting to the users' "GameUserSettings" config so that it persists after a reload..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the language and locale were set, false otherwise..

