<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page import="client.model.Client" %>
<%@ page import="java.util.List" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Clients</title>
    <script  type="javascript"  src="/js/controllers.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>
</head>
<body">,
<table border="2" width="80%">
    <tr>
        <th>Id</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Отчество</th>
        <th>Дата рождения</th>
        <th>Номер счета</th>
    </tr>
</table>
 <%--{{today}}--%>
<div
{{ 1 + 8 }}
<form method="post" action="/add" >
    <table>
        <tr>
            <td><label for="Id">Id</label></td>
            <td><input id="Id" name="Id"/></td>
        </tr>
        <tr>
            <td><label for="Surname">Surname</label></td>
            <td><input id="Surname" name="Surname"/></td>
        </tr>
        <tr>
            <td><label for="Name">name</label></td>
            <td><input id="Name" name="Name"/></td>
        </tr>
        <tr>
            <td><label for="PatronymicName">PatronymicName</label></td>
            <td><input id="PatronymicName" name="PatronymicName"/></td>
        </tr>
        <tr>
            <td><label for="Birthday">Birthday</label></td>
            <td><input id="Birthday" name="Birthday"/></td>
        </tr>
        <tr>
            <td><label for="AccountNumber">Account Number</label></td>
            <td><input id="AccountNumber" name="AccountNumber"/></td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="Submit"/>
            </td>
        </tr>
    </table>
</form>
</body>
</html>