package ro.upb.tagginservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import ro.upb.tagginservice.model.annotate.AnnotateImageModel;
import ro.upb.tagginservice.model.annotate.AnnotateRegionModel;
import ro.upb.tagginservice.model.query.*;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class QueryService {
    @Value("${query.service.uri}")
    private String queryServiceUri;
    final ObjectMapper objectMapper = new ObjectMapper();
    private final HttpClient httpClient = HttpClient.newBuilder().version(HttpClient.Version.HTTP_2).build();

    public List<String> getCategories(String db) {
        HttpRequest request = HttpRequest.newBuilder()
                .POST(buildFormDataFromMap(null))
                .uri(URI.create(queryServiceUri + "/data/get/" + db + "/categories/0" + "/0"))
                .header("Content-Type", "application/json")
                .build();
        HttpResponse<String> response;
        try {
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            List<CategoryModel> regionModelList = objectMapper.readValue(response.body(), new TypeReference<>() {
            });
            return regionModelList.stream()
                    .map(x -> x.getName().concat("[").concat(x.getSupercategory()).concat("]"))
                    .collect(Collectors.toList());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getDescription(String db) {
        HttpRequest request = HttpRequest.newBuilder()
                .POST(buildFormDataFromMap(null))
                .uri(URI.create(queryServiceUri + "/data/get/" + db + "/info/0" + "/0"))
                .header("Content-Type", "application/json")
                .build();
        HttpResponse<String> response;
        try {
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());
            List<InfoModel> infoModel = objectMapper.readValue(response.body(), new TypeReference<>() {
            });
            return infoModel.get(0).getDescription();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<AnnotateImageModel> getImages(String db) {
        HttpRequest request = HttpRequest.newBuilder()
                .POST(buildFormDataFromMap(null))
                .uri(URI.create(queryServiceUri + "/data/get/" + db + "/images/20" + "/0"))
                .header("Content-Type", "application/json")
                .build();
        HttpResponse<String> response;
        try {
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            List<ImageModel> infoModel = objectMapper.readValue(response.body(), new TypeReference<>() {
            });
            System.out.println(infoModel);
            return infoModel.stream()
                    .map(x -> {
                        List<AnnotateRegionModel> regionModelList = null;
                        try {
                            regionModelList = getAnnotations(db, x.getId(), x.getWidth(), x.getHeight());
                        } catch (JsonProcessingException e) {
                            e.printStackTrace();
                        }
                        regionModelList = regionModelList == null ? new ArrayList<>() : regionModelList;
                        return AnnotateImageModel.builder()
                                .src(x.getCoco_url())
                                .name(x.getFile_name())
                                .regions(regionModelList)
                                .build();
                    })
                    .collect(Collectors.toList());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<AnnotateRegionModel> getAnnotations(String db, String imageId, int width, int height) throws JsonProcessingException {
        HttpRequest request = HttpRequest.newBuilder()
                .POST(buildFormDataFromMap(objectMapper.writeValueAsString(new ImageId(Long.valueOf(imageId)))))
                .uri(URI.create(queryServiceUri + "/data/get/" + db + "/annotations/0" + "/0"))
                .header("Content-Type", "application/json")
                .build();
        HttpResponse<String> response;
        try {
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            List<RegionModel> infoModel = objectMapper.readValue(response.body(), new TypeReference<>() {
            });
            return infoModel.stream().map(x -> {
                try {
                    ;
                    return AnnotateRegionModel.builder()
                            .cls(getCategory(db, x.getCategory_id()))
                            .type("box")
                            .id(x.get_id())
                            .x(x.getBbox().get(0)/width)
                            .y(x.getBbox().get(1)/height)
                            .w(x.getBbox().get(2)/width)
                            .h(x.getBbox().get(3)/height)
                            .key(x.get_id())
                            .build();
                } catch (JsonProcessingException e) {
                    e.printStackTrace();
                }
                return null;
            }).collect(Collectors.toUnmodifiableList());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getCategory(String db, String category) throws JsonProcessingException {
        HttpRequest request = HttpRequest.newBuilder()
                .POST(buildFormDataFromMap(objectMapper.writeValueAsString(new GenericIdModel(Long.parseLong(category)))))
                .uri(URI.create(queryServiceUri + "/data/get/" + db + "/categories/0" + "/0"))
                .header("Content-Type", "application/json")
                .build();
        HttpResponse<String> response;
        try {
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            List<CategoryModel> infoModel = objectMapper.readValue(response.body(), new TypeReference<>() {
            });
            CategoryModel x = infoModel.stream().findFirst().get();
            return x.getName().concat("[").concat(x.getSupercategory()).concat("]");
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    private static HttpRequest.BodyPublisher buildFormDataFromMap(String data) {
        return HttpRequest.BodyPublishers.ofString(Objects.requireNonNullElse(data, "{}"));
    }
}
