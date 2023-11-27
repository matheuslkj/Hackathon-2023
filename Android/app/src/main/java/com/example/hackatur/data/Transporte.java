package com.example.hackatur.data;

import android.os.Parcel;
import android.os.Parcelable;

import com.google.gson.annotations.SerializedName;

public class Transporte  implements Parcelable {
    @SerializedName("id")
    private int id;

    @SerializedName("rota")
    private int rota;

    @SerializedName("descrição")
    private String descricao;

    @SerializedName("placa")
    private String placa;

    @SerializedName("assento")
    private int assento;

    @SerializedName("transportadora")
    private int transportadora;

    @SerializedName("localPartida")
    private String localPartida;

    @SerializedName("destino")
    private String destino;

    @SerializedName("saida")
    private String saida;

    @SerializedName("chegada")
    private String chegada;

    @SerializedName("nome")
    private String nome;

    @SerializedName("endereço")
    private String endereco;

    @SerializedName("telefone")
    private long telefone;

    @SerializedName("email")
    private String email;

    @SerializedName("sitio")
    private String sitio;

    public int getId() {
        return id;
    }

    public int getRota() {
        return rota;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getPlaca() {
        return placa;
    }

    public int getAssento() {
        return assento;
    }

    public int getTransportadora() {
        return transportadora;
    }

    public String getLocalPartida() {
        return localPartida;
    }

    public String getDestino() {
        return destino;
    }

    public String getSaida() {
        return saida;
    }

    public String getChegada() {
        return chegada;
    }

    public String getNome() {
        return nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public long getTelefone() {
        return telefone;
    }

    public String getEmail() {
        return email;
    }

    public String getSitio() {
        return sitio;
    }

    protected Transporte(Parcel in) {
        id = in.readInt();
        rota = in.readInt();
        descricao = in.readString();
        placa = in.readString();
        assento = in.readInt();
        transportadora = in.readInt();
        localPartida = in.readString();
        destino = in.readString();
        saida = in.readString();
        chegada = in.readString();
        nome = in.readString();
        endereco = in.readString();
        telefone = in.readInt();
        email = in.readString();
        sitio = in.readString();

    }

    public static final Creator<Transporte> CREATOR = new Creator<Transporte>() {
        @Override
        public Transporte createFromParcel(Parcel in) {
            return new Transporte(in);
        }

        @Override
        public Transporte[] newArray(int size) {
            return new Transporte[size];
        }
    };

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeInt(id);
        dest.writeInt(rota);
        dest.writeString(descricao);
        dest.writeString(placa);
        dest.writeInt(assento);
        dest.writeInt(transportadora);
        dest.writeString(localPartida);
        dest.writeString(destino);
        dest.writeString(saida);
        dest.writeString(chegada);
        dest.writeString(nome);
        dest.writeString(endereco);
        dest.writeInt((int) telefone);
        dest.writeString(email);
        dest.writeString(sitio);
    }

}
