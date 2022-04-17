package product.MemberManagement.repository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import product.MemberManagement.MemberManagementApplication;
import product.MemberManagement.domain.Permission;
import product.MemberManagement.domain.Worker;

import static org.assertj.core.api.Assertions.*;

class MemoryWorkerTest {
    private final WorkerInterface workerInterface = new AnnotationConfigApplicationContext(MemberManagementApplication.class).getBean(WorkerInterface.class);

    @Test
    void WorkerIntegratedTest(){
        Worker test = new Worker("idid", "pwpw");

        assertThat(workerInterface.save(test)).isEqualTo(test);
        assertThat(workerInterface.update(test, Permission.MASTER)).isEqualTo(test);
        assertThat(workerInterface.login(test)).isEqualTo(test);
    }

}