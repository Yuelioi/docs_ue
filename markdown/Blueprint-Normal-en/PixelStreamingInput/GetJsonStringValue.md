# GetJsonStringValue

Helper function to extract a string field from a JSON descriptor of a. UI interaction given its field name.. The field name may be hierarchical, delimited by a period. For example,. to access the Width value of a Resolution command above you should use. "Resolution.Width" to get the width value.

Target is Pixel Streaming Input

## 图示

![]($-20221218-20292720.png)

## Inputs

Target: Pixel Streaming Input Object Reference.

Descriptor: String. The UI interaction JSON descriptor..

Field Name: String. The name of the field to look for in the JSON..  

## Outputs

String Value: String. The string value associated with the field name..

Success: Boolean. True if the field exists in the JSON data..

