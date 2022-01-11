package co.com.sofka.mentoring35.collections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class RamdomNumebrs {
    private Date date;
    @Id
    private String id;

    private int number1;

    private int number2;

    private String orginalList;

    private String randomList;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getNumber1() {
        return number1;
    }

    public void setNumber1(int number1) {
        this.number1 = number1;
    }

    public int getNumber2() {
        return number2;
    }

    public void setNumber2(int number2) {
        this.number2 = number2;
    }

    public String getOrginalList() {
        return orginalList;
    }

    public void setOrginalList(String orginalList) {
        this.orginalList = orginalList;
    }

    public String getRandomList() {
        return randomList;
    }

    public void setRandomList(String randomList) {
        this.randomList = randomList;
    }
}
