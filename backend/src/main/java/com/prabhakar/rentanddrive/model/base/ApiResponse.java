package com.prabhakar.rentanddrive.model.base;

import com.prabhakar.rentanddrive.exception.CustomError;

public class ApiResponse<T> {
    private T content;
    private boolean isSuccess;
    private boolean isFailure;
    private CustomError error;


    public ApiResponse(T content, boolean isSuccess, boolean isFailure, CustomError error) {
        this.content = content;
        this.isSuccess = isSuccess;
        this.isFailure = isFailure;
        this.error = error;
    }
    public T getContent() {
        return content;
    }
    public void setContent(T content) {
        this.content = content;
    }

    public boolean isSuccess() {
        return isSuccess;
    }
    public void setSuccess(boolean isSuccess) {
        this.isSuccess = isSuccess;
    }
    public boolean isFailure() {
        return isFailure;
    }
    public void setFailure(boolean isFailure) {
        this.isFailure = isFailure;
    }
    public CustomError getError() {
        return error;
    }
    public void setError(CustomError error) {
        this.error = error;
    }

    @Override
    public String toString() {
        return "ApiResponse{" +
                "content=" + content +
                ", isSuccess=" + isSuccess +
                ", isFailure=" + isFailure +
                ", error=" + error +
                '}';
    }
}
