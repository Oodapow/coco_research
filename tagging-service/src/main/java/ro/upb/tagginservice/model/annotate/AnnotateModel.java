package ro.upb.tagginservice.model.annotate;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class AnnotateModel {
    List<AnnotateImageModel> annotateImageModelList;
    String taskDescription;
    int selectedImage;
    List<String> regionList;
}
