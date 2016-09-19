package client.controller;

import client.model.Client;
import client.service.ClientService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;


public class AddController extends AbstractController {
    @Override
    protected ModelAndView handleRequestInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
        if (httpServletRequest.getMethod().equals("GET")){
            Map<String,Client> data = new HashMap<String,Client>();
            Client client = new Client();
            data.put("clientForm", client);
            return  new ModelAndView("add", data);
        }
        else{//POST
            Client client = new Client();
            Map<String, String[]> parameterMap = httpServletRequest.getParameterMap();
            client.setId(Integer.parseInt(httpServletRequest.getParameter("Id")));
            client.setSurname(httpServletRequest.getParameter("Surname"));
            client.setName(httpServletRequest.getParameter("Name"));
            client.setPatronymicName(httpServletRequest.getParameter("PatronymicName"));
            client.setBirthday(new SimpleDateFormat("dd-MM-yyyy").parse(httpServletRequest.getParameter("Birthday")));
            client.setAccountNumber(Integer.parseInt(httpServletRequest.getParameter("AccountNumber")));
            System.out.println(client);
            ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
            ClientService clientService = (ClientService) context.getBean("clientServiceProxy");
            clientService.addClient(client);
            System.out.println("added");
            return new ModelAndView("redirect:/clients");
        }
    }
}
