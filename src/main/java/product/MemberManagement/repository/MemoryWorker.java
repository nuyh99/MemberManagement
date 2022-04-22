//package product.MemberManagement.repository;
//
//import org.springframework.stereotype.Repository;
//import product.MemberManagement.domain.Permission;
//import product.MemberManagement.domain.Worker;
//
//import java.util.HashMap;
//
//public class MemoryWorker implements WorkerInterface{
//    private static HashMap<String, Worker> memoryWorker = new HashMap<>();
//
//    public MemoryWorker() {
//        Worker admin=new Worker("admin", "admin");
//        admin.setPermission(Permission.MASTER);
//        memoryWorker.put(admin.getId(), admin);
//    }
//
//    @Override
//    public Worker save(Worker worker) {
//        if(memoryWorker.containsKey(worker.getId()))
//            return null;
//
//        memoryWorker.put(worker.getId(), worker);
//        return worker;
//    }
//
//    @Override
//    public Worker update(Worker worker, Permission permission) {
//        if(memoryWorker.containsKey(worker.getId())){
//            worker.setPermission(permission);
//            memoryWorker.put(worker.getId(), worker);
//            return worker;
//        }
//
//        return null;
//    }
//
//    @Override
//    public Worker login(Worker worker) {
//        if(memoryWorker.containsKey(worker.getId()))
//            if(memoryWorker.get(worker.getId()).getPw().equals(worker.getPw()))
//                return worker;
//
//        return null;
//    }
//
//    @Override
//    public Permission getPermission(String id) {
//        if(memoryWorker.containsKey(id))
//            return memoryWorker.get(id).getPermission();
//
//        return null;
//    }
//}
