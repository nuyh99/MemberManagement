package product.MemberManagement.repository;

import org.springframework.stereotype.Repository;
import product.MemberManagement.domain.Member;

import java.util.HashMap;

public class MemoryMember implements MemberInterface{
    private static HashMap<String, Member> memoryMember = new HashMap<>();

    @Override
    public Member save(Member member) {
        if(memoryMember.containsKey(member.getPhone()))
            return null;

        memoryMember.put(member.getPhone(), member);
        return member;
    }

    @Override
    public Member delete(String phone) {
        if(memoryMember.containsKey(phone)) {
            Member member = memoryMember.get(phone);
            memoryMember.remove(phone);
            return member;
        }

        return null;
    }

    @Override
    public Member isExist(String phone) {
        if(memoryMember.containsKey(phone))
            return memoryMember.get(phone);

        else
            return null;
    }

    @Override
    public void deleteAll() {
        memoryMember.clear();
    }
}
