package com.example.hackatur;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.hackatur.data.Transporte;


public class DetailsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);


        Transporte transporte = getIntent().getParcelableExtra("transporte");

        if (transporte != null) {
            TextView rotaTextView = findViewById(R.id.rotaTextView);
            TextView descricaoTextView = findViewById(R.id.descricaoTextView);
            TextView placaTextView = findViewById(R.id.placaTextView);
            TextView transportadoraTextView = findViewById(R.id.transportadoraTextView);
            TextView localPartidaTextView = findViewById(R.id.localPartidaTextView);
            TextView destinoTextView = findViewById(R.id.destinoTextView);
            TextView saidaTextView = findViewById(R.id.saidaTextView);
            TextView chegadaTextView = findViewById(R.id.chegadaTextView);
            TextView nomeTextView = findViewById(R.id.nomeTextView);
            TextView enderecoTextView = findViewById(R.id.enderecoTextView);
            TextView telefoneTextView = findViewById(R.id.telefoneTextView);
            TextView emailTextView = findViewById(R.id.emailTextView);
            TextView sitioTextView = findViewById(R.id.sitioTextView);

            rotaTextView.setText("Rota: " + String.valueOf(transporte.getRota()));
            descricaoTextView.setText("Descrição: " + transporte.getDescricao());
            placaTextView.setText("Placa: " + transporte.getPlaca());
            transportadoraTextView.setText("Compania: " + String.valueOf(transporte.getTransportadora()));
            localPartidaTextView.setText("Local de Partida: " + transporte.getLocalPartida());
            destinoTextView.setText("Destino: " + transporte.getDestino());
            saidaTextView.setText("Saída: " + transporte.getSaida());
            chegadaTextView.setText("Chegada: " + transporte.getChegada());
            nomeTextView.setText("Nome: " + transporte.getNome());
            enderecoTextView.setText("Endereço: " + transporte.getEndereco());
            telefoneTextView.setText("Telefone: " + String.valueOf(transporte.getTelefone()));
            emailTextView.setText("Email: " + transporte.getEmail());
            sitioTextView.setText("Site: " + transporte.getSitio());
        }
    }
}