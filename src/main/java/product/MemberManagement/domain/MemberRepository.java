package product.MemberManagement.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import product.MemberManagement.repository.MemberInterface;

@Repository
public interface MemberRepository extends JpaRepository<Member, String>{
}
