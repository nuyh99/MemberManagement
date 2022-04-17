package product.MemberManagement.repository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import product.MemberManagement.MemberManagementApplication;
import product.MemberManagement.domain.Member;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

class MemoryMemberTest {
    private final MemberInterface memberInterface = new AnnotationConfigApplicationContext(MemberManagementApplication.class).getBean(MemberInterface.class);

    @Test
    void IntegratedMemberTest(){
        Member test = new Member("name", "01023121231");

        assertThat(memberInterface.save(test)).isEqualTo(test);
        assertThat(memberInterface.isExist("01023121231")).isEqualTo(test);
        assertThat(memberInterface.delete(test.getPhone())).isEqualTo(test);
    }

}