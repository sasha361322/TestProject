<%@ page import="client.model.Client" %>
<%@ page import="java.util.List" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
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
        <th>
            Id
        </th>
        <th>
            Имя
        </th>
        <th>
            Фамилия
        </th>
        <th>
            Отчество
        </th>
        <th>
            Дата рождения
        </th>
        <th>
            Номер счета
        </th>
    </tr>
    <%
        List<Client> clients = (List<Client>) request.getAttribute("clients");
        for (Client client:clients){%>
            <tr>
                <td>
                    <%=client.getId()%>
                </td>
                <td>
                    <%=client.getName()%>
                </td>
                <td>
                    <%=client.getSurname()%>
                </td>
                <td>
                    <%=client.getPatronymicName()%>
                </td>
                <td>
                    <%=new SimpleDateFormat("dd-MM-yyyy").format(client.getBirthday())%>
                </td>
                <td>
                    <%=client.getAccountNumber()%>
                </td>
                <td>
                    Изменить
                </td>
            </tr>
        <%}
    %>
</table>
</body>
</html>