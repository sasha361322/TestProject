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
        Session session = this.sessionFactory.getCurrentSession();
        session.flush();
        session.persist(client);
        session.flush();
    }
    public void updateClient(Client client){
        Session session = this.sessionFactory.getCurrentSession();
        session.flush();
        session.update(client);
        session.flush();
    }
    public void removeClient(int id){
        Session session = this.sessionFactory.getCurrentSession();
        session.flush();
        Client client = (Client)session.load(Client.class, new Integer(id));
        if (client!=null)
           session.delete(client);
        session.flush();
    }
    public Client getClientById(int id){
        Session session=this.sessionFactory.getCurrentSession();
        Client client=(Client)session.load(Client.class, id);
        return client;
    }
    public List<Client> listClients() {
        Session session = this.sessionFactory.getCurrentSession();
        session.flush();
        List<Client> result = session.createQuery("from Client").list();
        return result;
    }
}
