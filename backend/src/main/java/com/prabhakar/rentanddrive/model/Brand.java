package com.prabhakar.rentanddrive.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "brands")
public class Brand {
    private String id;
    private String name;
    private String logoUrl;
}
