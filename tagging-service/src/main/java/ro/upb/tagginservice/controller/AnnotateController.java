package ro.upb.tagginservice.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.upb.tagginservice.model.AnnotateModel;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;

@RestController
@RequiredArgsConstructor
@RequestMapping("/annotate")
@Slf4j
public class AnnotateController {
    private final HttpClient httpClient;
    @GetMapping("/data/get/{db}/{col}/{key}")
    AnnotateModel getInitial(@PathVariable String col, @PathVariable String db){
        HttpRequest request = HttpRequest.newBuilder()
                .POST()
                .uri()
                .header()
                .build();
    }

}
