package ro.upb.gateway.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(fluent = true)
public class User implements Serializable {
    private Long id;
    private String username;
    private String password;
}
