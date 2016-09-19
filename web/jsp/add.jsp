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
<%=request.getAttribute("msg")%>
<form:form method="post" action="/add">
    <table>
        <tr>
            <td><form:label path="id">Id</form:label></td>
            <td><form:input path="id"/></td>
        </tr>
        <tr>
            <td><form:label path="surname">surname</form:label></td>
            <td><form:input path="surname"/></td>
        </tr>
        <tr>
            <td><form:label path="name">name</form:label></td>
            <td><form:input path="name"/></td>
        </tr>
        <tr>
            <td><form:label path="patronymicname">patronymicname</form:label></td>
            <td><form:input path="patronymicname"/></td>
        </tr>
        <tr>
            <td><form:label path="id">Id</form:label></td>
            <td><form:input path="id"/></td>
        </tr>
        <tr>
            <td><form:label path="id">Id</form:label></td>
            <td><form:input path="id"/></td>
        </tr>
    </table>
</form:form>
</body>
</html>
