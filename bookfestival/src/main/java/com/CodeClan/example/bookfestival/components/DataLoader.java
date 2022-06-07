package com.CodeClan.example.bookfestival.components;

import com.CodeClan.example.bookfestival.models.*;
import com.CodeClan.example.bookfestival.repositories.*;
import com.CodeClan.example.bookfestival.utilities.Utilities;
import com.CodeClan.example.bookfestival.utilities.UtilitiesInt;
//import com.sun.org.apache.xpath.internal.operations.Bool;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    VenueRepository venueRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Value("${app.apiKey}")
    private String apiKey;


    public DataLoader() throws MalformedURLException {}

    public void run(ApplicationArguments args) throws IOException {
        URL url = new URL("https://api.edinburghfestivalcity.com/events?festival=book&year=2021&key="+apiKey);

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.connect();

        if (conn.getResponseCode() != 200) {
            throw new RuntimeException("HttpResponseCode: " + conn.getResponseCode());
        } else {
            Scanner scanner = new Scanner(url.openStream());
            String data = "";

            while (scanner.hasNext()) {
                data += scanner.nextLine();
            }

            scanner.close();

            JSONArray jsonArr = new JSONArray(data);
            List<Author> authorList;
            List<Venue> venueList;
            List<Event> eventList;
            List<Book> bookList;


            authorList = new ArrayList<>();
            for (int i = 0; i < jsonArr.length(); i++) {
                JSONObject jsonObj = jsonArr.getJSONObject(i);
                if (i == 15){
                    Author author1 = new Author("Willy Vlautin", Utilities.checkIfNull(jsonObj, "url"));
                    authorList.add(author1);
                } else if (i == 16){
                    Author author5 = new Author("Nick Bryant", Utilities.checkIfNull(jsonObj, "url"));
                    authorList.add(author5);
                } else if (i == 7){
                    Author author2 = new Author("Katie Kitamura", Utilities.checkIfNull(jsonObj, "url"));
                    authorList.add(author2);
                } else if (i == 8){
                    Author author3 = new Author("Salman Rushdie", Utilities.checkIfNull(jsonObj, "url"));
                    authorList.add(author3);
                } else {
                    Author author = new Author(Utilities.checkIfNull(jsonObj, "artist"), Utilities.checkIfNull(jsonObj, "url"));
                    authorList.add(author);
                }
            }

            for (int i = 0; i < authorList.size(); i++) {
                authorRepository.save(authorList.get(i));
            }

            venueList = new ArrayList<>();
            Venue venue = new Venue(Utilities.checkIfNull(jsonArr.getJSONObject(0).getJSONObject("venue"), "name"), Utilities.checkIfNull(jsonArr.getJSONObject(0).getJSONObject("venue"), "address"), UtilitiesInt.checkIfNull(jsonArr.getJSONObject(0).getJSONObject("venue"), "phone"),Utilities.checkIfNull(jsonArr.getJSONObject(0).getJSONObject("performance_space"), "wheelchair_access"), UtilitiesInt.checkIfNull(jsonArr.getJSONObject(0).getJSONObject("performance_space"), "capacity"), jsonArr.getJSONObject(0).getDouble("latitude"), jsonArr.getJSONObject(0).getDouble("longitude"));
            venueList.add(venue);

//            for (int i = 0; i < jsonArr.length(); i++) {
//                JSONObject jsonObj = jsonArr.getJSONObject(i);
//                Venue venue = new Venue(Utilities.checkIfNull(jsonObj.getJSONObject("venue"), "name"), Utilities.checkIfNull(jsonObj.getJSONObject("venue"), "address"), UtilitiesInt.checkIfNull(jsonObj.getJSONObject("venue"), "phone"),Utilities.checkIfNull(jsonObj.getJSONObject("performance_space"), "wheelchair_access"), UtilitiesInt.checkIfNull(jsonObj.getJSONObject("performance_space"), "capacity"), jsonObj.getDouble("latitude"), jsonObj.getDouble("longitude"));
//                venueList.add(venue);
//            }

            for (int i = 0; i < venueList.size(); i++) {
                venueRepository.save(venueList.get(i));
            }

            bookList = new ArrayList<>();

            Book book1 = new Book("Grimwood", authorList.get(0), Utilities.checkIfNull(jsonArr.getJSONObject(0), "genre"), "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629054816i/56180789.jpg");
            bookList.add(book1);
            bookRepository.save(book1);

            Book book2 = new Book("Aarti and the Blue Gods", authorList.get(1), Utilities.checkIfNull(jsonArr.getJSONObject(1), "genre"), "https://images-na.ssl-images-amazon.com/images/I/81TAr3e2XZL.jpg");
            bookList.add(book2);
            bookRepository.save(book2);

            Book book3 = new Book("Noughts & Crosses", authorList.get(2), Utilities.checkIfNull(jsonArr.getJSONObject(2), "genre"), "https://images-na.ssl-images-amazon.com/images/I/715GXDM1MnL.jpg");
            bookList.add(book3);
            bookRepository.save(book3);

            Book book4 = new Book("Ace of Spades", authorList.get(3), Utilities.checkIfNull(jsonArr.getJSONObject(3), "genre"), "https://images-na.ssl-images-amazon.com/images/I/610YVFLczBL.jpg");
            bookList.add(book4);
            bookRepository.save(book4);

            Book book5 = new Book("The Properties of Perpetual Lights", authorList.get(4), Utilities.checkIfNull(jsonArr.getJSONObject(4), "genre"), "https://m.media-amazon.com/images/I/41H0AvVis7L.jpg");
            bookList.add(book5);
            bookRepository.save(book5);

            Book book6 = new Book("The Long Drop", authorList.get(5), Utilities.checkIfNull(jsonArr.getJSONObject(5), "genre"), "https://productimages.worldofbooks.com/1784704857.jpg");
            bookList.add(book6);
            bookRepository.save(book6);

            Book book7 = new Book("Empireland", authorList.get(6), Utilities.checkIfNull(jsonArr.getJSONObject(6), "genre"), "https://www.penguin.co.uk/content/dam/prh/books/317/317240/9780241445310.jpg.transform/PRHDesktopWide_small/image.jpg");
            bookList.add(book7);
            bookRepository.save(book7);

            Book book8 = new Book("Intimacies", authorList.get(7), Utilities.checkIfNull(jsonArr.getJSONObject(7), "genre"), "https://www.penguin.co.uk/content/dam/prh/books/111/1118391/9781787332003.jpg.transform/PRHDesktopWide_small/image.jpg");
            bookList.add(book8);
            bookRepository.save(book8);

            Book book9 = new Book("Languages of Truth", authorList.get(8), Utilities.checkIfNull(jsonArr.getJSONObject(8), "genre"), "https://cdn.waterstones.com/bookjackets/large/9781/7873/9781787331938.jpg");
            bookList.add(book9);
            bookRepository.save(book9);

            Book book10 = new Book("Together", authorList.get(9), Utilities.checkIfNull(jsonArr.getJSONObject(9), "genre"),"https://cdn.waterstones.com/bookjackets/large/9780/0083/9780008393847.jpg");
            bookList.add(book10);
            bookRepository.save(book10);

            Book book11 = new Book("Black History Walking Tours",  authorList.get(10), Utilities.checkIfNull(jsonArr.getJSONObject(10), "genre"), "https://i2-prod.edinburghlive.co.uk/incoming/article21737328.ece/ALTERNATES/s810/0_IMG-9481JPG.jpg");
            bookList.add(book11);
            bookRepository.save(book11);

            Book book12 = new Book("Be Resilient: How to Build a Strong Teenage Mind for Tough Times", authorList.get(11), Utilities.checkIfNull(jsonArr.getJSONObject(11), "genre"), "https://images-na.ssl-images-amazon.com/images/I/51U4gaRi-HL._SX323_BO1,204,203,200_.jpg");
            bookList.add(book12);
            bookRepository.save(book12);

            Book book13 = new Book("Musical Truth: A Musical History of Modern Black Britain in 28 Songs", authorList.get(12), Utilities.checkIfNull(jsonArr.getJSONObject(12), "genre"), "https://images-na.ssl-images-amazon.com/images/I/8150ceZTIrL.jpg");
            bookList.add(book13);
            bookRepository.save(book13);

            Book book14 = new Book("The Woolly Bear Caterpillar", authorList.get(13), Utilities.checkIfNull(jsonArr.getJSONObject(13), "genre"), "https://images-na.ssl-images-amazon.com/images/I/91KqOViUbFS.jpg");
            bookList.add(book14);
            bookRepository.save(book14);

            Book book15 = new Book("After the Sun", authorList.get(14), Utilities.checkIfNull(jsonArr.getJSONObject(14), "genre"),"https://images.penguinrandomhouse.com/cover/9780593329108");
            bookList.add(book15);
            bookRepository.save(book15);

            Book book16 = new Book("The Night Always Comes", authorList.get(15), Utilities.checkIfNull(jsonArr.getJSONObject(15), "genre"), "https://productimages.worldofbooks.com/0571361919.jpg");
            bookList.add(book16);
            bookRepository.save(book16);

            Book book17 = new Book("When America Stopped Being Great", authorList.get(16), Utilities.checkIfNull(jsonArr.getJSONObject(16), "genre"), "https://images-na.ssl-images-amazon.com/images/I/51M5naejv2L._SX323_BO1,204,203,200_.jpg");
            bookList.add(book17);
            bookRepository.save(book17);

            Book book18 = new Book("Open Water", authorList.get(17), Utilities.checkIfNull(jsonArr.getJSONObject(17), "genre"), "https://www.penguin.co.uk/content/dam/prh/books/131/1317654/9780241992289.jpg.transform/PRHDesktopWide_small/image.jpg");
            bookList.add(book18);
            bookRepository.save(book18);

            Book book19 = new Book("Pond", authorList.get(18), Utilities.checkIfNull(jsonArr.getJSONObject(18), "genre"), "https://images-na.ssl-images-amazon.com/images/I/91B7n7QZyYL.jpg");
            bookList.add(book19);
            bookRepository.save(book19);

            Book book20 = new Book("Nervous System", authorList.get(19), Utilities.checkIfNull(jsonArr.getJSONObject(19), "genre"), "https://cdn.waterstones.com/bookjackets/large/9781/7864/9781786499493.jpg");
            bookList.add(book20);
            bookRepository.save(book20);

            Book book21 = new Book("The Dragons, The Giant, The Women", authorList.get(20), Utilities.checkIfNull(jsonArr.getJSONObject(20), "genre"), "https://productimages.worldofbooks.com/1644450313.jpg");
            bookList.add(book21);
            bookRepository.save(book21);

            Book book22 = new Book("Rapping Princess", authorList.get(21), Utilities.checkIfNull(jsonArr.getJSONObject(21), "genre"), "https://productimages.worldofbooks.com/0571361153.jpg");
            bookList.add(book22);
            bookRepository.save(book22);

            Book book23 = new Book("Blood Legacy", authorList.get(22), Utilities.checkIfNull(jsonArr.getJSONObject(22), "genre"), "https://m.media-amazon.com/images/I/51jiLQ+8k8S.jpg");
            bookList.add(book23);
            bookRepository.save(book23);

            Book book24 = new Book("The Friendly Snail", authorList.get(23), Utilities.checkIfNull(jsonArr.getJSONObject(23), "genre"), "https://nosycrow.com/wp-content/uploads/imported-books/Pip-and-Posy-The-Friendly-Snail-26056-1-scaled.jpg");
            bookList.add(book24);
            bookRepository.save(book24);

            Book book25 = new Book("The Dark Remains", authorList.get(24), Utilities.checkIfNull(jsonArr.getJSONObject(24), "genre"), "https://m.media-amazon.com/images/I/51cYpIFLvKL.jpg");
            bookList.add(book25);
            bookRepository.save(book25);

            Book book26 = new Book("The Magic Paintbrush", authorList.get(13), Utilities.checkIfNull(jsonArr.getJSONObject(13), "genre"),"https://d3ddkgxe55ca6c.cloudfront.net/assets/t1562667405/a/40/37/202116-ml-1882823.jpg");
            bookRepository.save(book26);

            Book book27 = new Book("The Scarecrows' Wedding", authorList.get(13), Utilities.checkIfNull(jsonArr.getJSONObject(13), "genre"),"https://images-na.ssl-images-amazon.com/images/I/A14niuUQggL.jpg");
            bookRepository.save(book27);

            Book book28 = new Book("The Birthday Party", authorList.get(23), Utilities.checkIfNull(jsonArr.getJSONObject(23), "genre"), "https://cdn.waterstones.com/bookjackets/large/9781/8399/9781839943195.jpg");
            bookList.add(book28);
            bookRepository.save(book28);


            eventList = new ArrayList<>();
            for (int i = 0; i < jsonArr.length(); i++){
                JSONObject jsonObj = jsonArr.getJSONObject(i);
                Event event = new Event(Utilities.checkIfNull(jsonObj, "title"), Utilities.checkIfNull(jsonObj, "description"),UtilitiesInt.checkIfNull(jsonObj.getJSONArray("performances").getJSONObject(0), "price"), Utilities.checkIfNull(jsonObj.getJSONArray("performances").getJSONObject(0), "start"), bookList.get(i), venueList.get(0));
                eventList.add(event);
            }

            for (int i = 0; i < eventList.size(); i++) {
                eventRepository.save(eventList.get(i));
            }




        }

    }
    }
