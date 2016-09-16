package client.model;

import java.io.Serializable;
import java.util.Date;

public class Client implements Serializable {
    private int Id;
    private String Surname;
    private String Name;
    private String PatronymicName;
    private Date Birthday;
    private int AccountNumber;
    public int getId() {
        return Id;
    }
    public void setId(int id) {
        Id = id;
    }
    public String getSurname() {
        return Surname;
    }
    public void setSurname(String surname) {
        Surname = surname;
    }
    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }
    public String getPatronymicName() {
        return PatronymicName;
    }
    public void setPatronymicName(String patronymicName) {
        PatronymicName = patronymicName;
    }
    public Date getBirthday() {
        return Birthday;
    }
    public void setBirthday(Date birthday) {
        Birthday = birthday;
    }
    public int getAccountNumber() {
        return AccountNumber;
    }
    public void setAccountNumber(int accountNumber) {
        AccountNumber = accountNumber;
    }

    @Override
    public String toString() {
        return "Client{" +
                "Id=" + Id +
                ", Sirname='" + Surname + '\'' +
                ", Name='" + Name + '\'' +
                ", PatronymicName='" + PatronymicName + '\'' +
                ", Birthday=" + Birthday +
                ", AccountNumber=" + AccountNumber +
                '}';
    }
}

