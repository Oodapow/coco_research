package ro.upb.tagginservice.controller;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ro.upb.tagginservice.model.annotate.AnnotateModel;
import ro.upb.tagginservice.service.QueryService;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/annotate")
@Slf4j
public class AnnotateController {

    @NonNull
    private final QueryService queryService;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/data/get/{db}")
    AnnotateModel getInitial(@PathVariable String db, @RequestBody(required = false) Map<Object, Object> data){
        return AnnotateModel.builder()
                .regionList(queryService.getCategories(db))
                .taskDescription(queryService.getDescription(db))
                .annotateImageModelList(queryService.getImages(db))
                .build();
    }



}
