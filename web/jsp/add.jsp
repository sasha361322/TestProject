<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%--
  Created by IntelliJ IDEA.
  User: sasha
  Date: 16.09.2016
  Time: 16:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Добавить</title>
</head>
<body>
<form:form method="post" action="/add" modelAttribute="clientForm">
    <table>
        <tr>
            <td><form:label path="Id">Id</form:label></td>
            <td><form:input path="Id"/></td>
        </tr>
        <tr>
            <td><form:label path="Surname">Surname</form:label></td>
            <td><form:input path="Surname"/></td>
        </tr>
        <tr>
            <td><form:label path="Name">name</form:label></td>
            <td><form:input path="Name"/></td>
        </tr>
        <tr>
            <td><form:label path="PatronymicName">PatronymicName</form:label></td>
            <td><form:input path="PatronymicName"/></td>
        </tr>
        <tr>
            <td><form:label path="Birthday">Birthday</form:label></td>
            <td><form:input path="Birthday"/></td>
        </tr>
        <tr>
            <td><form:label path="AccountNumber">Account Number</form:label></td>
            <td><form:input path="AccountNumber"/></td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="Submit"/>
            </td>
        </tr>
    </table>
</form:form>
</body>
</html>
