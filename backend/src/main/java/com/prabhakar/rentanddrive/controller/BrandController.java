package com.prabhakar.rentanddrive.controller;

import com.prabhakar.rentanddrive.model.Brand;
import com.prabhakar.rentanddrive.model.base.ApiResponse;
import com.prabhakar.rentanddrive.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/brand")
public class BrandController {

    @Autowired
    private BrandService brandService;

    @PostMapping
    public ApiResponse<Brand> addBrand(@RequestBody Brand brand) {
        Brand addedBrand= brandService.addBrand(brand);
        return new ApiResponse<>(addedBrand, true,false,null);
    }

    @PutMapping
    public ApiResponse<Brand> updateBrand(@RequestBody Brand brand) {
        Brand updatedBrand= brandService.updateBrand(brand);
        return new ApiResponse<>(updatedBrand, true,false,null);
    }

    @DeleteMapping
    public void deleteBrand(@RequestParam String id) {
        brandService.deleteBrand(id);
    }
    @GetMapping
    public ApiResponse<Brand> getBrandById(@RequestParam String id) {
        Brand brand= brandService.getBrandById(id);
        return new ApiResponse<>(brand, true,false,null);
    }
    @GetMapping("/name")
    public ApiResponse<Brand> getBrandByName(@RequestParam String name) {
        Brand brand= brandService.getBrandByName(name);
        return new ApiResponse<>(brand, true,false,null);
    }
    @GetMapping("/all")
    public ApiResponse<Page<Brand>> getAllBrands(@RequestParam int page, @RequestParam int size) {
        Page<Brand> brandPage= brandService.getAllBrands(page, size);
        return new ApiResponse<>(brandPage, true,false,null);
    }
}
