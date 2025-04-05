package com.prabhakar.rentanddrive.exception;

import lombok.AllArgsConstructor;
import lombok.Data;


public class CustomError {
    private String errorMessage;
    private String errorCode;

    public CustomError(String errorMessage, String errorCode) {
        this.errorMessage = errorMessage;
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
