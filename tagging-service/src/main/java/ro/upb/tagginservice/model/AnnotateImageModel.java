package ro.upb.tagginservice.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class AnnotateImageModel {
    String src;
    String name;
    List<AnnotateRegionModel> annotateRegionModels;
}
