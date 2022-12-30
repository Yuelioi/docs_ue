# SendHTTPRequest

Sends a asynchronous HTTP request. Responses will be returned in the the OnHTTPResponseRecieved event.

Target is Movie Pipeline Executor Base

## 图示

![]($-20221218-20095529.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Base Object Reference.

In URL: String. The URL to send the request to..

In Verb: String. The HTTP verb for the request. GET, PUT, POST, etc..

In Message: String. The content of the request..

In Headers: Map of Strings to Strings. Headers that should be set on the request..  

## Outputs

Out: Exec.

Return Value: Integer. Returns an index for the request. This index will be provided in the OnHTTPResponseRecieved event so you can make multiple HTTP requests at once and tell them apart when you recieve them, even if they come out of order..

