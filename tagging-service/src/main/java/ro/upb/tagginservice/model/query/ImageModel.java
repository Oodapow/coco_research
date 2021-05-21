package ro.upb.tagginservice.model.query;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageModel {
    String _id;             //: ObjectId('60a69080adfd16a70c03c339'),
    String license;         //: 3,
    String file_name;       //: 'COCO_val2014_000000391895.jpg',
    String coco_url;        //: 'http://images.cocodataset.org/val2014/COCO_val2014_000000391895.jpg',
    int height;             //: 360,
    int width;               //: 640,
    String date_captured;   //: '2013-11-14 11:18:45',
    String flickr_url;      //: 'http://farm9.staticflickr.com/8186/8119368305_4e622c8349_z.jpg',
    String id;              //: 391895
}
