package com.example.hackatur;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.hackatur.data.ApiService;
import com.google.gson.JsonObject;

import java.util.List;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class LoginActivity extends AppCompatActivity {

    private EditText etUsername, etPassword;
    private CheckBox cbRememberMe;
    private SharedPreferences sharedPref;
    private ApiService apiService;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        etUsername = findViewById(R.id.etUsername);
        etPassword = findViewById(R.id.etPassword);
        cbRememberMe = findViewById(R.id.cbRememberMe);
        Button btnLogin = findViewById(R.id.btnLogin);

        sharedPref = getPreferences(Context.MODE_PRIVATE);

        OkHttpClient.Builder httpClientBuilder = new OkHttpClient.Builder();
        HttpLoggingInterceptor loggingInterceptor = new HttpLoggingInterceptor();
        loggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
        httpClientBuilder.addInterceptor(loggingInterceptor);

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://26.158.10.106:3000/")
                .addConverterFactory(GsonConverterFactory.create())
                .client(httpClientBuilder.build())
                .build();

        apiService = retrofit.create(ApiService.class);

        if (isUserAuthenticated()) {
            startMainActivity();
        } else {
            if (sharedPref.contains("login") && sharedPref.contains("password")) {
                etUsername.setText(sharedPref.getString("login", ""));
                etPassword.setText(sharedPref.getString("password", ""));
                cbRememberMe.setChecked(true);
            }

            btnLogin.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    login();
                }
            });
        }
    }

    private void login() {
        String username = etUsername.getText().toString();
        String password = etPassword.getText().toString();

        authenticateUser(username, password);
    }

    private void authenticateUser(String username, String password) {
        Call<List<JsonObject>> call = apiService.authenticateUser(username, password);
        call.enqueue(new Callback<List<JsonObject>>() {
            @Override
            public void onResponse(Call<List<JsonObject>> call, Response<List<JsonObject>> response) {
                if (response.isSuccessful()) {
                    List<JsonObject> users = response.body();
                    if (users != null && users.size() > 0) {
                        JsonObject user = users.get(0);
                        if (isValidLogin(user, username, password)) {
                            if (cbRememberMe.isChecked()) {
                                saveCredentials(username, password);
                            }
                            startMainActivity();
                        } else {
                            Toast.makeText(LoginActivity.this, "Usuario ou senha Incorretos", Toast.LENGTH_SHORT).show();
                        }
                    } else {
                        Toast.makeText(LoginActivity.this, "Usuario ou senha Incorretos", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    try {
                        String errorBody = response.errorBody().string();
                        Log.e("API_CALL", "Erro na autenticação: " + errorBody);
                        Toast.makeText(LoginActivity.this, "Erro na autenticação", Toast.LENGTH_SHORT).show();
                    } catch (Exception e) {
                        e.printStackTrace();
                        Log.e("API_CALL", "Falha na autenticação", e);
                        Toast.makeText(LoginActivity.this, "Falha na autenticação", Toast.LENGTH_SHORT).show();
                    }
                }
            }

            @Override
            public void onFailure(Call<List<JsonObject>> call, Throwable t) {
                Log.e("API_CALL", "Erro na chamada da API: " + t.getMessage(), t);
                Toast.makeText(LoginActivity.this, "Erro na chamada da API: " + t.getMessage(), Toast.LENGTH_SHORT).show();
                t.printStackTrace();
            }
        });
    }

    private boolean isValidLogin(JsonObject user, String enteredUsername, String enteredPassword) {
        if (user != null && user.has("login") && user.has("password")) {
            String apiUsername = user.get("login").getAsString();
            String apiPassword = user.get("password").getAsString();

            return enteredUsername.trim().equalsIgnoreCase(apiUsername.trim()) && enteredPassword.trim().equals(apiPassword.trim());
        }

        return false;
    }

    private void saveCredentials(String username, String password) {
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.putString("login", username);
        editor.putString("password", password);
        editor.apply();
    }

    private boolean isUserAuthenticated() {
        return sharedPref.contains("login") && sharedPref.contains("password");
    }

    private void startMainActivity() {
        Intent intent = new Intent(LoginActivity.this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
