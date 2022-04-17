package product.MemberManagement.service;

import product.MemberManagement.domain.Permission;
import product.MemberManagement.domain.Worker;

public interface WorkerService {
    Worker join(Worker worker);
    Worker givePermission(Worker worker, Permission permission);
    Worker login(Worker worker);
    Permission checkPermission(String id);
}
