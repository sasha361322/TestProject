package client.controller;

import client.model.Client;
import client.service.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("clients")
public class ClientController{
    private ClientService clientService;
    public void setClientService(ClientService clientService) {
        this.clientService = clientService;
    }
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Client>  listOfClients() {
        List<Client> clients = clientService.listClients();
        return clients;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Client getClient(@PathVariable("id") String id) {
        Client client = clientService.getClientById(Integer.parseInt(id));
        System.out.println(client);
        return client;
    }
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Client add(@RequestBody Client client) {
        clientService.addClient(client);
        return client;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public int del(@PathVariable("id") String id) {
        clientService.removeClient(Integer.parseInt(id));
        return 1;
    }
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public Client edit(@RequestBody Client client) {
        clientService.updateClient(client);
        return client;
    }
}