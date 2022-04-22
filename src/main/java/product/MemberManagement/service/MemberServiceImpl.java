package product.MemberManagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import product.MemberManagement.domain.Member;
import product.MemberManagement.domain.MemberRepository;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;

    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public Member join(Member member) {
        if (memberRepository.existsById(member.getPhone()))
            return null;
        else
            return memberRepository.save(member);
    }

    @Override
    public Member delete(String phone) {
        Member target = memberRepository.getById(phone);
        memberRepository.deleteById(phone);
        return target;
    }

    @Override
    public Member findByPhone(String phone) {
        Member target = null;

        if (memberRepository.existsById(phone)) {
            target = memberRepository.getById(phone);
        }

        return target;
    }

    @Override
    public List<Member> findAll() {
        List<Member> all = memberRepository.findAll();
        if(!all.isEmpty())
            return all;

        return null;
    }

    @Override
    public void clearMember() {
        memberRepository.deleteAll();
    }
}
