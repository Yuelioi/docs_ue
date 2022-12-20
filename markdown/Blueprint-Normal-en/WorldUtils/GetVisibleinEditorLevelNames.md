# GetVisibleinEditorLevelNames

Returns the path name (e.g. "/Game/Maps/MyLevel") of levels that checked to be visible in the editor within World .. We use these to revert the World to its initial state after we force-stream levels in for exporting

Target is Usd Conversion Blueprint Library

## 图示

![]($-20221218-21383747.png)

## Inputs

In: Exec.

World: World Object Reference.  

## Outputs

Out: Exec.

Return Value: Array of Strings. Returns the path name (e.g. "/Game/Maps/MyLevel") of levels that checked to be visible in the editor within World .. We use these to revert the World to its initial state after we force-stream levels in for exporting.

