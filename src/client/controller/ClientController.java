package client.controller;

import client.model.Client;
import client.service.ClientService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ClientController extends AbstractController {

    @Override
    protected ModelAndView handleRequestInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        ClientService clientService = (ClientService) context.getBean("clientServiceProxy");
        List<Client> clients = clientService.listClients();
        Map<String,Object> data = new HashMap<String,Object>();
        data.put("clients", clients);
        data.put("clientForm", new Client());
        return new ModelAndView("clients", data);
    }
}