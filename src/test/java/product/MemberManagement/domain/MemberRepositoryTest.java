package product.MemberManagement.domain;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberRepositoryTest {
    @Autowired
    MemberRepository memberRepository;

    @Test
    @Transactional
    void IntegratedTest() {
        Member member = new Member("장연서", "010123241234");
        Member member2 = new Member("장연서2", "010123412231");
        System.out.println(memberRepository.save(member));
        System.out.println(memberRepository.save(member2));
        Assertions.assertThat(memberRepository.getById("010123412231").getPhone()).isEqualTo(member2.getPhone());
    }
}