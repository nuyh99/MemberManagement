package product.MemberManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import product.MemberManagement.DTO.WorkerResponse;
import product.MemberManagement.domain.Member;
import product.MemberManagement.domain.Permission;
import product.MemberManagement.domain.Phone;
import product.MemberManagement.domain.Worker;
import product.MemberManagement.service.MemberService;
import product.MemberManagement.service.WorkerService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/api")
public class IntegratedController {
    private final WorkerService workerService;
    private final MemberService memberService;

    @Autowired
    public IntegratedController(WorkerService workerService, MemberService memberService) {
        this.workerService = workerService;
        this.memberService = memberService;
    }

    @RequestMapping("/error")
    public String errorHandler(){return "forward:/";}

    @PostMapping("/")
    @ResponseBody
    public String index(@RequestBody Worker worker) {
        return worker.toString();
    }

    @PostMapping("/login")      //직원 로그인
    @ResponseBody
    public String login(@RequestBody Worker worker,
                        HttpServletResponse response) {
        if (workerService.login(worker) != null) {
            Cookie idCookie = new Cookie("cookie", worker.getId());
            idCookie.setPath("/");
            idCookie.setHttpOnly(true);
            response.addCookie(idCookie);
            return "success";
        }

        return null;
    }

    @PostMapping("/logout")     //직원 로그아웃
    @ResponseBody
    public void logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("id", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
    }

    @PostMapping("/workerJoin")     //직원 회원가입
    @ResponseBody
    public String register(@RequestBody Worker worker) {
        Worker result = workerService.join(worker);
        if(result!=null)
            return result.toString();

        return null;
    }

    @GetMapping("/workers")     //직원 전체 조회
    @ResponseBody
    public List<WorkerResponse> findAllWorker(@CookieValue(name = "cookie") Cookie cookie) {
        if (workerService.checkPermission(cookie.getValue()) == Permission.MASTER) {
            return workerService.findAll();
        }

        return null;
    }

    @PostMapping("/permission")       //직원 권한 주기(MASTER 등급만 가능)
    @ResponseBody
    public String givePermission(@CookieValue(name = "cookie") Cookie cookie,
                                 @RequestBody Worker worker) {
        if (workerService.checkPermission(cookie.getValue()) == Permission.MASTER) {
            Worker result = workerService.givePermission(worker, worker.getPermission());
            if(result!=null)
                return result.toString();
        }

        return null;
    }

    @PostMapping("/member")     //회원(이름, 전화번호) 추가(MASTER 등급만 가능)
    @ResponseBody
    public String memberRegister(@CookieValue(name = "cookie") Cookie cookie,
                                 @RequestBody Member member) {
        if (workerService.checkPermission(cookie.getValue()) == Permission.MASTER) {
            Member result = memberService.join(member);
            if (result != null)
                return result.toString();
        }

        return null;
    }

    @GetMapping("/member")      //휴대폰 번호로 조회(MASTER, WORKER 등급만 가능)
    @ResponseBody
    public Boolean getMemberByPhone(@CookieValue(name = "cookie") Cookie cookie,
                                    @RequestParam("phone") String phone) {
        Permission permission = workerService.checkPermission(cookie.getValue());
        if (permission==Permission.MASTER || permission==Permission.WORKER) {
            Member byPhone = memberService.findByPhone(phone);
            return byPhone != null;
        }

        return null;
    }

    @GetMapping("/members")             //회원 전체 조회(MASTER 등급만 가능)
    @ResponseBody
    public List<Member> getAllMember(@CookieValue(name="cookie") Cookie cookie){
        Permission permission = workerService.checkPermission(cookie.getValue());
        if (permission == Permission.MASTER) {
            return memberService.findAll();
        }

        return null;
    }

    @PostMapping("/member/delete")      //전화번호로 회원 삭제(MASTER 등급만 가능)
    @ResponseBody
    @Transactional
    public String deleteMember(@CookieValue(name = "cookie") Cookie cookie,
                               @RequestBody Phone phone) {
        if (workerService.checkPermission(cookie.getValue()) == Permission.MASTER) {
            Member result = memberService.delete(phone.getPhone());
            if (result != null)
                return result.toString();
        }

        return null;
    }

    @DeleteMapping("/member/deleteAll")
    public void clearMember(@CookieValue(name = "cookie") Cookie cookie) {
        if (workerService.checkPermission(cookie.getValue()) == Permission.MASTER)
            memberService.clearMember();
    }
}
