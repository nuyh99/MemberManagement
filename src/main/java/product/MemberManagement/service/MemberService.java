package product.MemberManagement.service;

import product.MemberManagement.domain.Member;

import java.util.List;

public interface MemberService {
    Member join(Member member);
    Member delete(String phone);
    Member findByPhone(String phone);
    void clearMember();
}
