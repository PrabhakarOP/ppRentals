package com.prabhakar.rentanddrive.service;

import com.prabhakar.rentanddrive.model.Brand;
import org.springframework.data.domain.Page;

public interface BrandService {
    Brand addBrand(Brand brand);

    Brand updateBrand(Brand brand);

    void deleteBrand(String id);

    Page<Brand> getAllBrands(int page,int size);

    Brand getBrandById(String id);
    Brand getBrandByName(String name);
}
