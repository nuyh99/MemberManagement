package product.MemberManagement.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import product.MemberManagement.domain.Member;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberServiceImplTest {
    @Autowired
    MemberService memberService;

    @Test
    @Transactional
    void IntegratedMemberTest() {
        Member deer = new Member("장연서", "01032472601");
        memberService.join(deer);
        System.out.println(memberService.findByPhone(deer.getPhone()));
        memberService.delete(deer.getPhone());
        System.out.println(memberService.findByPhone(deer.getPhone()));
    }
}