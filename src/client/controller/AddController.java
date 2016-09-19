package client.controller;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

;

public class AddController extends AbstractController {
    @Override
    protected ModelAndView handleRequestInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
        if (httpServletRequest.getMethod().equals("GET")){
            Map<String,String> data = new HashMap<String,String>();
            data.put("msg", "i m here");
            return  new ModelAndView("add", data);
        }
        return null;
    }
}
