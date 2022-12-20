# FilterbyIDName

Filter the array based on the Object's ID name.

Target is Editor Filter Library

## 图示

![]($-20221218-18542156.png)

## Inputs

In: Exec.

Target Array: Array of Object References. Array of Object to filter. The array will not change..

Name Sub String: String. The text the Object's ID name..

String Match: EEditorScriptingStringMatchType Enum. Contains the NameSubString OR matches with the wildcard *? OR exactly the same value..

Filter Type: EEditorScriptingFilterType Enum. Should include or not the array's item if it respects the condition..  

## Outputs

Out: Exec.

Return Value: Array of Object References. The filtered list..

