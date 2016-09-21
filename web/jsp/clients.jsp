<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page import="client.model.Client" %>
<%@ page import="java.util.List" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="clientsApp">
<head>
    <title>Clients</title>
</head>
<body>
<h1>hi</h1>
<%--<%--%>
    <%--LinkedList<Client> clients=%>"${clients}"<%;%>--%>
    <%--for(Client client:clients){%>--%>
<%--<h2><%=client.getName()%></h2>--%>
    <%--<%}%>--%>
<%--<%List<Client> cls=${clients};%>--%>
<table border="2" width="80%">
    <tr>
        <th>Id</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Отчество</th>
        <th>Дата рождения</th>
        <th>Номер счета</th>
    </tr>
    <%
        List<Client> clients = (List<Client>) request.getAttribute("clients");
        for (Client client:clients){%>
            <tr>
                <td><%=client.getId()%></td>
                <td><%=client.getName()%></td>
                <td><%=client.getSurname()%></td>
                <td><%=client.getPatronymicName()%></td>
                <td><%=new SimpleDateFormat("dd-MM-yyyy").format(client.getBirthday())%></td>
                <td><%=client.getAccountNumber()%></td>
                <td>Изменить</td>
                <td><form action="/del" method="post">
                    <input type="hidden" name="id" value="<%=client.getId()%>"/>
                    <input type="submit" value="Удалить"/>
                </form></td>
            </tr>
        <%}
    %>
</table>

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