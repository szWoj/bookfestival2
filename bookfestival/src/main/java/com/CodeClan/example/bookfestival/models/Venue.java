package com.CodeClan.example.bookfestival.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="venues")
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="address")
    private String address;

    @Column(name="phoneNumber")
    private int phoneNumber;

    @Column(name="disabledAccess")
    private String disabledAccess;

    @Column(name="capacity")
    private int capacity;

    @Column(name="latitude")
    private Double latitude;

    @Column(name="longitude")
    private Double longitude;

//    @OneToOne(mappedBy = "venue")
    @JsonIgnoreProperties({"venue"})
    @OneToMany(mappedBy = "venue", fetch = FetchType.LAZY)
    private List<Event> events;

    public Venue(String name, String address, int phoneNumber, String disabledAccess, int capacity, Double latitude, Double longitude) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.disabledAccess = disabledAccess;
        this.capacity = capacity;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Venue() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDisabledAccess() {
        return disabledAccess;
    }

    public void setDisabledAccess(String disabledAccess) {
        this.disabledAccess = disabledAccess;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }
}
