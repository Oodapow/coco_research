package ro.upb.tagginservice.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AnnotateModel {
    List<AnnotateImageModel> annotateImageModelList;
    String taskDescription;
    int selectedImage;
    List<String> regionList;
}
