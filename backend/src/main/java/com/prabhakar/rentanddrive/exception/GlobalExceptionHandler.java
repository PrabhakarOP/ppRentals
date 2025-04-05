package com.prabhakar.rentanddrive.exception;

import com.prabhakar.rentanddrive.model.base.ApiResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ApiResponse<Object> handleGenericException(Exception e) {
        CustomError error=new CustomError("Something went wrong", "500");
        System.out.println(e.getMessage());
        return new ApiResponse<>(null, false, true, error);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ApiResponse<Object> handleResourceNotFoundException(ResourceNotFoundException e) {
        CustomError error=new CustomError(e.getMessage(), "404");
        return new ApiResponse<>(null, false, true, error);
    }

    @ExceptionHandler(ResourceAlreadyExistExeption.class)
    public ApiResponse<Object> handleResourceAlreadyExistException(ResourceAlreadyExistExeption e) {
        CustomError error=new CustomError(e.getMessage(), "409");
        return new ApiResponse<>(null, false, true, error);
    }
}
