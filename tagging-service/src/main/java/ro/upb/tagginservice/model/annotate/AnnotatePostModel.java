package ro.upb.tagginservice.model.annotate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class AnnotatePostModel {
    String src;
    long imageId;
    String _id;
    String name;
    AnnotatePixelSizeImageModel pixelSize;
    List<AnnotateRegionModel> regions;
}
