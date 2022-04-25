package product.MemberManagement.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CustomErrorPageController {

    @RequestMapping("/error")
    public String goHome() {
        return "index";
    }
}
