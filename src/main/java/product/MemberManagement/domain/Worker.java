package product.MemberManagement.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Worker {
    @Id
    private String id;
    private String pw;
    private Permission permission=Permission.NOTHING;

    public Worker(String id, String pw) {
        this.id = id;
        this.pw = pw;
    }

    public Worker() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public Permission getPermission() {
        return permission;
    }

    public void setPermission(Permission permission) {
        this.permission = permission;
    }

    @Override
    public String toString() {
        return "Worker{" +
                "id='" + id + '\'' +
                ", pw='" + pw + '\'' +
                ", permission=" + permission +
                '}';
    }
}
