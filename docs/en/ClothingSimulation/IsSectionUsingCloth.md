# IsSectionUsingCloth

Checks whether the provided section is using APEX cloth. if bCheckCorrespondingSections is true. disabled sections will defer to correspond sections to see if they use cloth (non-cloth sections. are disabled and another section added when cloth is enabled, using this flag allows for a check. on the original section to succeed)

Target is Skeletal Mesh

## 图示

![]($-20221218-18180533.png)

## Inputs

Target: Skeletal Mesh Object Reference.

In Section Index: Integer. Index to check.

Check Corresponding Sections: Boolean. Whether to check corresponding sections for disabled sections.  

## Outputs

Return Value: Boolean.

