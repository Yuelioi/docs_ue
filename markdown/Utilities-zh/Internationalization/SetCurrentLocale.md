# SetCurrentLocale

Set only the current locale (for internationalization).. Note: Unless you're doing something advanced, you likely want SetCurrentLanguageAndLocale or SetCurrentCulture instead.

Target is Kismet Internationalization Library

## 图示

![]($-20221218-14262317.png)

## Inputs

In: Exec.

Culture: String. The locale to set, as an IETF language tag (eg, "zh-Hans-CN")..

Save to Config: Boolean. If true, save the new setting to the users' "GameUserSettings" config so that it persists after a reload..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the locale was set, false otherwise..

