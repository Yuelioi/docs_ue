# BreakAssetManagerSearchRules

Adds a node that breaks a 'AssetManagerSearchRules' into its member fields

## 图示

![]($-20221218-14312383.png)

## Inputs

Asset Manager Search Rules: Asset Manager Search Rules Structure (by ref).  

## Outputs

Asset Scan Paths: Array of Strings. Asset Scan Paths:. List of top-level directories and specific assets to search, must be paths starting with /, directories should not have a trailing /.

Include Patterns: Array of Strings. Include Patterns:. Optional list of include wildcard patterns using * that will get matched against full package path. If there are any at least one of these must match.

Exclude Patterns: Array of Strings. Exclude Patterns:. Optional list of exclude wildcard patterns that can use *, if any of these match it will be excluded.

Asset Base Class: Object Class Reference. Asset Base Class:. Assets must inherit from this class, for blueprints this should be the instance base class.

Has Blueprint Classes: Boolean. Has Blueprint Classes:. True if scanning for blueprints, false for all other assets.

Force Synchronous Scan: Boolean. Force Synchronous Scan:. True if this should force a synchronous scan of the disk even if an async scan is in progress.

Skip Virtual Path Expansion: Boolean. Skip Virtual Path Expansion:. True if AssetScanPaths are real paths that do not need expansion.

Skip Manager Include Check: Boolean. Skip Manager Include Check:. True if this test should skip the ShouldIncludeInAssetSearch function on AssetManager.

