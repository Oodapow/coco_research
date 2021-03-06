package ro.upb.tagginservice.model.annotate;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@Builder
public class AnnotateImageModel {
    String src;
    String name;
    String imageId;
    String _id;
    List<AnnotateRegionModel> regions;
}
