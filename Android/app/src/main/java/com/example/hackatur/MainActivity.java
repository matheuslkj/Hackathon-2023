package com.example.hackatur;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.hackatur.data.ApiService;
import com.example.hackatur.data.Transporte;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    private ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listView = findViewById(R.id.listView);

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://26.158.10.106:3000/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        ApiService apiService = retrofit.create(ApiService.class);

        Call<List<Transporte>> call = apiService.getTransportes();
        call.enqueue(new Callback<List<Transporte>>() {
            @Override
            public void onResponse(Call<List<Transporte>> call, Response<List<Transporte>> response) {
                if (response.isSuccessful()) {
                    List<Transporte> transportes = response.body();

                    if (transportes != null && !transportes.isEmpty()) {
                        String[] localSaidaDestino = new String[transportes.size()];
                        for (int i = 0; i < transportes.size(); i++) {
                            Transporte transporte = transportes.get(i);
                            localSaidaDestino[i] = "Saida de: " + transporte.getLocalPartida() + "Parada Final: " + transporte.getDestino();
                        }

                        ArrayAdapter<String> adapter = new ArrayAdapter<>(MainActivity.this, android.R.layout.simple_list_item_1, localSaidaDestino);

                        listView.setAdapter(adapter);

                        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                            @Override
                            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                                Transporte selectedTransporte = transportes.get(position);

                                Intent intent = new Intent(MainActivity.this, DetailsActivity.class);
                                intent.putExtra("transporte", selectedTransporte);
                                startActivity(intent);
                            }
                        });
                    } else {
                        String[] mensagem = {"Sem dados disponíveis"};
                        ArrayAdapter<String> adapter = new ArrayAdapter<>(MainActivity.this, android.R.layout.simple_list_item_1, mensagem);
                        listView.setAdapter(adapter);

                        Log.w("API_CALL", "A resposta da API está vazia ou nula.");
                    }
                } else {
                    Log.e("API_CALL", "Código de resposta não bem-sucedido: " + response.code());

                    String[] mensagem = {"Sem dados disponíveis"};
                    ArrayAdapter<String> adapter = new ArrayAdapter<>(MainActivity.this, android.R.layout.simple_list_item_1, mensagem);
                    listView.setAdapter(adapter);
                }
            }

            @Override
            public void onFailure(Call<List<Transporte>> call, Throwable t) {
                Log.e("API_CALL", "Falha na chamada da API", t);

                Log.e("API_CALL", "Mensagem de erro: " + t.getMessage());

                t.printStackTrace();

                String[] mensagem = {"Sem dados disponíveis"};
                ArrayAdapter<String> adapter = new ArrayAdapter<>(MainActivity.this, android.R.layout.simple_list_item_1, mensagem);
                listView.setAdapter(adapter);
            }
        });
    }
}