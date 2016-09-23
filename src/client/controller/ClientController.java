package client.controller;

import client.model.Client;
import client.service.ClientService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("")
public class ClientController{
    @RequestMapping(value = "/clients.json", method = RequestMethod.GET)
    public List<Client>  listOfClients() {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        ClientService clientService = (ClientService) context.getBean("clientServiceProxy");
        List<Client> clients = clientService.listClients();
        return clients;
    }
    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    public Client getClient(@PathVariable("id") String id) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        ClientService clientService = (ClientService) context.getBean("clientServiceProxy");
        Client client = clientService.getClientById(Integer.parseInt(id));
        System.out.println(client);
        return client;
    }
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Client add(@RequestBody Client client) {
        System.out.println("addcontroller");
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        ClientService clientService = (ClientService) context.getBean("clientServiceProxy");
        clientService.addClient(client);
        return client;
    }
    @RequestMapping(value = "/del/{id}", method = RequestMethod.DELETE)
    public int del(@PathVariable("id") String id) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        ClientService clientService = (ClientService) context.getBean("clientServiceProxy");
        clientService.removeClient(Integer.parseInt(id));
        return 1;
    }
    @RequestMapping(value = "/edit", method = RequestMethod.PUT)
    public Client edit(@RequestBody Client client) {
        System.out.println("editcontroller");
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        ClientService clientService = (ClientService) context.getBean("clientServiceProxy");
        clientService.updateClient(client);
        return client;
    }
}