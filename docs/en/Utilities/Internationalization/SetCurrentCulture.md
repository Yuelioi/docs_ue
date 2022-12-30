# SetCurrentCulture

Set the current culture.. Note: This function is a sledgehammer, and will set both the language and locale, as well as clear out any asset group cultures that may be set.

Target is Kismet Internationalization Library

## 图示

![]($-20221218-14262057.png)

## Inputs

In: Exec.

Culture: String. The culture to set, as an IETF language tag (eg, "zh-Hans-CN")..

Save to Config: Boolean. If true, save the new setting to the users' "GameUserSettings" config so that it persists after a reload..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the culture was set, false otherwise..

