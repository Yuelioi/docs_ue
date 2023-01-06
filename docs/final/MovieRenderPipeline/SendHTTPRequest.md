# SendHTTPRequest

发出一个异步的HTTP请求。回复将在OnHTTPResponseRecieved事件中返回。

目标是电影管道执行者基地

## 图示

![]($-20221218-20095529.png)

## Inputs

在。执行。

目标。电影管道执行器基础对象参考。

在URL中。字符串。发送请求的URL。

在Verb中：字符串。请求的HTTP动词。GET、PUT、POST等。

在消息中。字符串。请求的内容。

在页眉。字符串到字符串的映射。应该在请求中设置的头信息...  

## Outputs

出：执行。

返回值。整数。返回一个请求的索引。这个索引将在OnHTTPResponseRecieved事件中提供，所以你可以一次提出多个HTTP请求，并在收到这些请求时将它们区分开来，即使它们的顺序不对。

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

