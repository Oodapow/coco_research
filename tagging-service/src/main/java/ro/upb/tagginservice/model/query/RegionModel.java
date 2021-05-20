package ro.upb.tagginservice.model.query;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RegionModel {
    String _id;             //: ObjectId('60a69081adfd16a70c046179'),
    List<List<Double>> segmentation;    //: [[]],
    String area;            //: 2765.1486500000005,
    String iscrowd;         //: 0,
    String image_id;        //: 558840,
    List<Double> bbox;      //: [199.84,200.46,77.71,70.88],
    String category_id;     //: 58,
    String id;              //: 156
}
