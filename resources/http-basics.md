# HTTP Basics

## What is HTTP?
- HTTP stands for Hypertext Transfer Protocol.
- It is the foundation of data communication on the World Wide Web.
- HTTP is a protocol used for transmitting hypertext requests and information between servers and clients.

## HTTP Methods
- **GET**: Requests data from a specified resource.
- **POST**: Submits data to be processed to a specified resource.
- **PUT**: Updates a current resource with new data.
- **DELETE**: Deletes the specified resource.
- **HEAD**: Same as GET but returns only HTTP headers and no document body.
- **OPTIONS**: Returns the HTTP methods that the server supports for a specified URL.
- **PATCH**: Applies partial modifications to a resource.

## HTTP Status Codes
- **1xx (Informational)**: Request received, continuing process.
- **2xx (Success)**: The action was successfully received, understood, and accepted.
- **3xx (Redirection)**: Further action must be taken in order to complete the request.
- **4xx (Client Error)**: The request contains bad syntax or cannot be fulfilled.
- **5xx (Server Error)**: The server failed to fulfill an apparently valid request.

## HTTP Headers
- HTTP headers are used to pass additional information with an HTTP request or response.
- Common HTTP request headers:
  - **Accept**: Media type(s) that is/are acceptable for the response.
  - **Authorization**: Credentials for authenticating the client to the server.
  - **Content-Type**: The media type of the body of the request.
- Common HTTP response headers:
  - **Cache-Control**: Directives for caching mechanisms in both requests and responses.
  - **Content-Type**: The media type of the body of the response.
  - **Set-Cookie**: Used to send cookies from the server to the user agent.
