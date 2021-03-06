package product.MemberManagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import product.MemberManagement.DTO.WorkerResponse;
import product.MemberManagement.domain.Permission;
import product.MemberManagement.domain.Worker;
import product.MemberManagement.domain.WorkerRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class WorkerServiceImpl implements WorkerService {
    private final WorkerRepository workerRepository;

    @Autowired
    public WorkerServiceImpl(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    @Override
    public Worker join(Worker worker) {
        if(workerRepository.existsById(worker.getId()))
            return null;

        return workerRepository.save(worker);
    }

    @Override
    public Worker givePermission(Worker worker, Permission permission) {
        if (workerRepository.existsById(worker.getId())) {
            Worker temp = workerRepository.getById(worker.getId());
            temp.setPermission(permission);
            return workerRepository.save(temp);
        }

        return null;
    }

    @Override
    public Worker login(Worker worker) {
        Worker expected = workerRepository.getById(worker.getId());
        if (expected.getPw().equals(worker.getPw())) {
            return worker;
        }

        return null;
    }

    @Override
    public Permission checkPermission(String id) {
        return workerRepository.getById(id).getPermission();
    }

    @Override
    public List<WorkerResponse> findAll() {
        List<Worker> all = workerRepository.findAll();
        List<WorkerResponse> dto = new ArrayList<>();
        all.stream().forEach(o-> dto.add(new WorkerResponse(o)));
        if(!dto.isEmpty())
            return dto;

        return null;
    }
}
