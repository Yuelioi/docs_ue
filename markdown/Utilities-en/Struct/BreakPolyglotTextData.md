# BreakPolyglotTextData

Adds a node that breaks a 'PolyglotTextData' into its member fields

## 图示

![]($-20221218-14411061.png)

## Inputs

Polyglot Text Data: Polyglot Text Data Structure (by ref).  

## Outputs

Category: ELocalizedTextSourceCategory Enum. Category:. The category of this polyglot data.. @note This affects when and how the data is loaded into the text localization manager..

Native Culture: String. Native Culture:. The native culture of this polyglot data.. @note This may be empty, and if empty, will be inferred from the native culture of the text category..

Namespace: String. Namespace:. The namespace of the text created from this polyglot data.. @note This may be empty..

Key: String. Key:. The key of the text created from this polyglot data.. @note This must not be empty..

Native String: String. Native String:. The native string for this polyglot data.. @note This must not be empty (it should be the same as the originally authored text you are trying to replace)..

Localized Strings: Map of Strings to Strings. Localized Strings:. Mapping between a culture code and its localized string.. @note The native culture may also have a translation in this map..

Is Minimal Patch: Boolean. Is Minimal Patch:. True if this polyglot data is a minimal patch, and that missing translations should be. ignored (falling back to any LocRes data) rather than falling back to the native string..

