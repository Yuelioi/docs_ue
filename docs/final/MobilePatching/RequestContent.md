# RequestContent

试图使用指定的清单URL下载清单文件。一旦成功，它将返回一个代表远程内容的对象。此对象可查询其他信息，如总内容大小、下载大小等。用户可以选择下载和安装远程内容。

目标是移动补丁库

## 图示

![]($-20221218-20062705.png)

## Inputs

在。执行。

远程清单URL。String. : 可以下载清单文件的URL。(http://my-server.com/awesomecontent.manifest)。

云URL。字符串。 : 可以下载内容块数据的URL。(http://my-server.com/awesomecontent/clouddir)。

安装目录。字符串。

关于成功的。代表。

关于失败。代表。  

## Outputs

出：执行。

Attempt to download manifest file using specified manifest URL.. On success it will return an object that represents remote content. This object can be queried for additional information, like total content size, download size, etc.. User can choose to download and install remote content.

Target is Mobile Patching Library

## 图示

![]($-20221218-20062705.png)

## Inputs

In: Exec.

Remote Manifest URL: String. : URL from where manifest file can be downloaded. (http://my-server.com/awesomecontent.manifest).

Cloud URL: String. : URL from where content chunk data can be downloaded. (http://my-server.com/awesomecontent/clouddir).

Install Directory: String.

On Succeeded: Delegate.

On Failed: Delegate.  

## Outputs

Out: Exec.

