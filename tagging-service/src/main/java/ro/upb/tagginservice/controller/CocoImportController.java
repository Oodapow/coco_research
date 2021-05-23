package ro.upb.tagginservice.controller;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ro.upb.tagginservice.service.QueryService;

@RestController
@RequiredArgsConstructor
@Slf4j
public class CocoImportController {

    @NonNull
    private final QueryService queryService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/data/import/{fileName}")
    public String importData(@PathVariable String fileName, @RequestBody String body){
        return queryService.importData(fileName,body);
    }

}
