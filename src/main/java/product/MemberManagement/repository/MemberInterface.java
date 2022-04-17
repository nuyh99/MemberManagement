package product.MemberManagement.repository;

import product.MemberManagement.domain.Member;

public interface MemberInterface {
    Member save(Member member);
    Member delete(String phone);
    Member isExist(String phone);
    void deleteAll();
}
