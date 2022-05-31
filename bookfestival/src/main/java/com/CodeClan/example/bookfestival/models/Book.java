package com.CodeClan.example.bookfestival.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name= "books")
public class Book implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name= "title")
    private String title;


    @JsonIgnoreProperties({"books"})
    @ManyToOne
    @JoinColumn(name="author_id", nullable = false)
    private Author author;

    @Column(name= "genre")
    private String genre;

    @Column(name= "photoUrl")
    private String photoUrl;

//    @OneToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "event_id", nullable = false)
    @OneToOne(mappedBy = "book")
    private Event event;


    public Book(String title, Author author, String genre, String photoUrl) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.photoUrl = photoUrl;
    }

    public Book() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

//    public Event getEvent() {
//        return event;
//    }
//
//    public void setEvent(Event event) {
//        this.event = event;
//    }
}
