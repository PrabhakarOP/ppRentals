package com.prabhakar.rentanddrive.model.request.user;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
