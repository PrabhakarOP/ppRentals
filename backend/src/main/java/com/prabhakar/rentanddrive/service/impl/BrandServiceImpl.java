package com.prabhakar.rentanddrive.service.impl;

import com.prabhakar.rentanddrive.exception.ResourceAlreadyExistExeption;
import com.prabhakar.rentanddrive.exception.ResourceNotFoundException;
import com.prabhakar.rentanddrive.model.Brand;
import com.prabhakar.rentanddrive.repository.BrandRepository;
import com.prabhakar.rentanddrive.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BrandServiceImpl implements BrandService {

    @Autowired
    private BrandRepository brandRepository;

    @Override
    public Brand addBrand(Brand brand) {
        //check if brand already exists
        if(brandRepository.findByName(brand.getName()).isEmpty()){
            return brandRepository.save(brand);
        }
        throw new ResourceAlreadyExistExeption("Brand already exists with name: " + brand.getName());
    }

    @Override
    public Brand updateBrand(Brand brand) {
        //check if brand already exists
        Brand existingBrand = brandRepository.findByName(brand.getName()).orElseThrow(()->new ResourceNotFoundException("Brand not found with name: " + brand.getName()));
        //update the brand
        existingBrand.setName(brand.getName());
        existingBrand.setLogoUrl(brand.getLogoUrl());
        //save the brand
        return brandRepository.save(existingBrand);
    }

    @Override
    public void deleteBrand(String id) {
        //check if brand already exists
        Brand existingBrand = brandRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Brand not found with id: " + id));
        //delete the brand
        brandRepository.delete(existingBrand);
    }

    @Override
    public Page<Brand> getAllBrands(int page, int size) {
        return brandRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public Brand getBrandById(String id) {
        return brandRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Brand not found with id: " + id));
    }

    @Override
    public Brand getBrandByName(String name) {
        return brandRepository.findByName(name).orElseThrow(()->new ResourceNotFoundException("Brand not found with name: " + name));
    }
}
