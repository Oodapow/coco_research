package ro.upb.tagginservice.model.query;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ro.upb.tagginservice.model.annotate.AnnotateRegionModel;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class RegionModel {
    String _id;                         //: ObjectId('60a69081adfd16a70c046179'),
    List<List<Double>> segmentation;    //: [[]],
    Double area;                        //: 2765.1486500000005,
    int iscrowd;                     //: 0,
    long image_id;                    //: 558840,
    List<Double> bbox;                  //: [199.84,200.46,77.71,70.88], [x,y,w,h]
    Long category_id;                 //: 58,
    long id;                          //: 156

    public RegionModel(AnnotateRegionModel annotateRegionModel, long width, long height, long image_id) {
        this._id = annotateRegionModel.getId();
        this.segmentation = new ArrayList<>();
        this.area = 0.D;
        this.iscrowd = 0;
        this.bbox = List.of(
                annotateRegionModel.getX() * width,
                annotateRegionModel.getY() * height,
                annotateRegionModel.getW() * width,
                annotateRegionModel.getH() * height);
        category_id = annotateRegionModel.getCategoryId();
        this.image_id = image_id;
    }

}
