package com.prabhakar.rentanddrive.model;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@ToString
@Document(collection = "users")
public class User {
    private String id;
    private String name;
    @NotNull
    private String email;
    private String phone;
    @NotNull
    private String password;
    private String profilePhotoUrl;
}
