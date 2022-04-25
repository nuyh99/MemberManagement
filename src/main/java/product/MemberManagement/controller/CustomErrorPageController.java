package product.MemberManagement.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CustomErrorPageController implements ErrorController {

    @RequestMapping("/error")
    public String goHome() {
        return "index";
    }
}
