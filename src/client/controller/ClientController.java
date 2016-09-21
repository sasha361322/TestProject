package client.controller;

import client.model.Client;
import client.service.ClientService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("")
public class ClientController{
//    public void setClientService(ClientService clientService) {
//        this.clientService = clientService;
//    }
//
//    private ClientService clientService;
/*
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
*/
    @RequestMapping(value = "/clients.json", method = RequestMethod.GET)
    public List<Client>  listOfClients() {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        ClientService clientService = (ClientService) context.getBean("clientServiceProxy");
        List<Client> clients = clientService.listClients();
        return clients;
    }
}