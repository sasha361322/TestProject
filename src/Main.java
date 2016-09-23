import client.model.Client;
import client.service.ClientService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        ClientService clientService = (ClientService) context.getBean("clientServiceProxy");
        Client client = clientService.getClientById(1);
        System.out.println(client);
        client.setName("Vasya");
        clientService.updateClient(client);
        System.out.println(client);

    }
}