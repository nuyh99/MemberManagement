package product.MemberManagement.repository;

import product.MemberManagement.domain.Permission;
import product.MemberManagement.domain.Worker;

public interface WorkerInterface {
    Worker save(Worker worker);
    Worker update(Worker worker, Permission permission);
    Worker login(Worker worker);

    Permission getPermission(String id);
}
