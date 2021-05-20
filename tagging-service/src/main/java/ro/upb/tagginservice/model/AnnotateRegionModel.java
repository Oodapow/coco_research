package ro.upb.tagginservice.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnnotateRegionModel {
    String cls;                     //: "Cat"
    String color;                   //: "#2196f3"
    boolean editingLabels;          //: false
    boolean highlighted;            //: false
    String id;                      //: "3553010435210764"
    String type;                    //: "box"
    double h;                       //: 0.3705263157894737
    double w;                       //: 0.40210526315789474
    double x;                       //: 0.14210526315789473
    double y;                       //: 0.14736842105263157
}
