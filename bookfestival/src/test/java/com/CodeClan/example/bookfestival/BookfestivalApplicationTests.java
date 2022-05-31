package com.CodeClan.example.bookfestival;

//import com.CodeClan.example.bookfestival.models.Event;
import com.CodeClan.example.bookfestival.repositories.AuthorRepository;
import com.CodeClan.example.bookfestival.repositories.BookRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class BookfestivalApplicationTests {

	@Autowired
	BookRepository bookRepository;

	@Autowired
	AuthorRepository authorRepository;

//	@Autowired
//	EventRepository eventRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateAuthorAneEventAndBook(){
//		Author author = new Author("Faridah Àbíké-Íyímídé", "images.api.edinburghfestivalcity.com/5a/44/18/5a4418cbbf1692b496f15234efd65953d2c51870-original");
//		authorRepository.save(author);
//
//		Book book = new Book("Play the Cards You're Dealt",author, "Children","images.api.edinburghfestivalcity.com/5a/44/18/5a4418cbbf1692b496f15234efd65953d2c51870-original");
//		bookRepository.save(book);
//
//		Event event = new Event("<p>\\n\\tFaridah &Agrave;b&iacute;k&eacute;-&Iacute;y&iacute;m&iacute;d&eacute; is the instant New York Times and IndieBound bestselling author of <em>Ace of Spades</em>",book, 10.50, "2021-08-15 17:15:00");
//		eventRepository.save(event);
	}



}
