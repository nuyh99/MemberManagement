package product.MemberManagement.DTO;

import product.MemberManagement.domain.Permission;
import product.MemberManagement.domain.Worker;

import javax.persistence.Id;

public class WorkerResponse {
        private String id;
        private String name;
        private Permission permission;

    public WorkerResponse(Worker worker) {
        this.id = worker.getId();
        this.name = worker.getName();
        this.permission = worker.getPermission();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "WorkerResponse{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", permission=" + permission +
                '}';
    }
}
