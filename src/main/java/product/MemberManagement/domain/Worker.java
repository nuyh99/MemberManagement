package product.MemberManagement.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Worker {
    @Id
    private String id;

    private String pw;
    private String name;
    private Permission permission=Permission.NOTHING;

    public Worker(String id, String pw, String name, Permission permission) {
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.permission = permission;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Permission getPermission() {
        return permission;
    }

    public void setPermission(Permission permission) {
        this.permission = permission;
    }

    public Worker() {
    }

    @Override
    public String toString() {
        return "Worker{" +
                "id='" + id + '\'' +
                ", pw='" + pw + '\'' +
                ", name='" + name + '\'' +
                ", permission=" + permission +
                '}';
    }
}
