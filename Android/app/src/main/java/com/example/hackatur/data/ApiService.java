package com.example.hackatur.data;

import com.google.gson.JsonObject;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;


public interface ApiService {
    @GET("Transporte")
    Call<List<Transporte>> getTransportes();
    @GET("Usuario")
    Call<List<JsonObject>> authenticateUser(@Query("login") String login, @Query("password") String password);

}