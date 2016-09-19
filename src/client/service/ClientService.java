package client.service;

import client.model.Client;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.List;
public class ClientService {
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addClient(Client client){
        Session session = this.sessionFactory.openSession();
        session.persist(client);
    }
    public void updateClient(Client client){
        Session session = this.sessionFactory.openSession();
        session.update(client);
    }
    public void removeClient(int id){
        Session session = this.sessionFactory.openSession();
        Client client = (Client)session.load(Client.class, new Integer(id));
        if (client!=null)
           session.delete(client);
    }
    public Client getClientById(int id){
        Session session=this.sessionFactory.openSession();
        Client client=(Client)session.load(Client.class, id);
        return client;
    }
    public List<Client> listClients() {
        Session session = this.sessionFactory.openSession();
        List<Client> result = session.createQuery("from Client").list();
        return result;
    }
}
