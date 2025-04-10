# API Testing

## What is API Testing?
- API testing involves testing APIs directly to ensure they meet expectations for functionality, reliability, performance, and security.
- It focuses on the business logic layer of the software architecture.

## Types of API Testing
- **Functional Testing**: Verifies that the API functions correctly according to the requirements.
- **Load Testing**: Checks the API's performance under load to ensure it can handle high traffic.
- **Security Testing**: Ensures that the API is secure from external threats and vulnerabilities.
- **Validation Testing**: Confirms that the API meets the expected standards and specifications.
- **Error Handling Testing**: Verifies that the API handles errors gracefully and returns appropriate error messages.

## Tools for API Testing
- **Postman**: A popular tool for testing APIs, allowing users to create and execute API requests.
- **Swagger**: An open-source tool for designing, building, and documenting APIs.
- **JMeter**: An open-source tool for load testing and performance measurement of APIs.
- **Newman**: A command-line tool for running Postman collections.
- **RestAssured**: A Java library for testing RESTful APIs.

## Best Practices for API Testing
- **Define Clear Test Cases**: Create detailed test cases that cover all possible scenarios and edge cases.
- **Use Automated Testing**: Automate repetitive tests to save time and ensure consistency.
- **Validate Responses**: Check the API responses for correctness, including status codes, headers, and data.
- **Test for Security**: Ensure that the API is secure by testing for common vulnerabilities such as SQL injection, XSS, and CSRF.
- **Monitor Performance**: Continuously monitor the API's performance to identify and address any issues.

## Example of API Testing with Postman
1. **Create a New Request**: Open Postman and create a new request.
2. **Set the Request Method and URL**: Choose the HTTP method (GET, POST, PUT, DELETE) and enter the API endpoint URL.
3. **Add Headers and Body**: Add any necessary headers and body data for the request.
4. **Send the Request**: Click the "Send" button to execute the request.
5. **Validate the Response**: Check the response status code, headers, and body to ensure they match the expected results.

## Example of API Testing with RestAssured (Java)
```java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ApiTest {
    public static void main(String[] args) {
        RestAssured.baseURI = "https://api.example.com";

        // Example of a GET request
        given().
            header("Content-Type", "application/json").
        when().
            get("/endpoint").
        then().
            statusCode(200).
            body("key", equalTo("value"));

        // Example of a POST request
        given().
            header("Content-Type", "application/json").
            body("{ \"key\": \"value\" }").
        when().
            post("/endpoint").
        then().
            statusCode(201).
            body("key", equalTo("value"));
    }
}
```
