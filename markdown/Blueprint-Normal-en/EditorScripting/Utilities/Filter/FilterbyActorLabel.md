# FilterbyActorLabel

Filter the array based on the Actor's label (what we see in the editor)

Target is Editor Filter Library

## 图示

![]($-20221218-18541757.png)

## Inputs

In: Exec.

Target Array: Array of Actor Object References. Array of Actor to filter. The array will not change..

Name Sub String: String. The text the Actor's Label..

String Match: EEditorScriptingStringMatchType Enum. Contains the NameSubString OR matches with the wildcard *? OR exactly the same value..

Filter Type: EEditorScriptingFilterType Enum. Should include or not the array's item if it respects the condition..

Ignore Case: Boolean. Determines case sensitivity options for string comparisons..  

## Outputs

Out: Exec.

Return Value: Array of Actor Object References. The filtered list..

