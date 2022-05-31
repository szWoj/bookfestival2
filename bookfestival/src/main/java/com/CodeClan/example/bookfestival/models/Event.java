package com.CodeClan.example.bookfestival.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="events")
public class Event implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Lob
    @Column(name="description")
    private String description;

    @Column(name="price")
    private int price;

    @Column(name="dateTime")
    private String dateTime;

    @JsonIgnoreProperties({"event"})
    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    private List<Booking> bookings;


//    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "event")

//    @OneToOne(cascade = CascadeType.ALL)
    @OneToOne
    @JoinColumn(name="book_id")
    private Book book;

    @ManyToOne
    @JoinColumn(name="venue_id", nullable = false)
    @JsonIgnoreProperties({"events"})
    private Venue venue;

    public Event(String description, int price, String dateTime, Book book, Venue venue) {
        this.description = description;
        this.price = price;
        this.dateTime = dateTime;
        this.book = book;
        this.venue = venue;

    }

    public Event() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }
}
